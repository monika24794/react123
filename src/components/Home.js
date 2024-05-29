import Product from "./Product";
import {useRef, useState} from "react";
function Home()
{
//State variables 
//usestate is the hook in react in build funcation
var [counter,setcounter]=useState(100);
// counter is the state variable 
//setcounter is act as  dispatcher funcation to update the  state variable
//console.log(typeof setcounter);
function f2() {
  // event hanling through state variables
  //alert()
setcounter(counter +10);
}
//referance variables
//useref is the hook in react in build funcation
var x1=useRef();
 var x2=useRef();
 var x3=useRef();

  function f1() {

    // event handlers
   // alert()
  //  console.log(x1);
  //  console.log(x2);
  var data1=x1.current.value
  var data2=x2.current.value
  x3.current.innerHTML=data1*data2;
  // console.log(data1);
  // console.log(data2);
  }
  
    return (<div class="container text-center">
    <div class="row">
      <div class="col">
        {/* name and price  are attributes of the product */}
        <Product name="Watch" price="2000"></Product>
      </div>
      <div class="col">
      <Product name="Watch" price="1500"></Product>
      </div>
      <div class="col">
      <Product name="Watch" price="1500"></Product>
      </div>
      <div class="col">
      <h2>referance variable</h2>
      <input type="text" ref={x1}/>
      <input type="text" ref={x2} />
      <button onClick={f1}>Enter</button>
      <p ref={x3}></p>
      </div> 
      <div class="col">
      <h3>State variable</h3>
      {counter}
      <button onClick={f2}>enter</button>
      </div>
    </div>
  </div>)
}
export default Home;