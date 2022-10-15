import Image from "next/image"

const ComponentImage = (data) => {
    let image;
    switch(data.format.Format) {
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
        <Image
            src={`${process.env.NEXT_PUBLIC_DOMAIN + image.url}`}
            height={image.height}
            width={image.width}
            layout="fixed"
            alt={data.alt}
        />
    )

}

export default ComponentImage