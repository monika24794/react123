import React, { useEffect, useState } from 'react'
import axios from 'axios';
export default function Login() {
  //calling the api here
  var [apidata, setapidata] = useState([

  ]);

  useEffect(function () {
    // console.log("call api");
    // console.log(axios);
    var ans = axios.get('https://fakestoreapi.com/products')
    //console.log(ans);
    //promise is called ti show  results
    ans.then(function (response) {
      // console.log(response);
      console.log(response.data);
      setapidata(response.data);
    })
  }, [])
  return (
    <div className='container xyz '>
      <h1>Api Data</h1>
      <div className="row">
        {
          apidata && apidata.length >0 && apidata.map(value =>
            <div className='col-3'style={{'border':'solid'}}>
              <img src={value.image} className='img-fluid pt-3' />
              <hr />
              <h2>{value.price}</h2>
              <p>{value.title}</p>
              {/* <p>{value.description}</p> */}
            </div>
          )
        }
      </div>
    </div>
  )
}
