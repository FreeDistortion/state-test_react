import React,{useState, useEffect} from 'react';
import MovieList from './movie/MovieList';


const MovieMain = () => {
    const [mname,setMname]=useState();
    useEffect(
        () => { console.log(mname) },[mname]
    )

    return (
        <div>
        <input type='text' onChange={(e)=>setMname(e.target.value)}></input>
        <MovieList searchByKeyword={mname}></MovieList>
      </div>
    );
};

export default MovieMain;