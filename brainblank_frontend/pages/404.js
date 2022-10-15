import Layout from '../../components/layout'
import { getNavigation } from '../lib/api';

export default function Custom404() {
  return (
    <Layout>
      <h1>PAGE NOT FOUND</h1>
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