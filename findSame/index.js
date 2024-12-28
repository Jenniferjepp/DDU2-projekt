

const divsBoxDOM = document.querySelector("#divs-box");
const copiesPDOM = document.querySelector("#copies-p");
const resetButtonDOM = document.querySelector("#reset-button");


divsBoxDOM.addEventListener("click", function (eventObj){
    if (eventObj.target.classList.contains("divis")) {
        eventObj.target.style.backgroundColor = "darkseagreen";

        const allDivs = document.querySelectorAll(".divis");
        // loopar igenom alla divar för att återställa alla till sin ursprungsfärg som anges i CSS. "" tar bort stilen som anges i js. Så när en ny div klickas återställa alla divar 
        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].style.backgroundColor = ""; // Ursprunglig färg
        }

        const clickedNumber = eventObj.target.textContent;

        // skapar en counter för hur många kopior som finns.
        let copiesCounter = 0;
        // loopar igenom nodelistan med alla divar som har klassen .divis.
        for (let i = 0; i < allDivs.length; i++) {
            // om den aktuella diven i listans textContent == det klickade nummret ==>
            if (allDivs[i].textContent == clickedNumber) {
                allDivs[i].style.backgroundColor = "darkseagreen";
                // countern för kopior till den klickade diven ökas med 1.
                copiesCounter++;
            }
        }
        
        // ändrar <p> textContent
        copiesPDOM.textContent = `${copiesCounter} copies of the number ${eventObj.target.textContent}`;
    }
});

// när "reset"-knappen klickas
resetButtonDOM.addEventListener("click", function () {
    const allDivs = document.querySelectorAll(".divis");
        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].style.backgroundColor = ""; // Ursprunglig färg
        }
    copiesPDOM.textContent = "Click on a number to find copies";
});

// när "create"- knappen klickas
createButtonDOM.addEventListener("click", function () {
    copiesPDOM.textContent = "Click on a number to find copies";
});

const allDivs = document.querySelectorAll(".divis");
console.log(allDivs)