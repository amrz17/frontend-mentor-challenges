const inputDay = document.getElementById("input-day");
const inputMonth = document.getElementById("input-month");
const inputYear = document.getElementById("input-years");
const btnInput = document.getElementById("btn-input");

const error = document.querySelector('.error-massage');
btnInput.addEventListener("click", (e) =>{
    e.preventDefault();
    if(inputMonth.value === ''){
        error.classList.remove('hide');
    } else{
        const days = inputDay.value;
        const month = inputMonth.value;
        const years = inputDay.value
        console.log(days, month, years);

        error.classList.add('hide');

    }
})

