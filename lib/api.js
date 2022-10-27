export async function fetcher(url, options = {}) {
    let response;
    if (!options) {
        response = await fetch(url);
    } else {
        response = await fetch(url, options);
    }
    const data = await response.json();
    
    return data;
}

export async function getAllPages() {
    const getPages = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/pages`);
    return await getPages.data;
}

export async function getNavigation() {
    const getNavigation = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/navigation/render/3`);
    return await getNavigation;
}

export async function getSinglePage(thisPageDataAttributes) {
    const allPages = await getAllPages();
    const getPage = allPages.find((singlePage) => thisPageDataAttributes.slug == singlePage.attributes.slug);
    return await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/pages/${getPage.id}`);
}

export async function getComponentsPage(thisPageDataAttributes) {
    const thisPage = await getSinglePage(thisPageDataAttributes);
    const getObjectPage = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/pages/${thisPage.data.id}?populate=deep`);
    return getObjectPage.data.attributes.Dynamic;
}

export async function getImagePage(thisPageDataAttributes, format) {
    const thisPage = await getSinglePage(thisPageDataAttributes);
    const getObjectPage = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_URL}/pages/${thisPage.data.id}?populate=*`);
    const getDataObject = await getObjectPage.data.attributes
    
    if(await getDataObject.Image.data != null) {
        const getImageObject = await getDataObject.Image.data.attributes;
        let getImageFormat;
        let getImageWidth;
        let getImageHeight;
        
        switch (format) {
            case 'thumbnail':
                getImageFormat = getImageObject.formats.thumbnail;
                getImageWidth = getImageObject.formats.thumbnail.width;
                getImageHeight = getImageObject.formats.thumbnail.height;
                break;
            case 'small':
                getImageFormat = getImageObject.formats.small;
                getImageWidth = getImageObject.formats.small.width;
                getImageHeight = getImageObject.formats.small.height;
                break;
            case 'medium':
                getImageFormat = getImageObject.formats.medium;
                getImageWidth = getImageObject.formats.medium.width;
                getImageHeight = getImageObject.formats.medium.height;
                break;
            default:
                getImageFormat = getImageObject.formats.large;
                getImageWidth = getImageObject.formats.large.width;
                getImageHeight = getImageObject.formats.large.height;
        }

        return {
            url: process.env.NEXT_PUBLIC_DOMAIN + getImageFormat.url,
            width: getImageWidth,
            height: getImageHeight,
        };
    } else {
        return false
    }
}