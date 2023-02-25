import useSWR from 'swr'
import StaticVars from "../../../lib/static";
import styles from './repeater.module.scss'
import CardComponent from "./cardComponent/cardComponent";
const fetcher = (url) => fetch(url).then((res) => res.json());

const ComponentRepeater = (component) => {
   const url = `${process.env.NEXT_PUBLIC_STRAPI_API}/${component.data.Collection}/?populate=deep`;
   const {data, error} = useSWR(url, fetcher);
   const collection = data;
   let index = 0;
   if (error) return <div>failed to load</div>
   if (!data) return <div>loading...</div>

   return (
      <section className={StaticVars.container + 'uk-margin-medium-bottom'}>
         <div className={styles.c_repeater}>
            {collection.data && collection.data.map((page) => {
               if (index === component.data.Elements) return
               const uid = (page.attributes.slug + '-' + index).replace(/\s/g, "");
               index++
                  return (
                     <CardComponent key={uid} component={component} page={page} />
                  )
            })}
         </div>
      </section>)
}

export default ComponentRepeater
