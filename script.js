let cubes = document.querySelectorAll(".cube");

let turn = "X";
let isGameOver = false;

cubes.forEach(e =>{
    e.innerHTML = ""
    e.addEventListener("click", ()=>{
        if(!isGameOver && e.innerHTML === ""){
            e.innerHTML = turn;
            cheakWin();
            cheakDraw();
            changeTurn();
        }
    })
})

function changeTurn(){
    if(turn === "X"){
        turn = "O";
        document.querySelector(".bg").style.left = "80px";
    }
    else{
        turn = "X";
        document.querySelector(".bg").style.left = "0";
    }
}

function cheakWin(){
    let winConditions = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ]
    for(let i = 0; i<winConditions.length; i++){
        let v0 = cubes[winConditions[i][0]].innerHTML;
        let v1 = cubes[winConditions[i][1]].innerHTML;
        let v2 = cubes[winConditions[i][2]].innerHTML;

        if(v0 != "" && v0 === v1 && v0 === v2){
            isGameOver = true;
            document.querySelector("#results").innerHTML = turn + " win";
            document.querySelector("#play").style.display = "inline"

            for(j = 0; j<3; j++){
                cubes[winConditions[i][j]].style.backgroundColor = "#08D9D6"
                cubes[winConditions[i][j]].style.color = "#000"
            }
        }
    }
}

function cheakDraw(){
    if(!isGameOver){
        let isDraw = true;
        cubes.forEach(e =>{
            if(e.innerHTML === "") isDraw = false;
        })

        if(isDraw){
            isGameOver = true;
            document.querySelector("#results").innerHTML = "Draw";
            document.querySelector("#play").style.display = "inline"
        }
    }
}

document.querySelector("#play").addEventListener("click", ()=>{
    isGameOver = false;
    turn = "X";
    document.querySelector(".bg").style.left = "0";
    document.querySelector("#results").innerHTML = "";
    document.querySelector("#play").style.display = "none";

    cubes.forEach(e =>{
        e.innerHTML = "";
        e.style.removeProperty("background-color");
        e.style.color = "black"
    })
})