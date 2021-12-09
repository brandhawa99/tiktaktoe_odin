

const GameBoard = (function(){
    const gameBoard = ["","","","","","","","",""];
    
    //accept vales to add to gameboard 
    //paramters  index : which index of gameboard  
    //paramater  shape: what the players move is (x/o);
    function acceptValue(index, shape){
        if(gameBoard[index] !== ""){
            console.log("THERE IS ALREADY A PIECE THERE");
            return;
        }
        gameBoard[index] = shape;
        _render();
    }
    function resetBoard(){
        for(let i = 0 ; i<gameBoard.length;i++){
            gameBoard[i] = ""; 
        }
        _render();
    }
    
    function _render(){
        _buttons.forEach(button =>{
            let value  = button.dataset.value
            button.textContent = gameBoard[value];
        })
    }
    function getBoardState(){
        return gameBoard;
    }
    return{
        acceptValue: addValue,
        resetBoard: resetBoard,
        getBoardState:getBoardState
    }
})();

const player = (name,symbol) =>{
    this.name = name ; 
    this.symbol = symbol; 

    const getSymbol = () =>{
        return this.symbol; 
    }

    const getName = () =>{
        return this.name;
    }
    return {getSymbol,getName}
}

const game = (function(){

    let player1 = player("baltej","x");
    let player2 = player("layla","o");
    const _buttons = document.querySelectorAll('#game_button');
})();