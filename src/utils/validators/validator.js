
export const requiredField = value => {
    if (value) return undefined
     return console.log("Field is required")
}
export const myPostValidator = (maxLength) => (value) => {
    let errors = {}
    if(!value || value.length > maxLength) return errors
    return undefined
}