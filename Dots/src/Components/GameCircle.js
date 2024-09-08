import React from 'react';
import '../Game.css';
// const GameCircle = (props) => {
//     console.log(props)
//   return (
//     <div onClick={oClick}>GameCircle {props.id}</div>
//   )
// }



// destructuring : replacing props with {id}

const GameCircle = ({id,children,className='player0',onCircleClicked}) => {
 
  return (
    <div className={`GameCircle ${className}`} onClick={()=>onCircleClicked(id)}> 

    {/* passes the id parameter straight to the oClick event */}
        {children}
    </div>
  )
}

export default GameCircle