

export const lengthValidator = (maxLength) => (value) => {
    let errors = {}
    if(!value || value.length > maxLength) return errors
    return undefined
}