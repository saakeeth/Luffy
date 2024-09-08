import React, {useState, useEffect} from "react"
import GameCircle from "./GameCircle"
import '../Game.css'
import Header from './Header'
import Footer from "./Footer";
import {isWinner} from "./Helper";
import {isDraw} from "./Helper";
import { Player_0, Player_1,Player_2,gameStatePlaying,gameStateWin, No_circles, gameStateDraw } from "./Constants";
const GameBoard = ()=>{
    const [GameBoard,setGameBoard] = useState(Array(16).fill(Player_0));
    const [currentPlayer,setCurrentPlayer] = useState(Player_1);
    const [gameState, setGameState] = useState(gameStatePlaying);
    const [winner, setWinner] = useState(Player_0);
   
    // depandency array in the useEffect is an empty array to make sure that the array runs only once.
    useEffect(()=>{
        initGame();
    },[]);
    const initGame = () =>{
        console.log('init game is only called once due to the useEffect empty array')
        setGameBoard(Array(16).fill(Player_0));
        setGameState(gameStatePlaying);
        setCurrentPlayer(Player_1);
    }
    const initBoard=()=>{
        const circle = [];
        for(let i=0;i<No_circles;i++){
            circle.push(renderCircle(i));
    }
    return circle;
}
    const circleClicked=(id)=>{
        if(gameState===gameStatePlaying && isWinner(GameBoard,id,currentPlayer)){
            setGameState(gameStateWin);
            setWinner(currentPlayer);
            console.log('Winner');
            // return;
        };
        if(gameState===gameStatePlaying && isDraw(GameBoard,id,currentPlayer)){
            setGameState(gameStateDraw);
            console.log('Drawed');
        };
        console.log('circle clicked '+id)
        if(GameBoard[id]!==Player_0) return;
        if(gameState === gameStateWin) return;
        
        setGameBoard(prev=>{
            // makes sure that ony 1 clicked circle is updates
            return prev.map((circle,pos)=>{
                if(pos === id) return currentPlayer;
                return circle;
            })
        });
       
        setCurrentPlayer(currentPlayer===Player_1? Player_2:Player_1)
        console.log(GameBoard)
        
    }    
const renderCircle= (id) =>{
    return <GameCircle key={id} id={id} className={`player${GameBoard[id]}`} onCircleClicked={circleClicked}/>}
    return (
        <div className="Container">
          
          <div className="GameBoard">
          <Header gameState = {gameState} player={currentPlayer} winner={winner}/>
          {initBoard()}
          <Footer onClicked={initGame}/>
          </div>
          

        </div>
       
    )
}
export default GameBoard 