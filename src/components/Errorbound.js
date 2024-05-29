import React from "react";
import Image from "./Image";
import ErrorBoundary from "../ErrorBoundary";

export default function Errorbound(){
    return(
        <div className="container">
            <h1>Error Boundries example</h1>
 <div className="row">
    <div className="col-4">
        <Image p1="https://images.pexels.com/photos/250591/pexels-photo-250591.jpeg?auto=compress&cs=tinysrgb&w=600"></Image>
    </div>
    <div className="col-4">
        <Image p1="https://images.pexels.com/photos/757889/pexels-photo-757889.jpeg?auto=compress&cs=tinysrgb&w=600"></Image>
    </div>
    <div className="col-4">
    <ErrorBoundary>
        <Image p1=""></Image>
        </ErrorBoundary>
    </div>

 </div>
        </div>
    )
}