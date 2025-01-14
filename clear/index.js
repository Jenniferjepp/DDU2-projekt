


const divsBoxDOM = document.querySelector("#divs-box");
const clearButtonDOM = document.querySelector("#clear-button");



divsBoxDOM.addEventListener("mouseover", (eventObj) => {
    
    if (eventObj.target.classList.contains("divis")) {
        if (eventObj.target.style.backgroundColor === "tomato") {
            eventObj.target.style.backgroundColor = "sandybrown";
        } else {
            eventObj.target.style.backgroundColor = "skyblue";
        }
    }
});



divsBoxDOM.addEventListener("click", function(eventObj) {

    if (eventObj.target.classList.contains("divis")) {
        if (eventObj.target.style.backgroundColor === "sandybrown") {
            eventObj.target.style.backgroundColor = "skyblue";

            const newRandomNumber = 1 + Math.floor(99 * Math.random());
            eventObj.target.textContent = newRandomNumber;

        } else {
            eventObj.target.style.backgroundColor = "sandybrown";
            eventObj.target.textContent = "";
        }
    }
});



divsBoxDOM.addEventListener("mouseout", function(eventObj){

    if (eventObj.target.classList.contains("divis")) {
        if (eventObj.target.style.backgroundColor === "skyblue") {
            eventObj.target.style.backgroundColor = "";
        } else {
            eventObj.target.style.backgroundColor = "tomato";
            eventObj.target.textContent = "";
        }
    }
});



clearButtonDOM.addEventListener("click", function() {
    
    for (let i = 0; i < allDivs.length; i++) {
        if (allDivs[i].style.backgroundColor !== "") {
            allDivs[i].style.backgroundColor = "";

            const newNumber = 1 + Math.floor(99 * Math.random());
            allDivs[i].textContent = newNumber;
        }
    }
});



