import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'

// import { INCREMENT, DECREMENT } from "../../redux/constants";
import { incrementAction, decrementAction, incrementAsync, incrementOdd } from "../../redux/actions/count"



export default function Test1() {

  let location = useLocation();

  const dispatch = useDispatch();

  let count = useSelector(state => state.count);
  console.log(count);

  let { name, age } = {};

  if (location.state) {
    name = location.state.name;
    age = location.state.age;
  }


  const add = () => {
    // dispatch({ type: INCREMENT, data: 1 });
    dispatch(incrementAction(1));
  }
  const minus = () => {
    // dispatch({ type: DECREMENT, data: 1 });
    dispatch(decrementAction(1));
  }
  const addOdd = () => {
    dispatch(incrementOdd(1));
  }
  const addWait = () => {
    dispatch(incrementAsync(1, 1000));

  }


  return (
    <div>Test1
      <hr />
      当前求和为{count}
      <button onClick={add}>加</button>
      <button onClick={minus}>减</button>
      <button onClick={addOdd}>奇数加</button>
      <button onClick={addWait}>等一等再加</button>
      <div>{name}</div>
      <div>{age}</div>
    </div>
  )
}
