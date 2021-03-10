import Head from 'next/head'
import styles from '../styles/Home.module.css'

import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { fetchPosts } from '../store/actions/postAction';

export default function Home() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts())
  }, []);

  const { posts } = useSelector(state => state.post);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {posts && posts.map(item => (
            <a href="https://nextjs.org/docs" className={styles.card} key={item}>
              <h3>Documentation &rarr;</h3>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
