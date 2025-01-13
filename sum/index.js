
// funktion som räknar ut summan av alla nummer i divarna + skriver ut den i div1.
function sumOfAll () {
    const allDivs = document.querySelectorAll(".divis");

    // gör om nodelistan med alla nummer till en array.
    let allDivsArray = [];
    for (let div of allDivs) {
        allDivsArray.push(div.textContent);
    }

    // loopar igenom hela arrayen och för varje itteration plussas nummret med det som redan finns i "sum".
    let sum = 0;
    for (let i = 0; i < allDivsArray.length; i++) {
        sum += Number(allDivsArray[i]);
    }
    // skriver ut den räknade summan i div1.
    div1.textContent = sum;
}



const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
div2.textContent = "-";

const divsBoxDOM = document.querySelector("#divs-box");
const resetButtonDOM = document.querySelector("#reset-button");



let allMarkedArray = [];
// funktion för att kunna skapa ett klick event på divarna utan eventobjektet
function addClickEventToDivis() {
let allDivs = document.querySelectorAll(".divis");
    for (let i = 0; i < allDivs.length; i++) {
        let div = allDivs[i]; // Skapar blockscope
        div.addEventListener("click", function () {
            div.style.backgroundColor = "darkseagreen";

            // pushar in alla markerade nummer i en array.
            allMarkedArray.push(Number(div.textContent));

            let sumOfMarked = 0;
            for (let j = 0; j < allMarkedArray.length; j++) {
                sumOfMarked += allMarkedArray[j];
            }
            div2.textContent = sumOfMarked;
        });
    }
}




/*
let allMarkedArray = [];
// när någon div i containern "divsBox" klickas ==> de får grön backgrundsfärg.
divsBoxDOM.addEventListener("click", function (eventObj) {
    if (eventObj.target.classList.contains("divis")) {
        eventObj.target.style.backgroundColor = "darkseagreen";
    }
    
    // pushar in alla markerade nummer i en array.
    allMarkedArray.push(Number(eventObj.target.textContent));


    // loopar igenom arrayen med alla markerade nummer och adderar dessa, summan sparas i variabeln "sumOfMarked" och det blir div2:s textcontent.
    let sumOfMarked = 0;
    for (let i = 0; i < allMarkedArray.length; i++) {
        sumOfMarked += allMarkedArray[i];
    }
    div2.textContent = sumOfMarked;
});
*/

// när "reset"-knappen klickas
resetButtonDOM.addEventListener("click", function () {
    const allDivs = document.querySelectorAll(".divis");
    // bakgrundsfärgen går tillbaks till standard som anges i css.
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.backgroundColor = "";
    }
    // text i div2 går tillbaks till "-"
    div2.textContent = "-";
    allMarkedArray = [];
});


// när "create"-kanppen klickas ==> funtionen som skriver ut summan anropas.
createButtonDOM.addEventListener("click", function() {
    sumOfAll();
    div2.textContent = "-";
    allMarkedArray = [];
    addClickEventToDivis();
});

// funktionen som räknar ihop och skriver ut den anropas inte förens divarna är skapade.
window.addEventListener("load", function() {
    sumOfAll();
    addClickEventToDivis();
});