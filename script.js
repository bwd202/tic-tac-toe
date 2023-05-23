let board = {
    items: document.querySelectorAll('.board').forEach(item => {
        item.addEventListener('click', play)
    }),
    topRow: [],
    middleRow: [],
    bottomRow: [],
    firstColumn: [],
    secondColumn: [],
    thirdColumn: [],
    topBottomDiagonal: [],
    bottomTopDiagonal: []
}

function play(event) {
    let mark = document.createElement('span')
    mark.textContent = 'X'
    mark.classList.add('board-content')
    if(event.target.hasChildNodes()) return
    // to prevent adding more Xs
    event.target.append(mark)
}