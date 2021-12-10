const mkPlayer = (name,sign)=>{
    this.name = name ;
    this.sign = sign; 

    function getSign(){
        return this.sign
    }  
    function getName(){
        return this.name;
    }
    
    return{
            getSign:getSign,
            getName:getName
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

    restart_button.addEventListener('click',()=>{
        Game_Board.resetBoard();
        _render();
        console.log('reset');
    })

    function _render(){
        _buttons.forEach(button =>{
            let index  = button.dataset.value 
            button.textContent = Game_Board.getValue(index);
        })
    }

    function setMainText(input){
        const one = "player 1"
        const two = "player 2";
        if(input.includes(one) || input.includes(two)){
            playerone.toggleAttribute('bold');
            playertwo.toggleAttribute('bold');
        }
        game_text_element.textContent = input;


    }
    return {
        _render,
    }

})();







const game = (() =>{
    const pX = mkPlayer('player 1', "x");
    const pO = mkPlayer('player 2', 'o');
    let round = 1; 
    let gameOverFlag = false; 

    const play = (index) =>{
        Game_Board.setValue(index,getCurrentPlayer.getSign());
        if(checkWinner(index)){
            //add display controller
            gameOverFlag = true; 
            return; 
        }
        if(round === 9){
            //add display controller; 
            gameOverFlag = true; 
            return ;
        }
        round++; 
        //add display Controller; 

    }

    const getCurrentPlayer = () => {
        return round % 2 === 1 ? pX : pO;
      };

})()