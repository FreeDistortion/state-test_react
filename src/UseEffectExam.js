import React,{useState,useEffect} from 'react';

const UseEffectExam = () => {
    const [count,setCount]=useState(0);


    useEffect(()=>{
        document.title=`count of clicked: ${count}`;
        console.log("::::::::::::::::::::::::::::::",count);
    },[count])

    // change state variable via normal function without using useEffect
    function test(){
        setCount(count+1);
        // document.title=`count of clicked: ${count}`;
        // console.log("::::::::::::::::::::::::::::::",count);
    }
    return (
        <div>
            <p>count of button clicked: {count}</p>
            <button onClick={test}>click</button>
        </div>
    );
};

export default UseEffectExam;