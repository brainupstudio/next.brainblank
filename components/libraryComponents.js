import ComponentImage from "./library/imageComponent/imageComponent"
import ComponentParagraph from "./library/paragraphComponent/paragraphComponent"
import ComponentSlideshow from "./library/slideshowComponent/slideshowComponent"
import ComponentTitle from "./library/titleComponent/titleComponent"
import ComponentBlock from "./library/blockComponent/blockComponent";
import ComponentEmptySpace from "./library/emptySpaceComponent/emptySpaceComponent";
import ComponentRepeater from "./library/repeaterComponent/repeaterComponent";
import StaticVars from "../lib/static";
import {AnimatePresence, motion} from "framer-motion"
import { v4 as uuidv4 } from 'uuid';

const LibraryComponents = (componenets) => {
   return (
      <AnimatePresence exitBeforeEnter>
         <motion.div
            key={uuidv4()}
            variants={StaticVars.motionFade}
            initial='initial'
            animate='animate'
            exit='exit'
            transition='transition'>
            {componenets.data.map((component, index) => {
               let wrappedInContainer = component.InContainer ? StaticVars.container : ''

               if (component.__component === "content.slideshow") {
                  return (
                     <div key={uuidv4()} className={wrappedInContainer}>
                        <ComponentSlideshow data={component}/>
                     </div>
                  )
               }
               if (component.__component === "content.paragraph") {
                  return (
                     <ComponentParagraph
                        key={uuidv4()}
                        data={component}
                        index={index}
                     />
                  )
               }
               if (component.__component === "content.image") {
                  return (
                     <ComponentImage
                        key={uuidv4()}
                        sizes={component.Image.data.attributes.formats}
                        format={component}
                        alt={component.Image.data.attributes.alternativeText}
                        wrapped={true}
                     />
                  )
               }
               if (component.__component === "content.title") {
                  return (
                     <div key={uuidv4()}>
                        <ComponentTitle data={component} index={index}/>
                     </div>
                  )
               }
               if (component.__component === "content.block") {
                  return (
                     <div key={uuidv4()}>
                        <ComponentBlock data={component} index={index}/>
                     </div>
                  )
               }
               if (component.__component === "content.card") {
                  return (
                     <div key={uuidv4()}>
                        <h2>1 {component.Title}</h2>
                     </div>
                  )
               }
               if (component.__component === "content.empty-space") {
                  return (
                     <ComponentEmptySpace key={uuidv4()} data={component} index={index}/>
                  )
               }
               if (component.__component === "content.repeater") {
                  return (
                     <ComponentRepeater key={uuidv4()} data={component} index={index}/>
                  )
               }
            })}
         </motion.div>
      </AnimatePresence>
   )
}

export default LibraryComponents