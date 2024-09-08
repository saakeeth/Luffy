import React from 'react'

const Footer = ({onClicked}) => {
  return (
    <div className ="panel footer">
        <button onClick ={onClicked} className = "footer-text">New Game</button>
    </div>
  )
}

export default Footer