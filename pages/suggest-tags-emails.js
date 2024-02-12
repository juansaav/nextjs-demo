import React, { useState, useCallback } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import MistralClient from '@mistralai/mistralai';
import { posts, users } from "../mocked-data/mocked-data.js";

const apiKey = process.env.MISTRAL_API_KEY || '8z8snBoEM1LWcB0A5q0LetmiP1H3ZG3j';

const client = new MistralClient(apiKey);

const SuggestTagsEmails = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [suggestedTags, setSuggestedTags] = useState([]);
  const [suggestedUsers, setSuggestedUsers] = useState([]);

  const getSuggestedTopics = async (descriptionPar) => {
    try {
      console.log('call api')
      console.log(JSON.stringify(posts.map(post => post.tags)))
      const chatResponse = await client.chat({
        model: "mistral-tiny",
        messages: [
          {
            role: "user",
            content: `
        You are an expert at analyzing data.
        I'll send you below existing data about posts (List of posts) and users (List of users) and list of tags (List of tags). 
        Each post has a 'title', 'description', 'tags' (list of tags related to its content) and a 'userEmail' (corresponds to the user that created it). 
        Also each user has a 'posts' attribute, which has the titles of the posts they have created and a 'likedPosts' attribute, which corresponds to the posts the user has liked.
        Apart from that, I'm going to send you the description of a post (New post description) that is going to be created, you have to use this information to relate it with the existing posts and users data.
        ###
        Parameters:
        List of users: ${JSON.stringify(users)}
        List of posts: ${JSON.stringify(posts)}
        List of tags: ${JSON.stringify(posts.map(post => post.tags))}
        New post description: ${descriptionPar}
        ###
        Please respond with a JSON object with two properties: 
        1- tags, which is a sublist of the 'List of tags' parameter, and related to the new post. If there are no tags related, come up with two new tags prefixed with the word 'new'.
        ####
        Here are some examples only for tags:
        1)
        List of tags: 'blue', 'red', 'green'
        New post description: 'This is a Toyota blue car. I bought it in SF.'

        Response: {
          tags: ['blue', '(new) Toyota', '(new) SF']
        }
        2)
        List of tags: 'blue', 'red', 'green'
        New post description: 'Discover the vibrant and diverse bird species found in the Amazon rainforest.'

        Response: {
          tags: ["birds", "Amazon", "exotic"]
        }
        ###
        2- emails, a list of emails of the users that might be interested in this post, either because they created a similar post or liked a similar post.
        If you can't relate an email or a tag, please don't include it in the response (excepting the new tags). Please respond only with the JSON, don't include any explanation.
        `,
          },
        ],
      });
      console.log('Response: ', chatResponse.choices[0].message.content);
      const responseData = JSON.parse(chatResponse.choices[0].message.content);
      setSuggestedTags(responseData.tags);
      setSuggestedUsers(responseData.emails);
    } catch (error) {
      console.error('Error fetching suggested topics:', error);
      return '';
    }
  };

  const debouncedFetchData = useCallback(
    debounce(async (description) => {
      setSuggestedTags([]);
      setSuggestedUsers([]);
      const suggestedTopics = await getSuggestedTopics(description);
    }, 400),
    []
  );

  const handleDescriptionChange = (event) => {
    const value = event.target.value;
    setDescription(value);
    if (description) {
      debouncedFetchData(description);
    }
  };

  const handleTitleChange = (event) => {
    const { value } = event.target;
    setTitle(value);
  };

  return (
    <Layout>
      <Head>
        <title>Create New Post, suggest tags and email list to share</title>
      </Head>
      <div>
        <h1 className={utilStyles.headingLg}>Create New Post, suggest tags and email list to share</h1>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              id="title"
              type="text"
              value={title}
              onChange={handleTitleChange}
              style={{ marginLeft: 70 }}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              value={description}
              onChange={handleDescriptionChange}
              required
              style={{ marginLeft: 13, marginTop: 30, width: 300, height: 150 }}
            />
          </div>
          <div style={{ marginTop: 30 }}>
            {
              suggestedTags?.length > 0 && (
                <div>
                  <label>Suggested Tags:</label>
                  <ul>
                    {suggestedTags
                      .map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}
                  </ul>
                </div>
              )
            }
          </div>
          <div style={{ marginTop: 30 }}>
            {
              suggestedUsers?.length > 0 && (
                <div>
                  <label>Suggested Emails to notify:</label>
                  <ul>
                    {suggestedUsers
                      .map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}
                  </ul>
                </div>
              )
            }
          </div>
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

export default SuggestTagsEmails;
