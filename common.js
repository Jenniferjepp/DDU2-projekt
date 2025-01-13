// när användaren skriver in en siffra och klickar på "create" buttonen så ska divar med random siffror skapas på sidan
// skapa en funktion för att få fram random siffror mellan 1-99 ALLA NUMMER SKA KOMMAS ÅT inte bara ett random nummer --> AKA en loop?
// skapa en loop för att skapa divar och fyll dem med de random nummerna


// funktion som returnerar en array med random siffror mellan 1-99, den blir så lång som värdet i input-fältet.


let divisArray = [];
let randomNumbersArray = [];

let allDivis = [];


function randomNumbers (min, max, amountNr) {
    randomNumbersArray = [];
    for (let i = 0; i < amountNr; i++) {
        const aRandomNumber = 1 + Math.floor((max - min + 1) * Math.random());
        randomNumbersArray.push(aRandomNumber);
    }
    return randomNumbersArray;
}

// funktion som skapar så många divar som anges i input-fältet och använder argumentet AKA arrayen vi skapade i funktionen ovan`s olika indexar som textcontent.
function createDivs (randomNumbersArray) {
    divsBox.innerHTML = "";
    divisArray = [];
    for (let i = 0; i < randomNumbersArray.length; i++) {
        let divis = document.createElement("div");
        divis.textContent = randomNumbersArray[i];
        divis.classList.add("divis");
        divsBox.appendChild(divis);
        divisArray.push(divis);
    }
    // Uppdatera allDivis efter att divarna har skapats
    allDivis = document.querySelectorAll(".divis");
    
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



// Sätt standardvärde till 95 när sidan laddas
// value är en egentskap till input-elementet som i detta fall sätter texten i inputfältet till att vara 95 by default, när texten i rutan ändras gäller detta ej längre tills man laddar om sidan.
howManyInputDOM.value = 95;


// event som anropar funktionen som skapar divar när knappen create klickas på.
createButtonDOM.addEventListener("click", function() {
    randomNumbersArray = randomNumbers(1, 99, parseInt(howManyInputDOM.value)); // parseInt konverterar strängen input värdet till att actually vara en siffra
    createDivs(randomNumbersArray);
});



// Event för att skapa divar direkt när sidan laddas
document.addEventListener("DOMContentLoaded", function() {
    const initialAmount = parseInt(howManyInputDOM.value);  // Använd värdet från inputfältet som initial amount
    randomNumbersArray = randomNumbers(1, 99, initialAmount); // Skapa array med random nummer
    createDivs(randomNumbersArray); // Skapa divarna med dessa siffror
});


