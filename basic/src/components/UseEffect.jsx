//'rfce' is short form 

import {useEffect, useState} from 'react'
import React from 'react'

function UseEffect() {
    const[count, setCount] = useState(0)

    
    useEffect(()=>{
        console.log("Use-Effect Called ");
        //log();
        fetchData();
    }, []) 

    async function fetchData(){
        let res = await fetch("http://localhost:3000/todo")
        let data = await res.json();
        console.log(data);
    }

    function countInc(){
        setCount(count+1);
    }

    function countDec(){
        setCount(count-1);
    }

  return (
    <div>
      <h1> UseEffect </h1>
      <h1> {count} </h1>
      <button onClick={countInc}> + </button>
      <button onClick={countDec}> - </button>
    </div>
  )
}

export default UseEffect
