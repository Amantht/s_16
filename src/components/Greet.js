import React from "react";

///function Greet(){
   // return <h1> Hello KL </h1>
//}
export const Greet = (props) => {
   console.log(props.name)
   return <div> <h1> Hello {props.name}</h1>
   <p> KLU  </p> {props.children} </div>
}
//const Greet=() => <h1> Hello KLU </h1>
//export default Greet;