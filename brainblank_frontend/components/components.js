import Image from "next/image";

const Components = (data, pageID) => {
    return (
        <>
            {data.data.map((component) => {
                if (component.__component == "content.card") {
                    return (
                        <div key={component.id}>
                            <h2>1 {component.Title}</h2>
                        </div>
                    )
                }
                if (component.__component == "content.carousel") {
                    return (
                        <div key={component.id + '-' + pageID} className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" uk-slideshow="true">

                            <ul className="uk-slideshow-items">
                                <li>
                                    <Image src={'https://getuikit.com/docs/images/photo.jpg'} layout="fill" alt="" />
                                </li>
                                <li>
                                    <Image src={'https://getuikit.com/docs/images/dark.jpg'} layout="fill" alt="" />
                                </li>
                                <li>
                                    <Image src={'https://getuikit.com/docs/images/light.jpg'} layout="fill" alt="" />
                                </li>
                            </ul>

                            <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous="true" uk-slideshow-item="previous"></a>
                            <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next="true" uk-slideshow-item="next"></a>

                        </div>
                    )
                }
            })}
        </>
    )
}

export default Components;