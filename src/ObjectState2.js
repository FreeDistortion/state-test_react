import React,{useState,useEffect} from 'react';

const ObjectState2 = () => {
    const [orderInfo,setOrderInfo]=useState({count:0,price:0,totalPrice:0});

    useEffect(()=>{

    },[orderInfo])
    function setC(e){
        setOrderInfo({...orderInfo, count:e.target.value, totalPrice:orderInfo.count*orderInfo.price});
    }
    function setP(prmt){
        setOrderInfo({...orderInfo, price:prmt, totalPrice:orderInfo.count*orderInfo.price});
    }

    console.log(orderInfo);

    return (
        <div>
            <div>수량:<input type='number' onChange={setC}></input></div>
            <div>가격:<input type='number' onChange={e=>setP(e.target.value)}></input></div>
            <div>결과:{orderInfo.totalPrice}</div>
        </div>
    );
};

export default ObjectState2;