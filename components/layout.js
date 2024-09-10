import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'chiikawa';
export const siteTitle = 'chiikawa-ちいかわ';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle,
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image
              priority
              src="/images/chiikawa.jpg"
              className={utilStyles.borderCircle}
              height={256}
              width={256}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
          <h2 className={utilStyles.headingXl}>
              <div className={utilStyles.colorInherit}>
                <p>主要キャラクター資料</p>
              </div>
            </h2>
            <div className={styles.grid}>
                <a href="/posts/second_1" className={styles.card}>
                    <div className={styles.cardContent}>
                        <img src="/images/hachiware.jpg" alt="Chiikawa" className={styles.cardImage} />
                        <h3 className={styles.cardText}>ハチワレ &rarr;</h3>
                    </div>
                </a>

                <a href="/posts/second_2" className={styles.card}>
                    <div className={styles.cardContent}>
                        <img src="/images/chii.jpg" alt="Chiikawa" className={styles.cardImage} />
                        <h3 className={styles.cardText}>ちいかわ &rarr;</h3>
                    </div>
                </a>

                <a
                    href="/posts/second_3"className={styles.card}>                    
                    <div className={styles.cardContent}>
                        <img src="/images/usagi.jpg" alt="Chiikawa" className={styles.cardImage} />
                        <h3 className={styles.cardText}>うさぎ &rarr;</h3>
                    </div>
                </a>

                {/* <a href="/"
                    className={styles.card}
                >
                    <h3>サブキャラクター &rarr;</h3>
                </a> */}
            </div>

          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}