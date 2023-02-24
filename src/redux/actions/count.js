import { INCREMENT, DECREMENT } from "../constants"

// 同步的action，返回的是一个对象
const incrementAction = (data) => ({ type: INCREMENT, data });
const decrementAction = (data) => ({ type: DECREMENT, data });

// 异步的action，返回的是一个函数
const incrementAsync = (data, gap = 1000) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            dispatch(incrementAction(data));
        }, gap)
    }
}

const incrementOdd = (data) => {
    return (dispatch, getState) => {
        let curState = getState();
        if (curState % 2 != 0) {
            dispatch(incrementAction(data));
        }
    }
}


export {
    incrementAction,
    decrementAction,
    incrementAsync,
    incrementOdd
}