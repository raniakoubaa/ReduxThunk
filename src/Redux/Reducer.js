import { GET_DATA, GET_DATA_FAIL, GET_DATA_SUCCESS } from "./ActionType";

const initialState = {
loading: false,
Makeup: [],
error : null
}
const reducerMakeup = (state=initialState,{type, payload}) => {
    switch (type) {
        case GET_DATA:
          return {...state, loading: true,
          }
          case GET_DATA_SUCCESS:
              return {...state, loading: false, Makeup: payload }
    
        case GET_DATA_FAIL:
           return {...state, loading:false, error: payload}
           default:
               return state
    }
}
export default reducerMakeup