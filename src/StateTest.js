import React from 'react';
import {useState} from 'react';

const StateTest = () => {
    // 숫자 형식의 상태값
    // useState
    // const data = useState(1);
    const [mynum, setMynum] = useState(1);
    // 문자 형식의 상태값
    const [mytext, setMytext] = useState("");
    // boolean 형식의 상태값
    const [mybooleanVal, setMybooleanVal]=useState(false);

    useState()
    return (
        <div>
            <h1>상태값 체크</h1>
            <input type='number' onChange={(e)=>setMynum(e.target.value)}/>
            <input type='number' value={mynum}/>
            <input type='text' onChange={(e)=>setMytext(e.target.value)}/>
            <input type='checkbox' onChange={(e)=>setMybooleanVal(e.target.checked)}/>
            {mybooleanVal?<span>check</span>:<span>check disable</span>}
            <div>{mynum}</div>
            <div>{mytext}</div>
        </div>
    );
};

export default StateTest;