import {fetcher, getNavigation} from '../lib/api'
import Layout from '../components/layout/layout'
import LibraryComponents from "../components/libraryComponents";
import '../styles/home.module.scss';
import React from "react";

export default function Home({navigation, components, page}) {
    return (
        <Layout navigation={navigation} page={page}>
            <div className="c_home">
                <LibraryComponents data={components}></LibraryComponents>
            </div>
        </Layout>
    )
}

export async function getStaticProps() {
    const navResponse = await getNavigation();
    const pageResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/home-page`);
    const componentsResponse = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/home-page/?populate=deep`);

    return {
        props: {
            navigation: navResponse,
            components: componentsResponse.data.attributes.Dynamic,
            page: pageResponse
        },
    };
}