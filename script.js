'use strict'

let game = (() => {

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

    let lastToPlay = null
    
    //below is debugging fn, exports internal var lastToPlay in browser's console
    let returnLastToPlay = () => {
        return lastToPlay
    }

    let playerFactory = (name, mark) => {

        let play = (event) => {

            let cell = event.target

            if(cell.hasChildNodes()) return  // to prevent adding more marks
           
            cell.append(mark)

            lastToPlay = name

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

        return {name, mark, play}
    }

    // PLAYER NAME, BTN

    let displayPlayerNames = function() {

        let _playerOne = document.querySelector('.player-name:first-child')

        let versus = document.querySelector('.player-name:nth-child(2)')

        let _playerTwo = document.querySelector('.player-name:nth-child(3)')

        _playerOne.textContent = addNewPlayer()

        versus.textContent = 'vs'

        _playerTwo.textContent = 'Computer'
    }

    let addNewPlayer = function() {

        let playerName = document.querySelector('[placeholder]').value
        
        return playerName ? playerName : 'Player 1'
    }

    let playerOne = playerFactory(addNewPlayer(), 'X')

    let playerTwo = playerFactory('Computer', 'O')

    let addPlayerBtn = document.querySelector('#add-player')

    addPlayerBtn.addEventListener('click', displayPlayerNames)

    // GAME FLOW & CHECK WINNER

    let checkWinner = function() {

        let message = ''

        let tieCondition = null

        for(let array in gameboard) {

            tieCondition += gameboard[array].length

            if(gameboard[array].length == 3 && gameboard[array].every(item => item == 'X')) {

                // console.log(gameboard[array])

                message = playerOne.name + ' wins'

                document.querySelector('.player-name:first-child').textContent = message

                document.querySelector('.player-name:nth-child(2)').textContent = ''

                document.querySelector('.player-name:nth-child(3)').textContent = ''

                board.forEach(item => item.removeEventListener('click', playTurn))

            } else if (gameboard[array].length == 3 && gameboard[array].every(item => item == 'O')) {

                message = playerTwo.name + ' wins'

                document.querySelector('.player-name:first-child').textContent = message

                document.querySelector('.player-name:nth-child(2)').textContent = ''

                document.querySelector('.player-name:nth-child(3)').textContent = ''

                board.forEach(item => item.removeEventListener('click', playTurn))
                
            } 
        }

        // all cells are marked: 8 arrays * 3 (array max length) = 24
        if(tieCondition == 24) {

                message = 'It\'s a tie'

                document.querySelector('.player-name:first-child').textContent = message

                document.querySelector('.player-name:nth-child(2)').textContent = ''

                document.querySelector('.player-name:nth-child(3)').textContent = ''
        }
    } 
    
    window.addEventListener('click', checkWinner)

    let coinToss = function() {

        return Math.round(Math.random()) //1 or 0
    }

    let gameFlow = () => {
        
        let whoseTurn = coinToss() ? playerOne.name : playerTwo.name

        return whoseTurn
    
    }

    let playTurn = function(event) {

        if(lastToPlay == null) {
            
            let turn = gameFlow()

            if(turn == playerOne.name) {

                playerOne.play(event)

            } else {

                playerTwo.play(event)
            } 

        } else if(lastToPlay == playerOne.name) {

            playerTwo.play(event)

        } else playerOne.play(event)

    }

    // BOARD

    let board = document.querySelectorAll('.board')
    
    let startBtnFn = () => {

        board.forEach(item => item.addEventListener('click', playTurn))

    }

    // START & RESET BTNS
    let startBtn = document.querySelector('#start')

    startBtn.addEventListener('click', startBtnFn)

    let resetBtn = document.querySelector('#reset')

    resetBtn.addEventListener('click', () => window.location.reload())

    // return {gameboard, displayPlayerNames, addNewPlayer, coinToss, gameFlow, playerFactory, playerOne, playerTwo, returnLastToPlay}
 
})()