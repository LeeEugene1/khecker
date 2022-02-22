import { combineReducers } from "redux";
import user from './modules/user'

export default combineReducers({
    user//서브리듀서
})

// const rootReducer = {
//     todo:{user.js에서 만든 initialstate값이들어옴}
// }