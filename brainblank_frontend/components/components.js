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
                    <div key={component.id + '-'+ pageID}>
                        <h2>2 {component.Title}</h2>
                    </div>
                )
            }
        })}
        </>
    )
}

export default Components;