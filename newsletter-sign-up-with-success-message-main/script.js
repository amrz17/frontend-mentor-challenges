const inputBox = document.getElementById("email");
const email = document.getElementById("email-value");
const submitBtn = document.getElementById("submit-btn");

const cardSignUp = document.querySelector(".container");
const cardComplite = document.querySelector(".container-sub");

const compliteSignUp = document.getElementById("complete-sign-up");

submitBtn.addEventListener("click", function(e){
    e.preventDefault();
    if(inputBox.value === ''){
        const errorMassage = document.querySelector(".error-state");
        errorMassage.classList.remove("hide");
        inputBox.style.borderColor = "hsl(4, 100%, 67%)";
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
