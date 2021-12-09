const GameBoard = (function(){
    const gameBoard = ["","","","","","","","",""];

    //cache DOM 
    let _buttons = document.querySelectorAll('#game_button')
    
    
    //addEventListener to buttons

    _buttons.forEach(button =>{
        button.addEventListener('click',()=>{
            console.log(button.dataset.value)
            if(gameBoard[button.dataset.value] !== ""){
                console.log('space is used');
                return;
            }
            gameBoard[button.dataset.value] = "x";
            button.textContent = "X";
            console.log(gameBoard);
        })
    })


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