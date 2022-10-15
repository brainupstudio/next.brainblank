const ComponentTitle = (component) => {
    let titleBlock

    //* Overay color options
    switch (component.data.Heading) {
        case 'H2':
            titleBlock = (<h2>{component.data.Title}</h2>)
            break;
        case 'H3':
            titleBlock = (<h3>{component.data.Title}</h3>)
            break;
        case 'H4':
            titleBlock = (<h4>{component.data.Title}</h4>)
            break;
        case 'H5':
            titleBlock = (<h5>{component.data.Title}</h5>)
            break;
        case 'H6':
            titleBlock = (<h6>{component.data.Title}</h6>)
            break;
        default:
            titleBlock = (<h1>{component.data.Title}</h1>)
            break;
    }
    return titleBlock
}

export default ComponentTitle