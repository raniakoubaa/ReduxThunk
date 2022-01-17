import axios from "axios";
import { GET_DATA, GET_DATA_FAIL, GET_DATA_SUCCESS } from "./ActionType"

export const getData = () => async(dispatch) =>{
    dispatch({
        type: GET_DATA,
    });
    try {
        const res = await axios.get("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
        console.log(res)
        dispatch({
            type: GET_DATA_SUCCESS,
            payload: res.data,
        })
    } catch (error) {
        dispatch({
           type: GET_DATA_FAIL, 
           payload: error.response.data,
        }

        )
    }
}