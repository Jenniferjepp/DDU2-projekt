

const divsBoxDOM = document.querySelector("#divs-box");
const copiesPDOM = document.querySelector("#copies-p");
const resetButtonDOM = document.querySelector("#reset-button");


divsBoxDOM.addEventListener("click", function (eventObj){
    if (eventObj.target.classList.contains("divis")) {
        eventObj.target.style.backgroundColor = "darkseagreen";


        const allDivs = document.querySelectorAll(".divis");
       
        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].style.backgroundColor = "";
        }

        const clickedNumber = eventObj.target.textContent;


        let copiesCounter = 0;
        
        for (let i = 0; i < allDivs.length; i++) {

            if (allDivs[i].textContent == clickedNumber) {

                allDivs[i].style.backgroundColor = "darkseagreen";
                copiesCounter++;
            }
        }
        
        copiesPDOM.textContent = `${copiesCounter} copies of the number ${eventObj.target.textContent}`;
    }
});



resetButtonDOM.addEventListener("click", function () {
    const allDivs = document.querySelectorAll(".divis");
        for (let i = 0; i < allDivs.length; i++) {
            allDivs[i].style.backgroundColor = "";
        }
    copiesPDOM.textContent = "Click on a number to find copies";
});



createButtonDOM.addEventListener("click", function () {
    copiesPDOM.textContent = "Click on a number to find copies";
});
