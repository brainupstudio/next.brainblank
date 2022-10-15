import ComponentImage from "./library/image"
import ComponentParagraph from "./library/paragraph"
import ComponentSlideshow from "./library/slideshow"
import ComponentTitle from "./library/title"

const Components = (componenets) => {
    return (
        <>
            {componenets.data.map((component, index) => {
                let wrappedInContainer = component.InContainer ? 'uk-container uk-container-expand' : ''

                if (component.__component == "content.slideshow") {
                    return (
                        <div key={index} className={wrappedInContainer}>
                            <ComponentSlideshow data={component} />
                        </div>
                    )
                }
                if (component.__component == "content.paragraph") {
                    return (
                        <ComponentParagraph
                            key={index}
                            data={component.Paragraph}
                        />
                    )
                }
                if (component.__component == "content.image") {
                    return (
                        <ComponentImage
                            key={index}
                            sizes={component.Image.data.attributes.formats}
                            format={component}
                            alt={component.Image.data.attributes.alternativeText}
                        />
                    )
                }
                if (component.__component == "content.title") {
                    return (
                        <div key={index}>
                            <ComponentTitle data={component} />
                        </div>
                    )
                }
                if (component.__component == "content.card") {
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

export default Components