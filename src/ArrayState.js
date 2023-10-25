import React from 'react';
import {useState} from 'react';
const ArrayState = () => {
    const [mylist,setMylist]=useState([{id:10,name:"Tempname"}]);
    function getData(){
        // 임의의 data를 정의하고 상태값 변경
        let myArrData=[
            {id:1, name:"Vname"},
            {id:2, name:"Aname"},
            {id:3, name:"Sname"},
            {id:4, name:"Dname"},
            
        ]

        setMylist([...mylist, ...myArrData])
    }
    console.log("rendering...")
    return (
        <div>
            <button onClick={getData}>export value from array</button>
            <hr/>
            {
                mylist.map(val=><h1 key={val.id}>{val.id}:{val.name}</h1>)
            }
        </div>
    );
};

export default ArrayState;