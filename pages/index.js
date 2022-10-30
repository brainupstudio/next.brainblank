import {fetcher, getNavigation, getSiteSettings} from '../lib/api'
import Layout from '../components/layout/layout'
import LibraryComponents from "../components/libraryComponents";
import '../styles/home.module.scss';
import React from "react";

export default function Home({ settings, navigation, components, thisPage }) {
    return (
        <Layout navigation={navigation} settings={settings} thisPage={thisPage.data}>
            <div className="c_home">
                <LibraryComponents data={components}></LibraryComponents>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const settingsResponse = await getSiteSettings();
    const navResponse = await getNavigation();
    const pageResponse = await fetcher(`${process.env.API_STRAPI_PUBLIC_URL}/home-page`);
    const componentsResponse = await fetcher(`${process.env.API_STRAPI_PUBLIC_URL}/home-page/?populate=deep`);

    return {
        props: {
            settings: settingsResponse,
            navigation: navResponse,
            thisPage: pageResponse,
            components: componentsResponse.data.attributes.Dynamic,
        },
    };
}