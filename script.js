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