const StaticVars = {
    container: 'uk-container uk-container-small ',
    motionFade: {
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        transition: {
            duration: 0.3,
            ease: [0.76, 0, 0.24, 1],
        }
    }
}

export default StaticVars;