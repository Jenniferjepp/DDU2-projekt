


function TwoThatAddsUp(randomNumbersArray) {
    const input = parseInt(addUpInputDOM.value);
    let found = false;

    allDivs.forEach(div => div.classList.remove("green"));
    

    for (let i = 0; i < randomNumbersArray.length; i++) {
        for (let j = i + 1; j < randomNumbersArray.length; j++) { 

            if (randomNumbersArray[i] + randomNumbersArray[j] === input) {
                allDivs[i].classList.add("green");
                allDivs[j].classList.add("green");
                found = true;
                break;
            }
        }
        if (found) break;
    }
}


const addUpInputDOM = document.querySelector("#add-up-input");
const adUpButtonDOM = document.querySelector("#ad-up-button");

addUpInputDOM.value = 179;


adUpButtonDOM.addEventListener("click", function() {
    if (allDivs.length > 0) {
        TwoThatAddsUp(randomNumbersArray);
    }
});
