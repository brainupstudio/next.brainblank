const Pages = ({pages}) => {
    return (
        <>
            <ul>
                {pages && pages.map((page) => {
                    return (
                        <li key={page.id}>{page.attributes.Title}</li>
                    );
                })}
            </ul>
        </>
    )
}

export default Pages;