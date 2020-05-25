export const requiredField = (value) =>{
    if(value)
        return undefined
    else
        return 'Field is required'
}
export const maxLengthCreater = (maxLength) => (value) =>{
    if(value && value.length>30)
        return 'Max length 30'
    else
        return undefined
}