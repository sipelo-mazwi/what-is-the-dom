const theButton = document.querySelector(".theButton");
const theMessage = document.querySelector(".theMessage");
const theName = document.querySelector(".theName");
const theDate = document.querySelector(".theDate");

theButton.addEventListener("click", function(){
    const username = theName.value;
    const currentDate = theDate.value;

    theMessage.classList.remove("orange")
    theMessage.classList.remove("blue")
    theMessage.classList.remove("green")

    const theCurrentColor = document.querySelector(".theColor:checked")
    theMessage.classList.add(theCurrentColor.value);
    

    if (username === "") {
        theMessage.innerHTML = "Please enter your name!"
    } else {
        let message = "Hi, " + username + " You pressed the button";

        if (currentDate !== "") {
            message += " on " + currentDate
        }

        theMessage.innerHTML = message;
    }

    

    // if (theMessage.innerHTML === "" ){
    //     theMessage.innerHTML = "You clicked on the button!"
    // } else {
    //     theMessage.innerHTML = "";
    // }
    
});