import Layout, { siteTitle } from '../components/layout';
import { useRouter } from 'next/router';

import Author from './posts/author';
import FirstPost from './posts/first-post';
import ThirdPost from './posts/third';
import Footer from './posts/footer';

const Home=()=> {
  const router = useRouter();

  return (
  <>
    <main>
    <Layout home>

      <div>
        <section id="section1" className="min-h-screen m-auto"> <Author /> </section>
        <section id="section2" className="min-h-screen m-auto"> <FirstPost /> </section>
        <section id="section3" className="min-h-screen m-auto"> <ThirdPost /> </section>
        <section id="section4" className="min-h-screen m-auto"> <Footer /> </section>
      </div>

    </Layout>
    </main>
  </>
  );
}

Home.title = 'chiikawa-ちいかわ'

export default Home;
