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

export async function getAllPages(pageType) {
   const getPages = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_API}/${pageType}`);
   return await getPages.data;
}

export async function getNavigation() {
   const getNavigation = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_API}/navigation/render/${process.env.NEXT_PUBLIC_NAVIGATION_ID}`);
   return await getNavigation;
}

export async function getSinglePage(thisPageDataAttributes, pageType) {
   const allPages = await getAllPages(pageType);
   const getPage = allPages.find((singlePage) => thisPageDataAttributes.slug === singlePage.attributes.slug);
   return await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_API}/${pageType}/${getPage.id}`);
}

export async function getComponentsPage(thisPageDataAttributes, pageType) {
   const thisPage = await getSinglePage(thisPageDataAttributes, pageType);
   const getObjectPage = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_API}/${pageType}/${thisPage.data.id}?populate=deep`);
   return getObjectPage.data.attributes.Dynamic;
}

export async function getImagePage(thisPageDataAttributes, format, pageType) {
   const thisPage = await getSinglePage(thisPageDataAttributes, pageType);
   const getObjectPage = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_API}/${pageType}/${thisPage.data.id}?populate=*`);
   const getDataObject = await getObjectPage.data.attributes

   if (await getDataObject.Image.data != null) {
      const getImageObject = await getDataObject.Image.data.attributes;
      let getImageFormat;
      let getImageWidth;
      let getImageHeight;

      if (getImageObject.formats) {
         switch (format) {
            case 'thumbnail':
               getImageFormat = getImageObject.formats.thumbnail;
               getImageWidth = getImageObject.formats.thumbnail.width;
               getImageHeight = getImageObject.formats.thumbnail.height;
               break;
            case 'small':
               getImageFormat = !getImageObject.formats.small ? getImageObject.formats.thumbnail : getImageObject.formats.small;
               getImageWidth = !getImageObject.formats.small ? getImageObject.formats.thumbnail.width : getImageObject.formats.small.width;
               getImageHeight = !getImageObject.formats.small ? getImageObject.formats.thumbnail.height : getImageObject.formats.small.height;
               break;
            case 'medium':
               getImageFormat = !getImageObject.formats.medium ? getImageObject.formats.thumbnail : getImageObject.formats.medium;
               getImageWidth = !getImageObject.formats.medium ? getImageObject.formats.thumbnail.width : getImageObject.formats.medium.width;
               getImageHeight = !getImageObject.formats.medium ? getImageObject.formats.thumbnail.height : getImageObject.formats.medium.height;
               break;
            default:
               getImageFormat = !getImageObject.formats.large ? getImageObject.formats.thumbnail : getImageObject.formats.large;
               getImageWidth = !getImageObject.formats.large ? getImageObject.formats.thumbnail.width : getImageObject.formats.large.width;
               getImageHeight = !getImageObject.formats.large ? getImageObject.formats.thumbnail.height : getImageObject.formats.large.height;
         }
      } else {
         getImageFormat = getImageObject;
         getImageWidth = getImageObject.width;
         getImageHeight = getImageObject.height;
      }
      return {
         url: process.env.NEXT_PUBLIC_STRAPI_DOMAIN + getImageFormat.url,
         width: getImageWidth,
         height: getImageHeight,
      };
   } else {
      return false
   }
}

export async function getSiteSettings() {
   const getSettings = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_API}/site-setting/?populate=deep`);
   const logoData = getSettings.data.attributes.Logo.data;
   const seoData = getSettings.data.attributes.GlobalSeo;

   return {
      logo: {
         url: logoData !== null ? process.env.NEXT_PUBLIC_STRAPI_DOMAIN + logoData.attributes.url : false,
         height: logoData !== null ? logoData.attributes.height : false,
         width: logoData !== null ? logoData.attributes.width : false,
         alt: logoData !== null ? logoData.attributes.alternativeText : false,
      },
      seo: {
         metaTitle: seoData !== null ? seoData.metaTitle : false,
         metaDescription: seoData !== null ? seoData.metaDescription : false,
         canonicalURL: seoData !== null ? seoData.canonicalURL : false,
      },
   }
}

export async function getCollectionLoop(collectionType) {
   const getLoop = await fetcher(`${process.env.NEXT_PUBLIC_STRAPI_API}/${collectionType}/?populate=deep`);
   return getLoop.data;
}