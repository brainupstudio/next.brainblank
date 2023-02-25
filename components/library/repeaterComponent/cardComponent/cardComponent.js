import {motion} from "framer-motion"
import Link from "next/link";
import ComponentImage from "../../imageComponent/imageComponent";
import styles from './card.module.scss'


const CardComponent = (repeater) => {
   const image = repeater.page.attributes.Image.data;
   const title = repeater.page.attributes.Title;
   const abstract = repeater.page.attributes.Abstract;
   return (
      <>
         <motion.div
            initial={{y: "10%", opacity: 0}}
            exit={{opacity: 0}}
            whileInView={{y: "0", opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.2}}
            className={styles.c_cardItem + ' uk-card uk-card-default'}>
            <Link
               href={`/${repeater.component.data.Collection}/${repeater.page.attributes.slug}`}>
               <div className="uk-card-media-top">
                  {image &&
                     <ComponentImage
                        sizes={image.attributes.formats}
                        format={'small'}
                        alt={image.attributes.alternativeText}
                        baseSrc={image.attributes}
                        wrapped={false}
                     />
                  }
               </div>

               <div className="uk-card-body">
                  {title && <h3 className="uk-card-title">{title}</h3>}
                  {abstract && <p>{abstract}</p>}
               </div>
            </Link>
         </motion.div>
      </>
   )
}

export default CardComponent
