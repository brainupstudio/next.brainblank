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
import StaticVars from "../../lib/static"
import styles from './index.module.scss'


export default function Page({settings, thisPage, navigation, components, image}) {
   return (
      <Layout navigation={navigation} settings={settings} thisPage={thisPage.data}>
         <div className={styles.c_news}></div>

         <div className={StaticVars.container + 'uk-margin-medium-bottom'}>
            {image && <Image src={image.url} height={image.height} width={image.width} layout="fixed" alt=""/>}
            {thisPage.data.attributes.Title !== null ? <h1>{thisPage.data.attributes.Title}</h1> : false}
         </div>
         <LibraryComponents data={components} thisPage={thisPage.data}></LibraryComponents>
      </Layout>
   )
}

export async function getStaticPaths() {
   const pageResponse = await getAllPages('news');
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
   const pageResponse = await getSinglePage(params, 'news');
   const imageResponse = await getImagePage(pageResponse.data.attributes, 'large', 'news');
   const componentsResponse = await getComponentsPage(pageResponse.data.attributes, 'news');

   return {
      props: {
         settings: settingsResponse,
         navigation: navResponse,
         thisPage: pageResponse,
         components: componentsResponse,
         image: imageResponse
      },
   };
}