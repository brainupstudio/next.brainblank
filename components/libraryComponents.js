import ComponentImage from "./library/imageComponent/imageComponent"
import ComponentParagraph from "./library/paragraphComponent/paragraphComponent"
import ComponentSlideshow from "./library/slideshowComponent/slideshowComponent"
import ComponentTitle from "./library/titleComponent/titleComponent"
import ComponentBlock from "./library/blockComponent/blockComponent";
import ComponentEmptySpace from "./library/emptySpaceComponent/emptySpaceComponent";
import StaticVars from "../lib/static";

const LibraryComponents = (componenets) => {
    return (
        <>
            {componenets.data.map((component, index) => {
                let wrappedInContainer = component.InContainer ? StaticVars.container : ''

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
                            index={index}
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
                            <ComponentTitle data={component} index={index} />
                        </div>
                    )
                }
                if (component.__component === "content.block") {
                    return (
                        <div key={index}>
                            <ComponentBlock data={component} index={index} />
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
                if (component.__component === "content.empty-space") {
                    return (
                        <ComponentEmptySpace key={index} data={component} index={index} />
                    )
                }
            })}
        </>
    )
}

export default LibraryComponents