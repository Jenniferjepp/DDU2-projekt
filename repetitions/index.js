const div1DOM = document.querySelector("#div1");
const div2DOM = document.querySelector("#div2");

createButtonDOM.addEventListener("click", function (){
    const allDivs = document.querySelectorAll(".divis");
    // Set() tar automatiskt bort dubletter!
    const allDivsSet = new Set();

    const numberCount = {};

    for (let div of allDivs) {
        const number = div.textContent;
        allDivsSet.add(number);


         // Räkna förekomsten av varje siffra och lägger till varje siffra som nyckel och ökar värdet för varje kopia.
         if (numberCount[number]) {
            numberCount[number]++;
        } else { // denna körs först för varje ny siffra eftersom att den ännu inte finns i objektet.
            numberCount[number] = 1;
        }
    }
    console.log(numberCount);
    // console.log(allDivsSet);

    // Hitta den största räknaren (dvs den eller de siffror som repeteras flest gånger)
    let maxCount = 0;
    let mostRepeatedNumbers = [];

    // loopar igenom objektet som innehåller alla nummer och hur många gånger vardera repeteras.
    for (let number in numberCount) {
        // [number] representerar värdet i den aktuella nycklen, som det brukar stå .number i annat fall. Om värdet är högre än maxCount ==>
        if (numberCount[number] > maxCount) {
            // så tilldelas maxCount det värdet.
            maxCount = numberCount[number];
            // och arrayen tilldelas endast den aktuella nycklen.
            mostRepeatedNumbers = [number];
            // annars om värdet är samma som maxCount, alltså vi har ett till nummer som repeteras samma antal gånger som det nummer som vi lagt till i arrayen så pushar vi in detta nummer i arrayen också!
        } else if (numberCount[number] === maxCount) {
            mostRepeatedNumbers.push(number);
        }
    }

    // loopar igenom både divarna och arrayen med mest repeterade nummer för att lägga till en blå bakgrundsfärg på dessa divar.
    for (let div of allDivs) {
        for (let number of mostRepeatedNumbers) {
            if (div.textContent == number) {
                div.style.backgroundColor = "skyblue";
            }
        }
        
    }
    

    const allDivsArray = Array.from(allDivsSet);
    
    div2DOM.textContent = allDivsArray.join(", ");
    div1DOM.textContent = `${mostRepeatedNumbers.join(", ")} (Repeated ${maxCount} times)`;
});