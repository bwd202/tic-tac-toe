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

    let gameFlow = () => {
        
        let firstPlay = coinToss()

        if(firstPlay == 'playerOne') playerOne.play()

        else playerTwo.play()

    }
    
    let board = document.querySelectorAll('.board')

    board.forEach(item => item.addEventListener('click', gameFlow))

    let cell = document.createElement('span')

    cell.classList.add('board-content')


    let coinToss = function() {
        let x = 0

        for(let i = 100; i > 0; i--) {
        
        x = Math.round(Math.random())
        
        // console.log(x)

        return x ? 'playerOne' : 'playerTwo'
        }
    }

    let gameboard = {
        board: [[0,0,0], [0,0,0], [0,0,0]],

    }

    let playerFactory = (name, mark) => {

        let makeMove = () => {
            // console.log(name + " makes a move")
        }

        let play = (event) => {

            let currentPlayer //player's turn

            if(event.target.hasChildNodes()) return  // to prevent adding more Xs
           
            event.target.append(mark)
        }
        

        return {name, makeMove, play}
    }

    playerOne = playerFactory('frodo', 'x')

    playerTwo = playerFactory('terminator', 'o')

    // playerOne.makeMove()




})()