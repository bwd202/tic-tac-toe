let board = document.querySelectorAll('.board')

board.forEach(item => {
    item.addEventListener('click', play)
})

function play(event) {
    let mark = document.createElement('span')
    mark.textContent = 'X'
    mark.classList.add('board-content')
    if(event.target.hasChildNodes()) return
    // to prevent adding more Xs
    event.target.append(mark)
}