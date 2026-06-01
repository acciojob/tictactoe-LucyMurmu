//your JS code here. If required.
let player1 = "";
let player2 = "";
let currentPlayer = "X";
let gameOver = false;

const message = document.querySelector(".message");

document.getElementById("submit").addEventListener("click", () => {
    player1 = document.getElementById("player-1").value;
    player2 = document.getElementById("player-2").value;

    document.getElementById("player-form").style.display = "none";
    document.getElementById("game").style.display = "block";

    message.textContent = `${player1}, you're up`;
});

const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener("click", () => {
        if (cell.textContent !== "" || gameOver) return;

        cell.textContent = currentPlayer;

        if (checkWinner()) {
            const winner =
                currentPlayer === "X" ? player1 : player2;

            message.textContent =
                `${winner} congratulations you won!`;

            gameOver = true;
            return;
        }

        currentPlayer = currentPlayer === "X" ? "O" : "X";

        message.textContent =
            currentPlayer === "X"
                ? `${player1}, you're up`
                : `${player2}, you're up`;
    });
});

function checkWinner() {
    const board = [...cells].map(cell => cell.textContent);

    const wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    return wins.some(([a,b,c]) =>
        board[a] &&
        board[a] === board[b] &&
        board[b] === board[c]
    );
}

