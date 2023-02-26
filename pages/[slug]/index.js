import React from 'react'
import {
   getAllPages,
   getComponentsPage,
   getNavigation,
   getSinglePage,
   getImagePage, getSiteSettings
} from '../../lib/api'
import Layout from '../../components/layout/layout'
import LibraryComponents from '../../components/libraryComponents'
import Image from 'next/image'

export default function Page({settings, thisPage, navigation, components, image}) {
   return (
      <Layout navigation={navigation} settings={settings} thisPage={thisPage.data}>
         {image && <Image src={image.url} height={image.height} width={image.width} layout="fixed" alt=""/>}
         <LibraryComponents data={components} thisPage={thisPage.data}></LibraryComponents>
      </Layout>
)
}

export async function getStaticPaths() {
   const pageResponse = await getAllPages('pages');
   const paths = pageResponse.map((thisPage) => ({
      params: {
         slug: thisPage.attributes.slug.toString()
      },
   }))

   return {paths, fallback: 'blocking'}
}

export async function getStaticProps({params}) { //context?
   const settingsResponse = await getSiteSettings();
   const navResponse = await getNavigation();
   const pageResponse = await getSinglePage(params, 'pages');
   const imageResponse = await getImagePage(pageResponse.data.attributes, 'large', 'pages');
   const componentsResponse = await getComponentsPage(pageResponse.data.attributes, 'pages');

   return {
      props: {
         settings: settingsResponse,
         navigation: navResponse,
         thisPage: pageResponse,
         components: componentsResponse,
         image: imageResponse,
      },
   };
}