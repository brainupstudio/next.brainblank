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
import React from 'react'
import {AnimatePresence} from "framer-motion"

export default function Page({settings, thisPage, navigation, components, image}) {
   return (
      <Layout navigation={navigation} settings={settings} thisPage={thisPage.data}>
         {image && <Image src={image.url} height={image.height} width={image.width} layout="fixed" alt=""/>}
         {/*{page.data.attributes.Title !== null ? <h1>{page.data.attributes.Title}</h1> : false}*/}
         <LibraryComponents data={components} thisPage={thisPage.data}></LibraryComponents>
      </Layout>
   )
}

export async function getStaticPaths() {
   const pageResponse = await getAllPages();
   const paths = pageResponse.map((thisPage) => ({
      params: {
         slug: thisPage.attributes.slug.toString(),
      },
   }))

   return {paths, fallback: 'blocking'}
}

export async function getStaticProps({params}) { //context?
   const settingsResponse = await getSiteSettings();
   const navResponse = await getNavigation();
   const pageResponse = await getSinglePage(params);
   const imageResponse = await getImagePage(pageResponse.data.attributes, 'large');
   const componentsResponse = await getComponentsPage(pageResponse.data.attributes);

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