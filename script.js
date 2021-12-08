const GameBoard = (function(){
    const gameBoard = [];


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