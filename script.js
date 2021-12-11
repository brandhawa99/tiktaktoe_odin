const mkPlayer = (name,sign)=>{
    this.name = name ;
    this.sign = sign; 

    function getSign(){
        return sign
    }  
    function getName(){
        return name;
    }
    
    return{
            getSign,
            getName
        }
}


//BOARD STUFF 
const Game_Board = (() =>{

    const gameBoard = ["","","","","","","","",""];

    const setValue = (index,sign) =>{
        if(gameBoard[index] !== ""){
            return;
        }
        gameBoard[index] = sign;
    }

    const getValue = (index) =>{
        return gameBoard[index]
    }
    const resetBoard = () =>{
        for(let i =0 ; i<gameBoard.length;i++){
            gameBoard[i] = ""; 
        }
    }
    return {
        getValue,setValue,resetBoard
    }

})();

//DISPLAY STUFF
const displayController = (()=>{
    const _buttons = document.querySelectorAll('.squares');
    const restart_button = document.querySelector('.restart');
    const game_text_element = document.querySelector('.game-text');
    const playerone = document.querySelector('.playerone');
    const playertwo = document.querySelector('.playertwo');


    _buttons.forEach(button => {
        button.addEventListener('click',() =>{
            if(game.isOver() || button.textContent !== "")return 
            game.play(parseInt(button.dataset.value));
            _render();
            
            
        })
    })

    restart_button.addEventListener('click',()=>{
        game.reset();
        Game_Board.resetBoard();
        _render();
        setMainText("Player 1 make a move!")
    })


    //updates the game board 
    function _render(){
        _buttons.forEach(button =>{
            let index  = button.dataset.value 
            button.textContent = Game_Board.getValue(index);
        })
    }

    function setMainText(input){
        const one = "player 1"
        const two = "player 2";
        const winner = "winner"
        if(input.includes(one) || input.includes(two)){
            playerone.classList.toggle('bold');
            playertwo.classList.toggle('bold');
        }
        game_text_element.textContent = input;


    }
    return {
        setMainText
    }

})();

// THE GAME CONTROLLER 
const game = (() =>{
    const pX = mkPlayer('player 1', "x");
    const pO = mkPlayer('player 2', 'o');
    let round = 1; 
    let gameOverFlag = false; 

    const play = (index) =>{

        // get data of current player 
        let playerName = getCurrentPlayer().getName();
        let playerSymbol = getCurrentPlayer().getSign();

        Game_Board.setValue(index,playerSymbol);
        if(checkForWinner(playerSymbol)){
            displayController.setMainText(`${playerName} ${playerSymbol} is the winner!!!!!!`)
            gameOverFlag = true;
            return; 
        }
        // if(checkWinner(index)){
        //     //need to fix this 
        //     displayController.setMainText(getCurrentPlayer.name() , getCurrentPlayer.getSign())
        //     gameOverFlag = true; 
        //     return; 
        // }
        if(round === 9){
            displayController.setMainText("ITS A TIE");
            gameOverFlag = true; 
            return ;
        }
        
        round++; 
        displayController.setMainText(`It is ${getCurrentPlayer().getName()}'s turn `)

    }

    const getCurrentPlayer = () => {
        return round % 2 === 1 ? pX : pO;
      };

    function isOver() {
        return gameOverFlag;
    }


    function reset(){
        round = 1; 
        gameOverFlag = false;
    }


      function checkForWinner(sign){
          const winConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
          ];
          for(let i =0 ; i<winConditions.length;i++){
              let win = winConditions[i];
            console.log(sign);
              if(Game_Board.getValue(win[0])===sign&Game_Board.getValue(win[1]) ===sign && Game_Board.getValue(win[2]) === sign){
                console.log("HE");
                return true
              }
          }
          
          return false; 

      }

    return{
        isOver,
        play,
        reset
    }
})()