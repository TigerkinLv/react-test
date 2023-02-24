import React, { useState, useEffect } from 'react'
import { useRef } from 'react';
import { useParams } from 'react-router-dom'

export default function Test3() {

    let params = useParams();
    console.log(params);
    let { age, name } = params;

    const [count, setCount] = useState(0);
    console.log(count, setCount);

    const mref = useRef();

    useEffect(() => {
        console.log("componentDidmounted and updated");
        return () => {
            console.log("componentwillunmounted");
        }
    }, [count]);


    function add() {
        setCount(count + 1);
        // setCount(count => count + 1)
    }

    function show() {
        console.log(mref.current.value)
    }

    return (
        <div>Test3
            {count}
            <div>{age}</div>
            <div>{name}</div>
            <button onClick={add}>点我+1</button>
            <input type="text" ref={mref} />
            <button onClick={show}></button>
        </div>
    )
}
