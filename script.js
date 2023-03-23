const winConditions =  [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const titleText = document.getElementById('titleText')
const restartButton = document.getElementById('restartButton')
const cells = Array.from(document.getElementsByClassName('gameCells'))

const playerX = "X"
const playerO = "O"
let currentPlayer = playerX
let boxes = Array(9).fill(null)

const startGame = () => {
    cells.forEach(gameCells => gameCells.addEventListener('click', cellClicked))
}

function cellClicked(i) {
    const id = i.target.id

    if(!boxes[id]){
        boxes[id] = currentPlayer
        i.target.innerText = currentPlayer

        if(playerWon() !==false){
            titleText.innerHTML = `Player ${currentPlayer} is the winner!`
        }

        currentPlayer = currentPlayer == playerX ? playerO: playerX
    }
}

function playerWon(){
    for (const condition of winConditions) {
        let [a, b, c] = condition
        
        if(boxes[a] && (boxes[a] == boxes[b] && boxes[a] == boxes[c])) {
            return [a, b, c]
        }
    }
    return false
}

function gameWon(){
    for (const condition of winConditions){
        let [a, b, c] = condition

        if(boxes[a] && (boxes[a] == boxes[b] && boxes[c])) {
            return [a ,b, c]
        }
    }
    return false
}

restartButton.addEventListener('click', restart)

function restart (){
    boxes.fill(null)

    boxes.forEach(gameCells => {
        boxes.innerHTML = "";
    })

    titleText.innerHTML = 'Tic Tac Toe'
    currentPlayer = playerX
}


startGame()