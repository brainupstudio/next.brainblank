import styles from './title.module.scss'

const ComponentTitle = (component) => {
    //* Color
    let colorTitle = ()=> {
        const color = component.data.Color;
        if (color !== null) {
            return (<style global jsx>{`
                .global_title {
                    color: ${color}!important;
                }
            `}</style>)
        } else {
            return false
        }
    }
    //* Heading
    let titleBlock
    switch (component.data.Heading) {
        case 'H2':
            titleBlock = (<h2 className={styles.c_title + ' global_title'}>{component.data.Title}</h2>)
            break;
        case 'H3':
            titleBlock = (<h3 className={styles.c_title + ' global_title'}>{component.data.Title}</h3>)
            break;
        case 'H4':
            titleBlock = (<h4 className={styles.c_title + ' global_title'}>{component.data.Title}</h4>)
            break;
        case 'H5':
            titleBlock = (<h5 className={styles.c_title + ' global_title'}>{component.data.Title}</h5>)
            break;
        case 'H6':
            titleBlock = (<h6 className={styles.c_title + ' global_title'}>{component.data.Title}</h6>)
            break;
        default:
            titleBlock = (<h1 className={styles.c_title + ' global_title'}>{component.data.Title}</h1>)
            break;
    }

    return (
        <>
            {colorTitle()}
            <div className={'uk-container uk-container-large uk-margin-medium-bottom'}>
                {titleBlock}
            </div>
        </>
    )
}

export default ComponentTitle