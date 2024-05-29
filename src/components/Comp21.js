import CONTEXT from '../Contextapi'
import React from 'react'
import Comp22 from './Comp22'
export default function Comp21(props) {
  return (
    <div>Comp21
        <hr />
        <CONTEXT.Provider value={props.p1}>
        
        <Comp22 p2={props.p1}></Comp22>
        </CONTEXT.Provider>
    </div>
  )
}
