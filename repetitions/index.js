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
    

    const allDivsArray = Array.from(allDivsSet);
    
    console.log(allDivsArray);
    div2DOM.textContent = allDivsArray.join(", ");
});