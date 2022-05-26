var board;
var player1 = 'X';
var player2 = 'O';
var currPlayer = player1;
var GameOver = false;

window.onload = function(){
    setGame();
}

function setGame(){
    board = [
        [' ',' ',' '],
        [' ',' ',' '],
        [' ',' ',' ']
    ]
    let i = 1;
    for(let r = 0;r < 3;r++){
        for(let c = 0;c < 3;c++){
            let tile = document.createElement("button");
            tile.id = i.toString();
            tile.classList.add("tile");
            if(r == 0 || r == 1){
                tile.classList.add("horizontal-line");
            }
            if(c == 0 || c == 1){
                tile.classList.add("vertical-line");
            }
            tile.addEventListener("click",setTile);
            document.getElementById("board").append(tile);
            i++;
        }
    }
}

function setTile(){
    if(GameOver){
        return;
    }

    let r;
    let c;
    if(this.id == "1"){
        r = 0;
        c = 0;
    }
    if(this.id == "2"){
        r = 0;
        c = 1;
    }
    if(this.id == "3"){
        r = 0;
        c = 2;
    }
    if(this.id == "4"){
        r = 1;
        c = 0;
    }
    if(this.id == "5"){
        r = 1;
        c = 1;
    }
    if(this.id == "6"){
        r = 1;
        c = 2;
    }
    if(this.id == "7"){
        r = 2;
        c = 0;
    }
    if(this.id == "8"){
        r = 2;
        c = 1;
    }
    if(this.id == "9"){
        r = 2;
        c = 2;
    }

    if(board[r][c] != ' '){
        return;
    }

    board[r][c] = currPlayer;
    this.innerText = currPlayer;

    if(currPlayer == player1){
        currPlayer = player2;
    }else{
        currPlayer = player1;
    }
    checkWinner();
}

function checkWinner(){
    for(let r = 0;r < 3;r++){
        if(board[r][0] == board[r][1] && board[r][1] == board[r][2] && board[r][0] != ' '){
            GameOver = true;
            if(board[r][0] == 'X'){
                alert("Congratulations! Player1 wins");
            }else{
                alert("Congratulations! Player2 wins");
            }
            return;
        }
    }

    for(let c = 0;c < 3;c++){
        if(board[0][c] == board[1][c] && board[1][c] == board[2][c] && board[0][c] != ' '){
            GameOver = true;
            if(board[0][c] == 'X'){
                alert("Congratulations! Player1 wins");
            }else{
                alert("Congratulations! Player2 wins");
            }
            return;
        }
    }

    if(board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != ' '){
            GameOver = true;
            if(board[0][0] == 'X'){
                alert("Congratulations! Player1 wins");
            }else{
                alert("Congratulations! Player2 wins");
            }
            return;
    }

    if(board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != ' '){
            GameOver = true;
            if(board[0][2] == 'X'){
                alert("Congratulations! Player1 wins");
            }else{
                alert("Congratulations! Player2 wins");
            }
            return;
    }

    for(let i = 0;i<3;i++){
        for(let j = 0;j<3;j++){
            if(board[i][j] == ' '){
                return;
            }
        }
    }
    alert("Draw!");

}