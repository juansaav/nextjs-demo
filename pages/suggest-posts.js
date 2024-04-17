import React, { useState, useCallback, useEffect } from "react";
import Layout from "../components/layout";
import Head from "next/head";
import distance from "euclidean-distance";
import utilStyles from "../styles/utils.module.css";
import MistralClient from "@mistralai/mistralai";
import { posts } from "../mocked-data/mocked-data.js";

const apiKey =
  process.env.MISTRAL_API_KEY || "8z8snBoEM1LWcB0A5q0LetmiP1H3ZG3j";

const client = new MistralClient(apiKey);

const NewPostStreaming = () => {
  const title= "Tips for Responsible Dog Ownership";
  const description= "Ensure a happy and healthy life for your canine companion with these tips.";
  const [suggestedPosts, setSuggestedPosts] = useState([]);

  function splitIntoChunks(posts) {
    // in this case each post represents a chunk
    return posts;
  }

  async function getEmbeddings(input) {
    try {
      const embeddingsBatchResponse = await client.embeddings({
        model: "mistral-embed",
        input: input.map(post => JSON.stringify(post)),
      });

      return embeddingsBatchResponse.data;
    } catch (error) {
      console.error("Error getting embedding:", error);
      throw error;
    }
  }

  async function retrieveSimilarPosts(newPost, posts) {
    try {
      const postEmbedding = (await getEmbeddings([newPost]))[0];
      const dataPosts = posts.map(post => {
        const distanceValue = distance(post.embedding, postEmbedding.embedding);
        return {
          post: post,
          distanceValue
        }
      });
      console.log(dataPosts);
      function compare( a, b ) {
        if ( a.distanceValue < b.distanceValue ){
          return -1;
        }
        if ( a.distanceValue > b.distanceValue ){
          return 1;
        }
        return 0;
      }
      return dataPosts.sort( compare ).slice(0, 3).map( data => data.post);
    } catch (error) {
      console.error("Error retrieving similar chunks:", error);
      throw error;
    }
  }

  async function fetchSimilarPosts() {
    const newPost = {
      title: title,
      description: description,
    }
    try {
      console.log('Split posts into chunks');
      const postChunks = splitIntoChunks(posts);

      console.log('Get embeddings');
      const embeddings = await getEmbeddings(postChunks);

      console.log('Attach metadata to chunks');
      const postsWithMetadata = [];
      for (let i = 0; i < postChunks.length; i += 1) {
        postsWithMetadata.push({
          ...postChunks[i],
          embedding: embeddings[i].embedding
        });
      }
      console.log('Retrieve similar posts using euclidean distance');
      const similarPosts = await retrieveSimilarPosts(newPost, postsWithMetadata);

      setSuggestedPosts(similarPosts)
      console.log('Similar chunks', similarPosts);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <Layout>
      <Head>
        <title>Suggest related posts using embeddings and chunks</title>
      </Head>
      <div>
        <h1 className={utilStyles.headingXl}>Suggest related posts using embeddings and chunks</h1>
          <div>
            <div style={{paddingBottom: 30}} >New post:</div>
          </div>
          <div>
            <label htmlFor="title">Title: {title}</label>
          </div>
          <div>
            <label htmlFor="description">Description: {description}</label>
          </div>
          <div style={{ marginTop: 30 }}>
            {suggestedPosts?.length > 0 && (
              <div>
                <label>Related Posts:</label>
                <ul>
                  {suggestedPosts
                    .map((line, index) => (
                      <li key={index}>
                        <div>
                          <label htmlFor="title">Title: {line.title}</label>
                        </div>
                        <div>
                          <label htmlFor="description">
                            Description: {line.description}
                          </label>
                        </div>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>
          <button onClick={fetchSimilarPosts} >Suggest posts</button>
      </div>
    </Layout>
  );
};

// Custom debounce function
const debounce = (func, delay) => {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};

export default NewPostStreaming;
