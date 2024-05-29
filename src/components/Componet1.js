import React, { useState } from 'react'
import Comp21 from './Comp21'

export default function Componet1() {

    var [data, setdata]=useState(0)
    function f1(){
        var record=Math.random()
        setdata(record)
        console.log(record);
    }
  return (
    <div className='container'>
        <h1>Props Drilling</h1>
        <button onClick={f1}>Enter</button>
        {data}

    <hr />
    <Comp21 p1={data}></Comp21>
    
    </div>
  )
}
