


function randomNumbers (min, max, amountNr) {
    let randomNumbersArray = [];
    for (let i = 0; i < amountNr; i++) {
        const aRandomNumber = 1 + Math.floor((max - min + 1) * Math.random());
        randomNumbersArray.push(aRandomNumber);
    }
    return randomNumbersArray;
}


function createDivs (randomNumbersArray) {
    divsBox.innerHTML = "";
    
    for (let i = 0; i < randomNumbersArray.length; i++) {
        let divis = document.createElement("div");
        divis.textContent = randomNumbersArray[i];
        divis.classList.add("divis");
        divsBox.appendChild(divis);
    }

    allDivs = document.querySelectorAll(".divis");
}



const homeDiv = document.createElement("div");
homeDiv.className = "link-box";
const homeButton = document.createElement("a");
homeButton.href = "../index.html"
homeButton.textContent = "Home";
homeButton.className = "links";

document.body.prepend(homeDiv);
homeDiv.prepend(homeButton);



const divsBox = document.querySelector("#divs-box");
const howManyInputDOM = document.querySelector("#how-many-input");
const createButtonDOM = document.querySelector("#create-button");


howManyInputDOM.value = 95;




createButtonDOM.addEventListener("click", function() {
    let randomNumbersArray = randomNumbers(1, 99, parseInt(howManyInputDOM.value));
    createDivs(randomNumbersArray);
});


document.addEventListener("DOMContentLoaded", function() {
    randomNumbersArray = randomNumbers(1, 99, parseInt(howManyInputDOM.value));
    createDivs(randomNumbersArray);
});




