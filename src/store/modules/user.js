//디스패치 함수를 통해서 액션을 불러온다
//액션은 리듀서를 호출한다
//리듀서는 최종적으로 스토어를 변경시킨다

//액션타입(문자열)
const USER_LOGIN = 'user/LOGIN';
const USER_LOGOUT = 'user/LOGOUT'
//액션생성함수
export function LOGIN({email,password}){
    return{
        type:USER_LOGIN,
        payload:{
            email,
            password,
        },

    }
}
export function LOGOUT(){
    return{
        type:USER_LOGOUT,
    }
}

//초기상태
const initialState = {
    // email:null,
    // password:null,
    user:null
}

//리듀서
export default function user (state = initialState, action){
    switch(action.type){
        case USER_LOGIN:
            return{
                ...state,
                // email: action.payload.email,
                // password: action.payload.password,
                user:action.payload
            }
        case USER_LOGOUT:
            return{
                ...state,
                user:null
            }
        default:
            return state
    }
}