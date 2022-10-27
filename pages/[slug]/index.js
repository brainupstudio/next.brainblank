import {
  getAllPages,
  getComponentsPage,
  getNavigation,
  getSinglePage,
  getImagePage
} from '../../lib/api'
import Layout from '../../components/layout/layout'
import LibraryComponents from '../../components/libraryComponents'
import Image from 'next/image'
import React from 'react'

export default function Page({ page, navigation, components, image }) {
  return (
    <Layout navigation={navigation} page={page}>
      {image && <Image src={image.url} height={image.height} width={image.width} layout="fixed" alt="" />}
      {/*{page.data.attributes.Title !== null ? <h1>{page.data.attributes.Title}</h1> : false}*/}
      <LibraryComponents data={components}></LibraryComponents>
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
  const navResponse = await getNavigation();
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