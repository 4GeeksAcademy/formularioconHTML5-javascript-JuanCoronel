

function formValidation(event) {
    event.preventDefault();

    let cardNumber = document.getElementById("inputCardNumber").value;
    let cvc = document.getElementById("inputCVC").value;
    let amount = document.getElementById("inputAmount").value;
    let firstName = document.getElementById("inputFirstName").value;
    let lastName = document.getElementById("inputLastName").value;
    let city = document.getElementById("inputCity").value;
    let state = document.getElementById("inputState").value;
    let zip = document.getElementById("inputZip").value;
    let textarea = document.getElementById ("message-text").value;
    let alert = document.getElementById("alert")

    if (cardNumber === "") {
        document.getElementById("inputCardNumber").style.backgroundColor = "red";
        alert.style.visibility = 'visible';
    }

    if (cvc === "") {
        document.getElementById("inputCVC").style.backgroundColor = "red";
        alert.style.visibility = 'visible';
    }

    if (amount === "") {
        document.getElementById("inputAmount").style.backgroundColor = "red";
        alert.style.visibility = 'visible';
    }

    if (firstName === "") {
        document.getElementById("inputFirstName").style.backgroundColor = "red";
        alert.style.visibility = 'visible';
    }

    if (lastName === "") {
        document.getElementById("inputLastName").style.backgroundColor = "red";
        alert.style.visibility = 'visible';
    }

    if (city === "") {
        document.getElementById("inputCity").style.backgroundColor = "red";
        alert.style.visibility = 'visible';
    }

    if (state === "Choose...") {
        document.getElementById("inputState").style.backgroundColor = "red";
        alert.style.visibility = 'visible';
    }


    if (zip === "") {
        document.getElementById("inputZip").style.backgroundColor = "red";
        alert.style.visibility = 'visible';
    }

    if (textarea === "") {
        document.getElementById("message-text").style.backgroundColor = "red";
        alert.style.visibility = 'visible';
    }
    
 if (alert ==="") {
    document.getElementById("alert").style.visibility = 'visible'; 
 }

}



