
let game = (() =>{

    let playerFactory = (name, mark) => {

        let play = (event) => {

            let square = event.target
            // let currentPlayer //player's turn

            if(square.hasChildNodes()) return  // to prevent adding more Xs
           
            square.append(mark)


            switch(square.dataset.value) {
                case '1':
                    gameboard.innerBoard.topRow.push(mark)
                    console.log(gameboard)
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
               
        topRow: [],
        middleRow: [],
        bottomRow: [],
        firstColumn: [],
        secondColumn: [],
        thirdColumn: [],
        topBottomDiagonal: [],
        bottomTopDiagonal: []

        }

    // console.log(gameboard.getMark())

    return {gameboard}
 
})()