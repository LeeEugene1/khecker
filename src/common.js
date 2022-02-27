export const isBlank = (value) => {
    if(value === '' || value === undefined || value === null){
        return false
    }
    return true
}