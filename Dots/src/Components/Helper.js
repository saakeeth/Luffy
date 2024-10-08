// It is a simple boolean check function 
export const isWinner = (GameBoard,currentMove,currentPlayer) =>{
    // GameBoard is being passed as a reference
    const board = [...GameBoard];
    board[currentMove] = currentPlayer
    const winLines = [
        [0,1,2,3],
        [4,5,6,7],
        [8,9,10,11],
        [12,13,14,15],
        [0,4,8,12],
        [1,5,9,13],
        [2,6,10,14],
        [3,7,11,15],
        [0,5,10,15],
        [3,6,9,12],
    ];
    for(let i=0;i<winLines.length;i++){
        // Destructure the winLines 
        const [c1,c2,c3,c4] = winLines[i];
        if(board[c1]>0 &&
            board[c1] === board[c2] &&
            board[c2] === board[c3] &&
            board[c3] === board[c4]  )
        {
            return true;
        }
    }
    return false;
}

export const isDraw = (GameBoard,currentMove,currentPlayer) =>{
    const board = [...GameBoard]
    board[currentMove] = currentPlayer;
    for(let i=0;i<16;i++){
        if(board[i] === 0){
            return false;
        }
    }
    return true;
    }

