import {
  getAllPages,
  getComponentsPage,
  getNavigation,
  getSinglePage,
  getImagePage
} from '../../lib/api'
import Layout from '../../components/layout'
import Components from '../../components/components'
import Image from 'next/image'
import React from 'react'

export default function Page({ page, navigation, components, image }) {
  return (
    <Layout navigation={navigation}>
      {image && <Image src={image.url} height={image.height} width={image.width} layout="fixed" alt="" />}
      {/* <h1>{page.data.attributes.Title}</h1> */}
      <Components data={components}></Components>
    </Layout>
  )
}


export async function getStaticPaths() {
  const pageResponse = await getAllPages();
  const paths = pageResponse.map((page) => ({
    params: {
      slug: page.attributes.slug.toString(),
    },
  }))

  return { paths, fallback: 'blocking' }
}


export async function getStaticProps({ params }) { //context?
  const navResponse = await getNavigation(1);
  const pageResponse = await getSinglePage(params);
  const imageResponse = await getImagePage(pageResponse.data.attributes, 'large');
  const componentsResponse = await getComponentsPage(pageResponse.data.attributes);

  return {
    props: {
      page: pageResponse,
      navigation: navResponse,
      components: componentsResponse,
      image: imageResponse
    },
  };
}