import React from 'react'
import {gameStateDraw, gameStatePlaying,gameStateWin } from "./Constants"
const Header = ({gameState, player, winner}) => {
  const renderLabel = () =>{
    switch(gameState){
      case gameStatePlaying:
        return <div>Player {player} Turn</div>
      case gameStateWin:
        return <div>Player {winner} wins</div>
      case gameStateDraw:
        return <div>Its a Draw</div>
      default:
    }
  }

  return (
    <div className ="panel header">
        <div className = "header-text">{renderLabel()}</div>
    </div>
  )
}

export default Header