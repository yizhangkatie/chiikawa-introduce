import Layout, { siteTitle } from '../components/layout';
import { useRouter } from 'next/router';

import AuthorCpn from '/components/author_cpn';
import FirstCpn from '/components/first_cpn';
import ThirdCpn from '/components/third_cpn';
import Footer from './posts/footer';

const Home=()=> {
  const router = useRouter();

  return (
  <>
    <main>
    <Layout home>

      <div>
        <section id="section1" className="min-h-screen m-auto"> <AuthorCpn /> </section>
        <section id="section2" className="min-h-screen m-auto"> <FirstCpn /> </section>
        <section id="section3" className="min-h-screen m-auto"> <ThirdCpn /> </section>
        <section id="section4" className="min-h-screen m-auto"> <Footer /> </section>
      </div>

    </Layout>
    </main>
  </>
  );
}

Home.title = 'chiikawa-ちいかわ'

export default Home;
