import React, { useState, useCallback } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';
import utilStyles from '../styles/utils.module.css';
import MistralClient from '@mistralai/mistralai';

const apiKey = process.env.MISTRAL_API_KEY || '8z8snBoEM1LWcB0A5q0LetmiP1H3ZG3j';

const client = new MistralClient(apiKey);

const NewPostStreaming = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [suggestedTopics, setSuggestedTopics] = useState('');

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSubmit = async () => {
    // Handle form submission logic (e.g., submit post data to server)
  };

  const getSuggestedTopics = async (title) => {
    try {
      console.log('call api')
      const chatStreamResponse = await client.chatStream({
        model: 'mistral-tiny',
        messages: [{role: 'user', content: `Suggest 50 topics for this title for a blog: ${title}`}],
      });
      console.log('starts for')
      for await (const chunk of chatStreamResponse) {
        console.log('chunk in for')
        if (chunk.choices[0].delta.content !== undefined) {
          const streamText = chunk.choices[0].delta.content;
          setSuggestedTopics((previous) => previous.concat(streamText));
        }
      }
    } catch (error) {
      console.error('Error fetching suggested topics:', error);
      setLoadingSuggestions(false);
      return '';
    }
  };

  const debouncedFetchData = useCallback(
    debounce(async (value) => {
      setSuggestedTopics('');
      const suggestedTopics = await getSuggestedTopics(value);
    }, 400),
    []
  );

  const handleTitleChange = (event) => {
    const { value } = event.target;
    setTitle(value);
    if (value) {
      debouncedFetchData(value);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Create New Post Using Streams</title>
      </Head>
      <div>
        <h1 className={utilStyles.headingXl}>Create New Post</h1>
        <form onSubmit={handleSubmit}>
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
              style={{ marginLeft: 13, marginTop: 30 }}
            />
          </div>
          <div style={{ marginTop: 30 }}>
            {
              suggestedTopics?.length > 0 && (
                <div>
                  <label>Suggested Topics:</label>
                  <ul>
                    {suggestedTopics
                      .split("\n")
                      .filter((x) => x !== "")
                      .map((line, index) => (
                        <li key={index}>{line}</li>
                      ))}
                  </ul>
                </div>
              )
            }
          </div>
          {/* <button type="submit">Submit</button> */}
        </form>
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
