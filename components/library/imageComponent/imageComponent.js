import Image from "next/image"
import StaticVars from "../../../lib/static";

const ComponentImage = (data) => {
    let image;
    switch (data.format.Format) {
        case 'thumbnail':
            image = data.sizes.thumbnail
            break;
        case 'small':
            image = data.sizes.small
            break;
        case 'medium':
            image = data.sizes.medium
        default:
            image = data.sizes.large
    }
    return (
        <div className={StaticVars.container + 'uk-margin-medium-bottom'}>
            <Image
                src={`${process.env.NEXT_PUBLIC_STRAPI_DOMAIN + image.url}`}
                height={image.height}
                width={image.width}
                fill="true"
                alt={data.alt}
            />
        </div>
    )

}

export default ComponentImage