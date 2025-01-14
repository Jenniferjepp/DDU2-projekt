


function sumOfAll () {
    
    let allDivsArray = [];
    for (let div of allDivs) {
        allDivsArray.push(div.textContent);
    }

    let sum = 0;
    for (let i = 0; i < allDivsArray.length; i++) {
        sum += Number(allDivsArray[i]);
    }
    
    div1.textContent = sum;

}



let allMarkedArray = [];

function addClickEventToDivis() {

    for (let i = 0; i < allDivs.length; i++) {
        let div = allDivs[i];
        div.addEventListener("click", function () {
            div.style.backgroundColor = "darkseagreen";

            allMarkedArray.push(Number(div.textContent));

            let sumOfMarked = 0;
            for (let j = 0; j < allMarkedArray.length; j++) {
                sumOfMarked += allMarkedArray[j];
            }
            div2.textContent = sumOfMarked;
        });
    }
}




const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
div2.textContent = "-";

const divsBoxDOM = document.querySelector("#divs-box");
const resetButtonDOM = document.querySelector("#reset-button");



resetButtonDOM.addEventListener("click", function () {
    
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.backgroundColor = "";
    }
    
    div2.textContent = "-";
    allMarkedArray = [];
});



createButtonDOM.addEventListener("click", function() {
    sumOfAll();
    div2.textContent = "-";
    allMarkedArray = [];
    addClickEventToDivis();
});


window.addEventListener("load", function() {
    sumOfAll();
    addClickEventToDivis();
});