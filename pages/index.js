import Head from 'next/head';
import styles from '../styles/home.module.css';
import Layout, { siteTitle } from '../components/layout';
import { useRouter } from 'next/router';

import Author from './posts/author';
import FirstPost from './posts/first-post';
import ThirdPost from './posts/third';
import Footer from './posts/footer';

export default function Home() {
  const router = useRouter();

  return (
    <Layout home>
      <div>
        <section id="section1" className="h-screen m-auto"> <Author /> </section>
        <section id="section2" className="h-screen m-auto"> <FirstPost /> </section>
        <section id="section3" className="h-screen m-auto"> <ThirdPost /> </section>
        <section id="section3" className="h-screen m-auto"> <Footer /> </section>
      </div>
      <Head>
        <title>chiikawa-ちいかわ</title>
      </Head>
    </Layout>
    
  );
}
