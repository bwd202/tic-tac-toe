// let board = {
//     
//     }),
//     topRow: [],
//     middleRow: [],
//     bottomRow: [],
//     firstColumn: [],
//     secondColumn: [],
//     thirdColumn: [],
//     topBottomDiagonal: [],
//     bottomTopDiagonal: []
// }

// 

(function game() {

    let playerFactory = (name, mark) => {

        let makeMove = () => {
            // console.log(name + " makes a move")
        }

        let play = (event) => {


            // let currentPlayer //player's turn

            if(event.target.hasChildNodes()) return  // to prevent adding more Xs
           
            event.target.append(mark)
        }
        

        return {name, makeMove, play}
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

    let gameFlow = (event) => {

        displayPlayerNames()
        
        let firstPlay = coinToss()

        if(firstPlay == 'playerOne') playerOne.play(event)

        else playerTwo.play(event)

    }
    
    let outerBoard = document.querySelectorAll('.board')

    outerBoard.forEach(item => item.addEventListener('click', gameFlow))

   

    // let cell = document.createElement('span')

    // cell.classList.add('board-content') 

    // document.appendChild(cell)

    let gameboard = {
        innerBoard: [[0,0,0], [0,0,0], [0,0,0]],
        getMark() {
            let board = Array.from(outerBoard)
            return board
        }

    }
 
})()