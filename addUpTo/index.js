// loopa boxarna
// loopa en gång till med en inre loop
// if första boxen + andra boxen = input.value
// så ska dessa få klassen green

// event klick på knappen "find two cells thet add up to"
// då körs funktionen


function TwoThatAddsUp(randomNumbersArray) {
    const input = parseInt(addUpInputDOM.value);  // Hämta värdet från inputfältet
    let found = false;

    // tar bort den gröna bakgrundsfärgen varje gång ett nytt input värde anges
    allDivis.forEach(div => div.classList.remove("green"));

    // Gå igenom alla par av divar
    for (let i = 0; i < randomNumbersArray.length; i++) {
        for (let j = i + 1; j < randomNumbersArray.length; j++) {  // För att undvika att jämföra samma div flera gånger
            if (randomNumbersArray[i] + randomNumbersArray[j] === input) {
                // Markera de två divarna som "green"
                allDivis[i].classList.add("green");
                allDivis[j].classList.add("green");
                found = true;
                break;
            }
        }
        if (found) break;  // för vi vill avsluta loopen när vi hittat de 2 första som tillsammans blir summan av input värdet, annars hittar den alla möjliga.
    }
}

const addUpInputDOM = document.querySelector("#add-up-input");
const adUpButtonDOM = document.querySelector("#ad-up-button");

// value är en egentskap till input-elementet som i detta fall sätter texten i inputfältet till att vara 179 by default, när texten i rutan ändras gäller detta ej längre tills man laddar om sidan.
addUpInputDOM.value = 179;

// Event när knappen "Find Two Cells That Add Up" klickas på
adUpButtonDOM.addEventListener("click", function() {
    // Vänta tills divarna är skapade innan vi försöker hitta matchande par
    if (allDivis.length > 0) {
        TwoThatAddsUp(randomNumbersArray);
    }
});



// Vi uppdaterar allDivis direkt efter divarna skapats i createDivs (se common.js)
