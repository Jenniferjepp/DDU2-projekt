
const div2 = document.querySelector("#div2");
div2.textContent = "-";

// funktion som räknar ut summan av alla nummer i divarna





const divsBoxDOM = document.querySelector("#divs-box");
const resetButtonDOM = document.querySelector("#reset-button");

divsBoxDOM.addEventListener("click", function (eventObj) {
    if (eventObj.target.classList.contains("divis")) {
        eventObj.target.style.backgroundColor = "darkseagreen";
    }
});

// när "reset"-knappen klickas
resetButtonDOM.addEventListener("click", function () {
    const allDivs = document.querySelectorAll(".divis");
    // bakgrundsfärgen går tillbaks till standard som anges i css.
    for (let i = 0; i < allDivs.length; i++) {
        allDivs[i].style.backgroundColor = "";
    }
    // text i div2 går tillbaks till "-"
    
});

// click event på divar

