import React,{useState,useEffect} from 'react';

const EffectTest = () => {
    let [data,setData]=useState(0);
    // useEffect 실행 시점
    // 1. at the 1st time function called and rendered
    // 2. at the point changed state
    // useEffect(param1, param2)
    // param1: defined function when called useEffect
    // param2: definition that useEffect depends on what kina state variable, 생략하면 모든 state change마다 call
    useEffect(()=>{
        console.log("execute useEffect")
    },[data])

    const connectServer=()=>{
        // get data via connecting server
        // and change state to gathered data
        setData(1000);
        console.log("getting data completed...")
    }

    console.log(data)
    return (
        <div>
            <h1>data: {data}</h1>
            <button onClick={()=>setData(data+1)}>change data</button>
        </div>
    );
};

export default EffectTest;