export const isBlank = (value, word) => {
    if(value === '' || value === undefined || value === null){
    alert(word)
        return false
    }
    return true
}