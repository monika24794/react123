import axios from 'axios';
import React, { useEffect ,useState} from 'react'

export default function Right(props) {
  var [apidata, setapidata] = useState([]);
    useEffect(function() {
      if(props.p2 !=""){
      var apipath= axios.get(`https://fakestoreapi.com/products/category/${props.p2}`);
      apipath.then(function (response) {
        // console.log(response);
        console.log(response.data);
        setapidata(response.data);
      });
      }
    },[props.p2])//conditional rendering
  return (
    <div className='container xyz '>
      <h1>Api Data</h1>
      <div className="row">
        {
          apidata && apidata.length > 0 && apidata.map(value =>
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
