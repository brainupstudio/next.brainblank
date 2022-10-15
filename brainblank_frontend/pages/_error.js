import Layout from '../components/layout'
import { getNavigation } from '../lib/api';

export default function CustomError() {
  return (
    <Layout navigation={navigation}>
      <h1>ERROR</h1>
    </Layout>
  )
}

export async function getStaticProps() {
  const navResponse = await getNavigation(1);

  return {
    props: {
      navigation: navResponse,
    },
  };
}