import ComponentImage from "./library/imageComponent/imageComponent"
import ComponentParagraph from "./library/paragraphComponent/paragraphComponent"
import ComponentSlideshow from "./library/slideshowComponent/slideshowComponent"
import ComponentTitle from "./library/titleComponent/titleComponent"
import ComponentBlock from "./library/blockComponent/blockComponent";

const LibraryComponents = (componenets) => {
    return (
        <>
            {componenets.data.map((component, index) => {
                let wrappedInContainer = component.InContainer ? 'uk-container uk-container-large' : ''

                if (component.__component === "content.slideshow") {
                    return (
                        <div key={index} className={wrappedInContainer}>
                            <ComponentSlideshow data={component} />
                        </div>
                    )
                }
                if (component.__component === "content.paragraph") {
                    return (
                        <ComponentParagraph
                            key={index}
                            data={component}
                        />
                    )
                }
                if (component.__component === "content.image") {
                    return (
                        <ComponentImage
                            key={index}
                            sizes={component.Image.data.attributes.formats}
                            format={component}
                            alt={component.Image.data.attributes.alternativeText}
                        />
                    )
                }
                if (component.__component === "content.title") {
                    return (
                        <div key={index}>
                            <ComponentTitle data={component} />
                        </div>
                    )
                }
                if (component.__component === "content.block") {
                    return (
                        <div key={index}>
                            <ComponentBlock data={component} />
                        </div>
                    )
                }
                if (component.__component === "content.card") {
                    return (
                        <div key={index}>
                            <h2>1 {component.Title}</h2>
                        </div>
                    )
                }
            })}
        </>
    )
}

export default LibraryComponents