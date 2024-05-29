import React, { useEffect, useState } from 'react'
// calling node js api
import axios from 'axios'
export default function Cart() {
  var [apidata, setapidata] = useState([])
  useEffect(function () {
    var ans = axios.get("http://localhost:7000/users")
    console.log(ans);
    ans.then(function (response) {
      setapidata(response.data)
    });
  },[])
  return (
    <div className='container'>
      <h1>data from node</h1>
      <table className='table'>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
        </tr>
        {
          apidata && apidata.length > 0 && apidata.map(value =>
            <tr>
              <td>{value._id}</td>
              <td>{value.name}</td>
              <td>{value.age}</td>
            </tr>
          )}
      </table>
    </div>
  )
}
