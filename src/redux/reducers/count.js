import { INCREMENT, DECREMENT } from "../constants";


const initState = 0;

export default function countReducer(preState = initState, action) {
    console.log("haha", action);
    let { type, data } = action;
    switch (type) {
        case INCREMENT: return preState + data;
        case DECREMENT: return preState - data;
        default: return preState;
    }
}   