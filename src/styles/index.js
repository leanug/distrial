/**
 * Styled componentes helper functions
 */

 export const setColor = {
    alpha  : "#FF1010", // Red
    beta   : "#0080FF", // Blue
    gamma  : "#FF1010", // Green
    delta_1: "#1F1F1F", // Dark 1
    delta_2: "#565656", // Dark 2
    delta_3: "#666666", // Dark 3
    pi     : "#F6F6F6", // Light 1
    tau    : "#E5E5E5", // Light 1
    sigma  : "#FFFFFF", // Light 2
}

export const setFont = {
    primaryFont  : '"Poppins"',
    secondaryFont: '"Source Sans Pro"'
}

export const setBreakpoint = {
    small  : '57.6rem',
    medium : '76.8rem',
    large  : '99.2rem',
    xLarge : '120rem',
    xxLarge: '140rem'
}

export const setGridGap = {
    alpha: 'grid-gap: 6rem;',
    beta : 'grid-gap: 3rem;',
    gamma: 'grid-gap: 1rem;',
}

export const setRadius = {
    alpha  : 'border-radius: 1rem;',
    beta   : 'border-radius: 0.5rem;',
    rounded: 'border-radius: 50%;',
}

export const setContainer = {
    container: `
        max-width: ${ setBreakpoint.xLarge };
        margin: 0 auto;
        width: 90vw;
    `
}

export const setContainerFluid = {
    container: `
        margin: 0 auto;
        width: 90vw;
    `
}

export const setSectionBg = ( background = setColor.delta_1 ) => {
    return `background-color: ${ background }`
}

export const setTransition = ({
    property = 'all',
    time = '0.3s',
    timing = 'ease-in-out' 
} = {}) => {
    return `transition: ${property} ${time} ${timing}`
}

export const setGrid = ({
    gap = '2rem',
    min = '30rem',
    max = '1fr'
} = {}) => {
    return `
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(${min}, ${max}));
        grid-gap: ${gap};
    `
}