import parse from 'html-react-parser'

const ComponentParagraph = (text) => {
    return parse(text.data)
}

export default ComponentParagraph