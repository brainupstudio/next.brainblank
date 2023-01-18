import useSWR from 'swr'
import StaticVars from "../../../lib/static";
import Link from "next/link";
import ImageComponent from "../imageComponent/imageComponent";
import styles from './repeater.module.scss'
const fetcher = (url) => fetch(url).then((res) => res.json());

const ComponentRepeater = (component) => {
   const url = `${process.env.NEXT_PUBLIC_STRAPI_API}/${component.data.Collection}/?populate=deep`;
   const {data, error} = useSWR(url, fetcher);
   const collection = data;

   if (error) return <div>failed to load</div>
   if (!data) return <div>loading...</div>

   return (
      <section key={component.index} className={StaticVars.container + 'uk-margin-medium-bottom'}>
         <div className={styles.c_repeater}>
            {collection.data && collection.data.map((page) => {
               return (
                  <Link className={styles.c_repeater__item}
                        key={page.id}
                        href={`/${component.data.Collection}/${page.attributes.slug}`}>
                     {page.attributes.Title}
                     <ImageComponent
                        sizes={page.attributes.Image.data.attributes.formats}
                        format={'small'}
                        alt={page.attributes.Image.data.attributes.alternativeText}
                        wrapped={false}
                     />
                  </Link>
               );
            })}
         </div>
      </section>
   )
}

   export default ComponentRepeater
