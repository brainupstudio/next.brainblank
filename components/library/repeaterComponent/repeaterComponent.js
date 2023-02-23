import useSWR from 'swr'
import StaticVars from "../../../lib/static";
import {motion} from "framer-motion"
import { v4 as uuidv4 } from 'uuid';
import Link from "next/link";
import ImageComponent from "../imageComponent/imageComponent";
import styles from './repeater.module.scss'

const fetcher = (url) => fetch(url).then((res) => res.json());

const ComponentRepeater = (component) => {
   const url = `${process.env.NEXT_PUBLIC_STRAPI_API}/${component.data.Collection}/?populate=deep`;
   const {data, error} = useSWR(url, fetcher);
   const collection = data;
   let index = 0;
   if (error) return <div>failed to load</div>
   if (!data) return <div>loading...</div>

   return (<section key={uuidv4()} className={StaticVars.container + 'uk-margin-medium-bottom'}>
      <div className={styles.c_repeater}>

         {collection.data && collection.data.map((page) => {
            if (index === component.data.Elements) return
            index++
            return (
               <>
                  <motion.div
                     key={uuidv4()}
                     initial={{y: "10%", opacity: 0}}
                     exit={{opacity: 0}}
                     whileInView={{ y: "0", opacity: 1 }}
                     viewport={{ once: true }}
                     transition={{duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: index / 4}}
                     className={styles.c_repeater__item + ' uk-card uk-card-default'}>
                     {console.log(uuidv4())}
                     <Link
                        href={`/${component.data.Collection}/${page.attributes.slug}`}>
                        <div className="uk-card-media-top">
                           <ImageComponent
                              sizes={page.attributes.Image.data.attributes.formats}
                              format={'small'}
                              alt={page.attributes.Image.data.attributes.alternativeText}
                              wrapped={false}
                           />
                        </div>

                        <div className="uk-card-body">
                           <h3 className="uk-card-title">{page.attributes.Title}</h3>
                           <p>{page.attributes.Abstract}</p>
                        </div>
                     </Link>
                  </motion.div>
               </>
            );
         })}
      </div>
   </section>)
}

export default ComponentRepeater
