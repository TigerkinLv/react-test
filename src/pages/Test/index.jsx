import React from 'react'
import { Outlet, redirect, useNavigate } from 'react-router-dom';

export default function Test() {

    let navigate = useNavigate();


    function toTest1() {
        navigate("test1", {
            state: {
                name: "哈哈",
                age: 22
            }
        })
    }

    function toTest2() {
        navigate("test2?name=喝好&age=21")
        // redirect("test2")
    }

    function toTest3() {
        navigate(`test3/你好/66`)
        // console.log("迪纳基拉");
        // redirect("test3")
    }

    return (
        <div>
            <div onClick={toTest1}>test1</div>
            <div onClick={toTest2}>test2</div>
            <div onClick={toTest3}>test3</div>
            <Outlet />
        </div>
    )
}
