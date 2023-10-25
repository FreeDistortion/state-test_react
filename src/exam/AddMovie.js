import React from 'react';
import {useState} from 'react';
import Test, { Test2 } from './Test';

let val=1;
const AddMovie = () => {
    const [mlist, setMlist]=useState([{id:0,name:""}]);
    const [iptext, setIptext]=useState("");
    function getML(){
        setMlist([...mlist, {id:val++,name:iptext}]);
    } 
    return (
        <div>
            <h1>Now Playing...</h1>
            <input type='text' onChange={(e)=>setIptext(e.target.value)}></input>
            <button onClick={getML}>add</button>
            <div>{mlist.map((v,k)=><div key={k}>{v.id},{v.name}</div>)}</div>
            
            <Test/>
            <Test2/>
        </div>
    );

};

export default AddMovie;