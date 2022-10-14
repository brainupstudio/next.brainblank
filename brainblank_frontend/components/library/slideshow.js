import Image from "next/image"
import parse from 'html-react-parser'
import styles from '../../styles/slideshow.module.scss'

const ComponentSlideshow = (slide) => {
    const slides = slide.data.Slide
    const viewportRatio = slide.data.ViewportHeight ? 'ratio: false' : 'ratio: true'

    //* Item list injected inside 'Variable List Container'
    const innerItems = slides.map((item, index) => {
        const imageIsPresent = Boolean(item.Image.data)
        const titleIsPresent = Boolean(item.Title)
        const abstractIsPresent = Boolean(item.Abstract)
        const contentIsPresent = Boolean(abstractIsPresent || titleIsPresent)
        //* Themfication
        let overlayBlock
        let textStyleClass

        //* Overay color options
        switch (item.Overlay) {
            case 'Light':
                overlayBlock = (<div className="uk-overlay-default uk-position-cover"></div>)
                break;
            case 'Dark':
                overlayBlock = (<div className="uk-overlay-primary uk-position-cover"></div>)
                break;
            default:
                overlayBlock = null
        }

        //* Text color options
        switch (item.TextColor) {
            case 'Light':
                textStyleClass = 'uk-light'
                break;
            case 'Dark':
                textStyleClass = 'uk-dark'
                break;
            default:
                textStyleClass = null
        }

        //* Creation element lists
        // IMAGE slide
        if (imageIsPresent) {
            const getImageObject = item.Image.data.attributes
            let getImageFormat
            let getImageWidth
            let getImageHeight
            const alt = item.Image.data.attributes.alternativeText

            switch (item.Formats) {
                case 'thumbnail':
                    getImageFormat = getImageObject.formats.thumbnail
                    getImageWidth = getImageObject.formats.thumbnail.width
                    getImageHeight = getImageObject.formats.thumbnail.height
                    break;
                case 'small':
                    getImageFormat = getImageObject.formats.small
                    getImageWidth = getImageObject.formats.small.width
                    getImageHeight = getImageObject.formats.small.height
                    break;
                case 'medium':
                    getImageFormat = getImageObject.formats.medium
                    getImageWidth = getImageObject.formats.medium.width
                    getImageHeight = getImageObject.formats.medium.height
                    break;
                default:
                    getImageFormat = getImageObject.formats.large
                    getImageWidth = getImageObject.formats.large.width
                    getImageHeight = getImageObject.formats.large.height
            }

            const getImage = {
                url: process.env.NEXT_PUBLIC_DOMAIN + getImageFormat.url,
                width: getImageWidth,
                height: getImageHeight,
            };

            return (
                <li key={index}>
                    <Image
                        className={styles.image}
                        src={getImage.url}
                        height={getImage.height}
                        width={getImage.width}
                        layout="fill"
                        alt={alt}
                    />

                    {overlayBlock}

                    {contentIsPresent &&
                        <div className={textStyleClass + ' uk-position-center uk-position-small uk-text-center'}>
                            {titleIsPresent && <h2 className="uk-margin-remove">{item.Title}</h2>}
                            {abstractIsPresent && <div>{parse(item.Abstract)}</div>}
                        </div>
                    }
                </li>
            )
        } else {
            // ONLY TEXT slide
            return (
                <li key={index}>
                    <div className={textStyleClass + ' uk-position-center uk-position-small uk-text-center'}>
                        {item.Title && <h2 className="uk-margin-remove">{item.Title}</h2>}
                        {item.Abstract && <div>{parse(item.Abstract)}</div>}
                    </div>
                </li>
            )
        }
    })

    return (
        <div className="uk-position-relative uk-visible-toggle"
            tabIndex="-1"
            uk-slideshow={'animation:' + slide.data.Animation + '; autoplay: ' + slide.data.Autoplay +
                '; min-height: ' + slide.data.MinHeight + '; max-height: ' + slide.data.MaxHeight + '; ' + viewportRatio}>

            {/* Variable List Container */}
            {Boolean(slide.data.ViewportHeight)
                ? <ul className="uk-slideshow-items" uk-height-viewport={'min-height: ' + slide.data.MinHeight}>{innerItems}</ul>
                : <ul className="uk-slideshow-items">{innerItems}</ul>}

            <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous"></a>
            <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next"></a>
        </div>
    )
}

export default ComponentSlideshow