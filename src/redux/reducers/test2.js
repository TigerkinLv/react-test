import { ADDPERSON } from './../constants';

let initState = [
    { name: "黎明", age: 22 },
    { name: "哈哈", age: 29 }
]

export default function testReducer(preState = initState, action) {

    let { type, data } = action;
    switch (type) {
        case ADDPERSON: return [...preState, data];
        default: return preState;
    }

}