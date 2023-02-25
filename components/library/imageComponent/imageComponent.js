import Image from "next/image"
import StaticVars from "../../../lib/static";

const ComponentImage = (data) => {
   let image;
if (data.sizes) {
   switch (data.format.Format) {
      case 'thumbnail':
         image = data.sizes.thumbnail
         break;
      case 'small':
         image = !data.sizes.small ? data.sizes.thumbnail : data.sizes.small
         break;
      case 'medium':
         image = !data.sizes.medium ? data.sizes.thumbnail : data.sizes.medium
         break
      default:
         image = !data.sizes.large ? data.sizes.thumbnail : data.sizes.large
   }
} else {
   image = data.baseSrc
}

   if (data.wrapped) {
      return (
         <div className={StaticVars.container + 'uk-margin-medium-bottom'}>
            <Image
               src={`${process.env.NEXT_PUBLIC_STRAPI_DOMAIN + image.url}`}
               height={image.height}
               width={image.width}
               //fill="true"
               alt={data.alt}
            />
         </div>
      )
   } else {
      return (
         <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_DOMAIN + image.url}`}
            height={image.height}
            width={image.width}
            //fill="true"
            alt={data.alt}
         />
      )
   }
}

export default ComponentImage