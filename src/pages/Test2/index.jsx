import React, { Fragment } from 'react'
import { useSearchParams } from 'react-router-dom'

import { connect, useDispatch, useSelector } from "react-redux";

import { incrementAction } from "../../redux/actions/count";
import { addPerson } from './../../redux/actions/test2';

function Test2({ count, jia100 }) {

    let [search, setSearch] = useSearchParams();
    console.log("&", search);
    let age = search.get("age");
    let name = search.get("name");
    let dispatch = useDispatch();

    let persons = useSelector((state) => state.test);
    console.log(persons);


    const add100 = () => {
        jia100(100);
    }

    const addaPerson = () => {
        let p = { name: "呵呵呵", age: 223 }
        dispatch(addPerson(p))
    }
    return (
        <Fragment>
            <div>Test2</div>
            <div>{age}</div>
            <div>{name}</div>
            当前求和为<span>{count}</span>
            <button onClick={add100}>设置和+100</button>
            {
                persons.map((item, index) => {
                    return <div key={index}>
                        {item.name}--{item.age}
                    </div>
                })
            }
            <hr />
            {/* <input type="text" ref={c=this}/> */}
            <button onClick={addaPerson}>增加一个人</button>
        </Fragment>

    )
}

export default connect(
    (state) => ({ ...state }
    ),
    {
        jia100: incrementAction
    }
)(Test2);