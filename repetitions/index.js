const div1DOM = document.querySelector("#div1");
const div2DOM = document.querySelector("#div2");

createButtonDOM.addEventListener("click", function (){
    const allDivs = document.querySelectorAll(".divis");
    // Set() tar automatiskt bort dubletter!
    const allDivsSet = new Set();
    for (let div of allDivs) {
        number = div.textContent;
        allDivsSet.add(number);
        console.log(allDivsSet);
    }

    const allDivsArray = Array.from(allDivsSet);
    
    console.log(allDivsArray);
    div2DOM.textContent = allDivsArray.join(", ");
});