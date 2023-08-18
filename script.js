
let game = (() => {

    let playerFactory = (name, mark, turn) => {

        this.name = name

        this.turn = turn

        let play = (event) => {

            let justPlayed = name

            turn = false

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

            return justPlayed, turn
        }



        return {name, mark, play}
    }


    let addNewPlayer = function() {

        let playerName = document.querySelector('[placeholder]').value

        let newPlayer = playerFactory(playerName, 'X')
        
        return newPlayer
    }

    let playerOne = addNewPlayer()

    playerTwo = playerFactory('Computer', 'O')


    let displayPlayerNames = function() {

        let _playerOne = document.querySelector('.player-name:first-child')

        let versus = document.querySelector('.player-name:nth-child(2)')

        let _playerTwo = document.querySelector('.player-name:nth-child(3)')

        _playerOne.textContent = playerOne.name

        versus.textContent = 'vs'

        _playerTwo.textContent = 'Computer'
    }

    // add player button

    let addPlayerBtn = document.querySelector('#add-player')

    addPlayerBtn.addEventListener('click', displayPlayerNames)

    let checkWinner = function() {

        for(array in gameboard) {

            if(gameboard[array].length == 3 && gameboard[array].every(item => item == 'X')) {

                // console.log(gameboard[array])
                
                console.log(playerOne.name + ' wins')

        } else if (gameboard[array].length == 3 && gameboard[array].every(item => item == 'O')) {

                console.log(playerTwo.name + ' wins')
        }
    }
    } 
    
    window.addEventListener('click', checkWinner)

   

    let coinToss = function() {

        return Math.round(Math.random()) //1 or 0
    }

    let gameFlow = (event) => {
        
        let whoseTurn = coinToss() ? playerOne.play(event) : playerTwo.play(event)

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

        // reset button

        let resetBtn = document.querySelector('#reset')

        resetBtn.addEventListener('click', () => window.location.reload())

    return {gameboard, displayPlayerNames, addNewPlayer, coinToss, gameFlow, resetBtn, playerFactory, playerOne, playerTwo}
 
})()