import Layout from '../components/layout/layout'
import { getNavigation } from '../lib/api';

export default function CustomError({ navigation }) {
  return (
    <Layout navigation={navigation}>
      <h1>ERROR</h1>
    </Layout>
  )
}

export async function getStaticProps() {
  const navResponse = await getNavigation();

  return {
    props: {
      navigation: navResponse,
    },
  };
}