import React,{useState} from 'react';


const ObjectState = () => {
    const [orderInfo,setPrdt]=useState({count:0,price:0,totalPrice:0});
    
    function setC(e){
        setPrdt({...orderInfo,count:e.target.value,totalPrice:(orderInfo.count*orderInfo.price)});
    }
    function setP(prmt){
        setPrdt({...orderInfo,price:prmt,totalPrice:(orderInfo.count*orderInfo.price)});
    }
    console.log(orderInfo)

    return (
        <div>
            <div>수량:<input type='number' onChange={setC}></input></div>
            <div>가격:<input type='number' onChange={e=>setP(e.target.value)}></input></div>
            <div>결과:{orderInfo.totalPrice}</div>
        </div>
    );
};

export default ObjectState;