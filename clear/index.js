// hoover över div = BLÅ
// klicka på div = ORANGE
// mouse away från klickad div = RÖD


// button "fill cleared" klickas = färgerna försvinner + ny siffra i diven/ divarna
// klick på RÖD div = färgerna försvinner + ny siffra i diven/ divarna


const divsBoxDOM = document.querySelector("#divs-box");
const clearButtonDOM = document.querySelector("#clear-button");


// div blir BLÅ vid mouseover  /  röd vid spegelvändning
// använder eventobjektet som innehåller info om vilket element i griden som musen startade eventet.
divsBoxDOM.addEventListener("mouseover", (eventObj) => {
    // om eventobjektet innehåller klassen "divis" så ska färgen ändras.
    if (eventObj.target.classList.contains("divis")) {
        if (eventObj.target.style.backgroundColor === "tomato") {
            eventObj.target.style.backgroundColor = "sandybrown";
        } else {
            eventObj.target.style.backgroundColor = "skyblue";
        }
        
    }
});

// div blir ORANGE vid klick  /  blå vid spegelvändning
divsBoxDOM.addEventListener("click", function(eventObj) {
    if (eventObj.target.classList.contains("divis")) {
        if (eventObj.target.style.backgroundColor === "sandybrown") {
            eventObj.target.style.backgroundColor = "skyblue";

            // Generera ett nytt slumpmässigt nummer mellan 1 och 99
            const newRandomNumber = 1 + Math.floor(99 * Math.random());
            eventObj.target.textContent = newRandomNumber;
        } else {
            eventObj.target.style.backgroundColor = "sandybrown";
            eventObj.target.textContent = "";
            
        }
    }
});

// div blir RÖD vid mouseout  /  ursprungsfärg vid spegelvändning
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



// här ska eventet för knappen "clear-button" att ske
clearButtonDOM.addEventListener("click", function() {
    
    const allDivs = document.querySelectorAll(".divis");
    for (let i = 0; i < allDivs.length; i++) {
        if (allDivs[i].style.backgroundColor !== "") {
            allDivs[i].style.backgroundColor = "";

            // Generera ett nytt slumpmässigt nummer mellan 1 och 99
            const newNumber = 1 + Math.floor(99 * Math.random());
            allDivs[i].textContent = newNumber;
        }
    }
});



