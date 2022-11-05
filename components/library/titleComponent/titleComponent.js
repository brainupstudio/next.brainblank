import styles from './title.module.scss'
import StaticVars from "../../../lib/static";
import { motion } from "framer-motion"

const ComponentTitle = (component) => {
   //* Color
   let colorTitle = () => {
      const color = component.data.Color;
      if (color !== null) {
         return (<style global jsx>{`
                .thisTitleColor_${component.index} {
                    color: ${color}!important;
                }
            `}</style>)
      } else {
         return false
      }
   }

   //* Heading
   let titleBlock
   switch (component.data.Heading) {
      case 'H2':
         titleBlock = (
            <h2 className={styles.c_title + ' thisTitleColor_' + component.index}>{component.data.Title}</h2>)
         break;
      case 'H3':
         titleBlock = (
            <h3 className={styles.c_title + ' thisTitleColor_' + component.index}>{component.data.Title}</h3>)
         break;
      case 'H4':
         titleBlock = (
            <h4 className={styles.c_title + ' thisTitleColor_' + component.index}>{component.data.Title}</h4>)
         break;
      case 'H5':
         titleBlock = (
            <h5 className={styles.c_title + ' thisTitleColor_' + component.index}>{component.data.Title}</h5>)
         break;
      case 'H6':
         titleBlock = (
            <h6 className={styles.c_title + ' thisTitleColor_' + component.index}>{component.data.Title}</h6>)
         break;
      default:
         titleBlock = (
            <h1 className={styles.c_title + ' thisTitleColor_' + component.index}>{component.data.Title}</h1>)
         break;
   }

   return (
      <>
         {colorTitle()}
            <motion.div
               key={component.index}
               initial={{x: "-100%"}}
               exit={{x: "100%"}}
               animate={{x: "0"}}
               transition={{duration: 0.8, ease: [0.76, 0, 0.24, 1]}}
               className={StaticVars.container}>
               {titleBlock}
            </motion.div>
      </>
   )
}

export default ComponentTitle