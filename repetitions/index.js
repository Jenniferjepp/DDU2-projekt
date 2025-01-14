const div1DOM = document.querySelector("#div1");
const div2DOM = document.querySelector("#div2");



function everythingOnThisSite () {
    
    const allDivsSet = new Set();
    const numberCount = {};

    for (let div of allDivs) {
        const number = div.textContent;
        allDivsSet.add(number);

        if (numberCount[number]) {
            numberCount[number]++;
        } else { 
            numberCount[number] = 1;
        }
    }


    let maxCount = 0;
    let mostRepeatedNumbers = [];

    
    for (let number in numberCount) {
    
        if (numberCount[number] > maxCount) {
           
            maxCount = numberCount[number];
            mostRepeatedNumbers = [number];
        
        } else if (numberCount[number] === maxCount) {
            mostRepeatedNumbers.push(number);
        }
    }

    
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
};



createButtonDOM.addEventListener("click", function () {
    everythingOnThisSite();
});


window.addEventListener("load", everythingOnThisSite);