let x=document.getElementById("grid_1");
let myGrid = [...Array(10)].map(e => Array(10));
function createboard() {

    for (let i = 0; i < 10; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        for (let j = 0; j < 10; j++) {
            let square = document.createElement("div");
            square.classList.add("grid-item");
            square.id = j;
            myGrid[i][j]=square;
            square.addEventListener("click",function(clickevent){
                clickevent.target.style.backgroundColor = "grey";
                console.log(myGrid);
            })
            box.appendChild(square);

        }
        x.appendChild(box);
    }
}



function resetboard(){
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            myGrid[i][j].backgroundColor = "aqua"
            
        }
        }
}
createboard();