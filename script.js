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
    
    let board = document.querySelectorAll('.board')

    board.forEach(item => item.addEventListener('click', play))

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

    let gameFlow = () => {

    }

    gameFlow()

    let playerFactory = (name, mark) => {

        let makeMove = () => {
            // console.log(name + " makes a move")
        }

        let play = (event) => {

            mark = document.createElement('span').textContent
            mark.classList.add('board-content')
            if(event.target.hasChildNodes()) return
            // to prevent adding more Xs
            event.target.append(mark)
        }
        

        return {name, makeMove, play}
    }

    playerOne = playerFactory('frodo', 'x')

    playerTwo = playerFactory('terminator', 'o')

    // playerOne.makeMove()




})()