let startPlay = document.querySelector(".start-play")
let turnOfPlayer = document.querySelector('.container p')
let connectFourGameDivs = document.querySelectorAll('.container .connect-four-game .connect div')
let win =  document.querySelector('.win')
let count = 0;
// 2D Array
const winningArrays = [
    [0, 1, 2, 3],
    [41, 40, 39, 38],
    [7, 8, 9, 10],
    [34, 33, 32, 31],
    [14, 15, 16, 17],
    [27, 26, 25, 24],
    [21, 22, 23, 24],
    [20, 19, 18, 17],
    [28, 29, 30, 31],
    [13, 12, 11, 10],
    [35, 36, 37, 38],
    [6, 5, 4, 3],
    [0, 7, 14, 21],
    [41, 34, 27, 20],
    [1, 8, 15, 22],
    [40, 33, 26, 19],
    [2, 9, 16, 23],
    [39, 32, 25, 18],
    [3, 10, 17, 24],
    [38, 31, 24, 17],
    [4, 11, 18, 25],
    [37, 30, 23, 16],
    [5, 12, 19, 26],
    [36, 29, 22, 15],
    [6, 13, 20, 27],
    [35, 28, 21, 14],
    [0, 8, 16, 24],
    [41, 33, 25, 17],
    [7, 15, 23, 31],
    [34, 26, 18, 10],
    [14, 22, 30, 38],
    [27, 19, 11, 3],
    [35, 29, 23, 17],
    [6, 12, 18, 24],
    [28, 22, 16, 10],
    [13, 19, 25, 31],
    [21, 15, 9, 3],
    [20, 26, 32, 38],
    [36, 30, 24, 18],
    [5, 11, 17, 23],
    [37, 31, 25, 19],
    [4, 10, 16, 22],
    [2, 10, 18, 26],
    [39, 31, 23, 15],
    [1, 9, 17, 25],
    [40, 32, 24, 16],
    [9, 17, 25, 33],
    [8, 16, 24, 32],
    [11, 17, 23, 29],
    [12, 18, 24, 30],
    [1, 2, 3, 4],
    [5, 4, 3, 2],
    [8, 9, 10, 11],
    [12, 11, 10, 9],
    [15, 16, 17, 18],
    [19, 18, 17, 16],
    [22, 23, 24, 25],
    [26, 25, 24, 23],
    [29, 30, 31, 32],
    [33, 32, 31, 30],
    [36, 37, 38, 39],
    [40, 39, 38, 37],
    [7, 14, 21, 28],
    [8, 15, 22, 29],
    [9, 16, 23, 30],
    [10, 17, 24, 31],
    [11, 18, 25, 32],
    [12, 19, 26, 33],
    [13, 20, 27, 34],
]


startPlay.onclick = function(){
    startPlay.remove();
}

// ---------------------------------


let arr = [];
connectFourGameDivs.forEach(div=>{
    div.onclick = function(){
        if(div.className == ""){
            openTheClick(div.id)
        }
        if(div.className !== ""){
                return false;
        }
        if(turnOfPlayer.className === "player-one"){
            div.classList.add("red")
            turnOfPlayer.className = "player-two"
            turnOfPlayer.innerHTML = "PLAYER 2'S TURN"
        }else{
            div.classList.add("yellow")
            turnOfPlayer.className = "player-one"
            turnOfPlayer.innerHTML = "PLAYER 1'S TURN"
        }
        winner()
        count++
    }
    function openTheClick(num){
    let numberOfId = Number(num) + 7;
    connectFourGameDivs.forEach(div=>{
            if(div.id === String(numberOfId)){
            div.classList.remove('close')
            }
        })
    }
})
function winner(){
    for(let i = 0 ; i < winningArrays.length ; i++){
        let n1 = connectFourGameDivs[winningArrays[i][0]]
        let n2 = connectFourGameDivs[winningArrays[i][1]]
        let n3 = connectFourGameDivs[winningArrays[i][2]]
        let n4 = connectFourGameDivs[winningArrays[i][3]]
        if(
        n1.classList.contains('red') && 
        n2.classList.contains('red') && 
        n3.classList.contains('red') && 
        n4.classList.contains('red')
        ){
            document.querySelector(".winner").style.display = "flex";
            document.querySelector(".winner div").innerHTML = "The Player One Is Win"
            ++document.querySelector(".card-results-player-one .result").innerHTML
            count = 0
        }else if(
            n1.classList.contains('yellow') && 
            n2.classList.contains('yellow') && 
            n3.classList.contains('yellow') && 
            n4.classList.contains('yellow')
            ){
            document.querySelector(".winner").style.display = "flex";
            document.querySelector(".winner div").innerHTML = "The Player Two Is Win"
            ++document.querySelector(".card-results-player-two .result").innerHTML
            count = 0
        }else if(count == 41){
            document.querySelector(".winner").style.display = "flex";
            document.querySelector(".winner div").innerHTML = "The game ended in a draw"
            count = 0
        }
        }
        document.querySelector(".winner button").onclick = function(){
            document.querySelector(".winner").style.display = "none";
            connectFourGameDivs.forEach((div) => {
                div.className = "close";
                if(div.id <= 7){
                    div.className = "";
                }
            })
            
    }
}