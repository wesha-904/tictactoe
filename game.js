let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-game");
let msgCont = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],

];

const resetGame = () => {
    let turnO = true;
    enableB();
    msgCont.classList.add("hide");
    resetBtn.classList.remove("hide");
}

const enableB = () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    })
}


newGameBtn.addEventListener("click" , resetGame);
resetBtn.addEventListener("click" , resetGame);


boxes.forEach((box) =>{
    box.addEventListener("click",() =>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else {
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
        checkTie();
    });
    
});


const checkWinner = () => {
    let count = 0;
    for(pattern of winPatterns){
        
        if(boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[0]].innerText === boxes[pattern[2]].innerText ){
            if(boxes[pattern[0]].innerText === "O"){
                disableB();
                displayMsg("O");
                
            }

            else if(boxes[pattern[0]].innerText === "X"){
                disableB();
                displayMsg("X");
            }

        }
    }

    
};


const checkTie = () => {
    let count = 0;
    boxes.forEach((box) =>{
     
        if(box.innerText === "X" || box.innerText === "O"){
            count = count + 1;
        }

        else{
            count = 0;
        }

    });

    if(count == 9)
    {
        displaytie();
    }
    
};



const disableB = () => {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

const displayMsg = (winner) => {
    msg.innerText = `Winner is "${winner}"!`;
    msgCont.classList.remove("hide");
    resetBtn.classList.add("hide");
}

const displaytie = () => {
    msg.innerText = `It's a Tie! Play Again? `;
    msgCont.classList.remove("hide");
    resetBtn.classList.add("hide");
}


/*
    0 1 2
    3 4 5
    6 7 8 

    Winning patterns:

    Horizontal
    0 1 2,
    3 4 5,
    6 7 8 ,

    Vertical
    0 3 6,
    1 4 7,
    2 5 8,

    Diagonal
    0 4 8,
    2 4 6
*/
