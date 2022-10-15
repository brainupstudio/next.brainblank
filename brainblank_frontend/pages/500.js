import Layout from '../components/layout'
import { getNavigation } from '../lib/api';

export default function Custom500({ navigation }) {
  return (
    <Layout navigation={navigation}>
      <h1>SERVER ERROR</h1>
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