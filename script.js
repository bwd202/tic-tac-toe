
let game = (() => {

    let playerFactory = (name, mark) => {

        let play = (event) => {

            let cell = event.target
            // let currentPlayer //player's turn

            if(cell.hasChildNodes()) return  // to prevent adding more Xs
           
            cell.append(mark)


            switch(cell.dataset.square) {
                case '1':
                    gameboard.topRow.push(mark)
                    gameboard.firstColumn.push(mark)
                    gameboard.ltrDiagonal.push(mark)
                    break
                case '2':
                    gameboard.topRow.push(mark)
                    gameboard.secondColumn.push(mark)
                    break
                case '3':
                    gameboard.topRow.push(mark)
                    gameboard.thirdColumn.push(mark)
                    gameboard.rtlDiagonal.push(mark)
                    break
                case '4':
                    gameboard.middleRow.push(mark)
                    gameboard.firstColumn.push(mark)
                    break
                case '5':
                    gameboard.middleRow.push(mark)
                    gameboard.secondColumn.push(mark)
                    gameboard.ltrDiagonal.push(mark)
                    gameboard.rtlDiagonal.push(mark)
                    break
                case '6':
                    gameboard.middleRow.push(mark)
                    gameboard.thirdColumn.push(mark)
                    break
                case '7':
                    gameboard.bottomRow.push(mark)
                    gameboard.firstColumn.push(mark)
                    gameboard.rtlDiagonal.push(mark)
                    break
                case '8':
                    gameboard.bottomRow.push(mark)
                    gameboard.secondColumn.push(mark)
                    break
                case '9':
                    gameboard.bottomRow.push(mark)
                    gameboard.thirdColumn.push(mark)
                    gameboard.ltrDiagonal.push(mark)            
            }

        }
        

        return {name, play}
    }

    playerOne = playerFactory('frodo', 'x')

    playerTwo = playerFactory('terminator', 'o')

    // playerOne.makeMove()


    let coinToss = function() {

        return Math.round(Math.random()) ? 'playerOne' : 'playerTwo' //1 -> player 1 turn, 0 -> player 2
    
    }

    let displayPlayerNames = function() {
        document.querySelector('.player-name').textContent = playerOne.name + ' vs ' + playerTwo.name
    }

    let checkWinner = function() {

        for(array in gameboard) {

            if(array.length == 3 && array.every(item => item == 'x')) {

                console.log('playerOne wins')      
        }
    }
    }

    let gameFlow = (event) => {

        displayPlayerNames()
        
        let firstPlay = coinToss()

        if(firstPlay == 'playerOne') playerOne.play(event)

        else playerTwo.play(event)

    }
    
    let outerBoard = document.querySelectorAll('.board')

    outerBoard.forEach(item => item.addEventListener('click', gameFlow))

    let gameboard = {
               
        topRow: [],
        middleRow: [],
        bottomRow: [],
        firstColumn: [],
        secondColumn: [],
        thirdColumn: [],
        ltrDiagonal: [],
        rtlDiagonal: []

        }

    return {gameboard}
 
})()