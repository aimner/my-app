export const maxLength = (validate) => (value) => {
    if(value && value.length > validate) return `Max length is ${validate}`
    return undefined
}


export const maxLengtth50 = (value) => {
    if(value && value.length > 50) return 'Max length is 50'
    return undefined
}

export const minLength = (value) => {
    
    if(!value) return 'Min length is 1'
    return undefined
}

