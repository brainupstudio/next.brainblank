import parse from 'html-react-parser'
import StaticVars from "../../../lib/static";

const ComponentParagraph = (component) => {
    //* Color
    let colorText = ()=> {
        const color = component.data.Color;
        if (color !== null) {
            return (<style global jsx>{`
                .thisParagraphColor_${component.index} {
                    color: ${color}!important;
                }
            `}</style>)
        } else {
            return false
        }
    }

    return (
        <>
            {colorText()}
            <div className={StaticVars.container + 'uk-margin-medium-bottom thisParagraphColor_' + component.index}>
                {parse(component.data.Paragraph)}
            </div>
        </>
    )
}

export default ComponentParagraph