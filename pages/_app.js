import UIKit from "../lib/UIKit";
import '../styles/globals.scss';
import {AnimatePresence, motion} from "framer-motion"
import StaticVars from "../lib/static";

function MyApp({Component, pageProps, router}) {
   return (
      <AnimatePresence exitBeforeEnter>
         <motion.div
            key={router.route}
            variants={StaticVars.motionFade}
            initial='initial'
            animate='animate'
            exit='exit'
            transition='transition'
         >
            <UIKit>
               <Component {...pageProps} />
            </UIKit>
         </motion.div>
      </AnimatePresence>

   )
}

export default MyApp
