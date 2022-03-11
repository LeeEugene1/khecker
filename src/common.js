export const isBlank = (value, word) => {
    if(value === '' || value === undefined || value === null){
    alert(word)
        return false
    }
    return true
}

export const EMAIL_REGEX = new RegExp('^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])+@([a-zA-Z0-9]+\.)+[a-zA-Z0-9]{2,8}$')
export const PW_REGEX = new RegExp('^[a-zA-z0-9]{4,16}')
export const NICKNAME_REGEX = new RegExp('^[가-힣a-zA-z0-9]{2,10}')
export const ERROR_MSG = {
    required : '필수 정보입니다.',
    invalidEmail:'이메일이 올바르지 않습니다',
    invalidPassword:'4~16자 영문 대 소문자, 숫자를 사용하세요.',
    invalidPasswordCheck:'비밀번호가 일치하지 않습니다.',
    invalidNickname:'닉네임은 2~16자를 사용하세요'
}