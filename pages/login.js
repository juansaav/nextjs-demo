import React from 'react';
import { useState } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../styles/login.module.css';
import { useRouter } from 'next/router';

export default function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert('Username and password are required.');
      return;
    }

    try {
      setLoginError(null);
      
      // todo [task-id]: move this call to a separate file
      const response = await fetch('http://localhost:3003/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        const data = await response.json();

        // todo [task-id]: use redux to store 
        localStorage.setItem('token', data.token);
        localStorage.setItem('username', data.username);
        console.log('Login successful. Server response:', data);
        // redirect to home page
        router.push('/');
      } else {
        const errorData = await response.json();
        console.error('Login failed. Server error:', errorData.message);
        setLoginError('Login failed');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
    }
  };

  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Login</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${styles.loginContainer}`}>
        <form className={styles.loginForm} onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>
              Username:
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Password:
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          {loginError && <p className={`${styles.error} ${utilStyles.error}`} >{loginError}</p>}
          <button type="submit" className={styles.loginButton}>
            Login
          </button>
        </form>
      </section>
    </Layout>
  );
}
