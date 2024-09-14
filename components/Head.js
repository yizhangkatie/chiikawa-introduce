import Head from "next/head"
const Header = ({component }) => {
    console.info(component)
    return  (
    <Head>
                <link rel="icon" href="/images/icon.png" />
    <title>{component.title || 'chiikawa-ちいかわ'}</title>
  </Head>)
}
export default Header