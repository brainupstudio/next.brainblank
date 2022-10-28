const ComponentEmptySpace = (component) => {
    //* Style
    const desktop = component.data.Desktop;
    const mobile = component.data.Responsive;
    let styles = ()=> {
        return (<style global jsx>{`
            .thisEmptySpace__desktop_${component.index} {
                height: ${desktop}px!important;
            }
            
            @media screen and (max-width: 640px) {
                .thisEmptySpace__mobile_${component.index} {
                    height: ${mobile}px!important;
                }
            }
        `}</style>)
    }

    return (
        <>
            {styles()}
            <div className={'thisEmptySpace__desktop_' + component.index + ' thisEmptySpace__mobile_' + component.index}>
            </div>
        </>
    )
}

export default ComponentEmptySpace