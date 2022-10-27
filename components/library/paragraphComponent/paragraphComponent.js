import parse from 'html-react-parser'

const ComponentParagraph = (text) => {
    //* Color
    let colorText = ()=> {
        const color = text.data.Color;
        if (color !== null) {
            return (<style global jsx>{`
                .global_text {
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
            <div className={'uk-container uk-container-large uk-margin-medium-bottom global_text'}>
                {parse(text.data.Paragraph)}
            </div>
        </>
    )
}

export default ComponentParagraph