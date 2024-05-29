import axios from "axios";
import React from "react"; 

class  Component2 extends React.Component {

constructor() {
  console.log("constuctor callled");
  super();
  console.log(this);
  // constructor 
  this.state = {name:"jack",age:27,apidata:[]}
}
 f1() {
  // alert()
  // calling using dirctly
  this.setState({name:"mona",age:Math.random()});
 // this.props.x1="200"// tprops are read only we can not rewrite this
}

// life cycle hooks of react  in classcomponent
componentDidMount(){
  console.log("didMount cycle",
  this.state.name,this.state.age)
  var ans =axios.get("https://fakestoreapi.com/products")
console.log(ans);
ans.then((response) => 
  {
  console.log(response);
this.setState({apidata:response.data});
})
  
  //only one time call at time of page loading not on every api calli.e buttan click on
}
componentDidUpdate(){
  console.log("DidUpdate cycle",
  this.state.name,this.state.age)
  
}
// componentWillUnmount it work as destuctor
componentWillUnmount(){
  console.log("WillUnmount cycle")
}
  render() {
    var ans= this.state.apidata
    return (
      <div className="container">
        <h1>class Component</h1>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <button onClick={() => {this.f1()}}></button>
        <p>{this.props.x1}</p>
        <div className="row">
          {
            ans && ans.length > 0 && ans.map(value =>
              <div className="col-3">
                 {value.title}
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
export default Component2;