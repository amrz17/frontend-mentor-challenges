const inputBox = document.getElementById("email");
const email = document.getElementById("email-value");
const submitBtn = document.getElementById("submit-btn");

const cardSignUp = document.querySelector(".container");
const cardComplite = document.querySelector(".container-sub");

const compliteSignUp = document.getElementById("complete-sign-up");

submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    if(inputBox.value === '' || !inputBox.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        const errorMassage = document.querySelector(".error-state");
        errorMassage.classList.remove("hide");
        inputBox.style.borderColor = "#ffe8e6";
        inputBox.style.backgroundColor ="#ffe8e6"; 
    } else{
        cardSignUp.classList.add("hide");
        cardComplite.classList.remove("hide");
        email.innerHTML = inputBox.value;
        console.log(email);
    }
})

compliteSignUp.addEventListener("click", function(e){
    e.preventDefault();
    cardSignUp.classList.remove("hide");
    cardComplite.classList.add("hide");
    inputBox.value = '';
})
