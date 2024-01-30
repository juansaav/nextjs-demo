import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import { useEffect, useState } from 'react';
import styles from '../styles/home.module.css'; 

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  const [username, setUsername] = useState(null);
  useEffect(() => {
    // Retrieve username from localStorage
    const storedUsername = localStorage.getItem('username');
    if (!!storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <div className={styles.userInfo}>
          {username ? (
            <p>
              Welcome back, <span className={styles.username}>{username}</span>!
            </p>
          ) : (
            <Link href={`/login`}>Login</Link>
          )}
        </div>
      </section>
      <p>Please find below the list of blogs generated using SSR</p>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}