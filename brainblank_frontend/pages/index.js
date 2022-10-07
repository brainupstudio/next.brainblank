import { getAllPages, getNavigation } from '../lib/api'
import Pages from '../components/pages'
import Layout from '../components/layout'

export default function Home({ pages, navigation }) {
  return (
    <Layout navigation={navigation}>
          <Pages pages={pages} />
    </Layout>
  )
}

export async function getStaticProps() {
  const navResponse = await getNavigation(1);
  const pagesResponse = await getAllPages();

  return {
    props: {
      pages: pagesResponse,
      navigation: navResponse
    },
  };
}