import React, { useRef } from 'react'
import axios from 'axios'
export default function Form() {
    var x1 = useRef();
    var x2 = useRef();
    function f1() { 
        var data1=x1.current.value
        var data2=x2.current.value
        console.log(data1)
        console.log(data2)
        var record={name:data1,age:data2}
        var ans =axios.post("http://localhost:7000/user-action",record);
        console.log(ans);
    }
  return (
   
    <div className='container'>
        <h1>Add Records</h1>
        <input type="text" placeholder='enter name' ref={x1} />
        <br />
        <input type="text" placeholder='enter age' ref={x2} />
        <br />
        <button onClick={f1}>Submit</button>
    </div>
  );
}
