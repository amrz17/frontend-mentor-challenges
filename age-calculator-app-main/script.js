const inputFields = document.querySelectorAll(".field input");
const labelFields = document.querySelectorAll(".field label");

const date = new Date();
console.log(date);
const inputDay = document.getElementById("input-days");
const inputMonth = document.getElementById("input-months");
const inputYear = document.getElementById("input-years");

const btnInput = document.getElementById("btn-input");

const error = document.querySelectorAll('.error-massage');

btnInput.addEventListener("click", (e) =>{
    e.preventDefault();

    const birthdays = inputDay.value;
    const birthmonth = inputMonth.value;
    const birthyears = inputYear.value;

    const currentYear = date.getFullYear();
    //Januari dimulai dari 0
    const currentMonth = date.getMonth() + 1; 
    const currentDay = date.getDate();
    

    if(inputMonth.value != ''){

        const resultDays = `${Math.abs(currentDay  - birthdays)}`;
        let resultMonths = `${Math.abs(currentMonth - birthmonth)}`;
        let resultYears = `${Math.abs(currentYear - birthyears)}`;

        if(currentMonth < birthmonth){
            resultYears--;
            resultMonths = (12 * 2 - birthmonth) - (currentMonth / 2) ;
        }

        const outPutYears = document.getElementById("value-years output");
        outPutYears.innerHTML = `${resultYears}`;

        const outPutMonths = document.getElementById("value-month output");
        outPutMonths.innerHTML = `${resultMonths}`;

        const outPutDays = document.getElementById("value-days output");
        outPutDays.innerHTML = `${resultDays}`;

       //Untuk membuat style kembali normal
        setTimeout(()=>{
            labelFields.forEach(labelFields => {
            labelFields.style.color = "hsl(0, 1%, 44%)";
        })
            inputFields.forEach(inputFields => {
            inputFields.style.borderColor = "hsl(0, 1%, 44%)";
        })
            error.forEach(error => {
            error.classList.add("hide");
        })
        },100)

    } else{
        //Style saat error blm di isi
        setTimeout(()=>{
            labelFields.forEach(labelFields => {
            labelFields.style.color = "hsl(0, 100%, 67%)";
        })
            inputFields.forEach(inputFields => {
            inputFields.style.borderColor = "hsl(0, 100%, 67%)";
        })
            error.forEach(error => {
            error.classList.remove("hide");
        })
        },100)
    }
})

function onKeyPressDay(event){
    // const errorLabel = document.querySelector(".days-label");
    const errorMassageDay = document.querySelector(".day");
    //Error massage input number with min & max 
    const currentValue = parseInt(inputDay.value + event.key);
    const minValue = 1 ; // Nilai minimum yang diinginkan
    const maxValue = 31; // Nilai maksimum yang diinginkan
    
    if (currentValue < minValue || currentValue > maxValue) {
        // errorMassageDay.classList.remove('hide');
        event.preventDefault();
    }
}
 
function onKeyPressMonth(event){
    // const errorMassageMonth = document.querySelector(".month");
    //Error massage input number with min & max 
    const currentValue = parseInt(inputMonth.value + event.key);
    const minValue = 1 ; // Nilai minimum yang diinginkan
    const maxValue = 12; // Nilai maksimum yang diinginkan
    if (currentValue < minValue || currentValue > maxValue) {
        // errorMassageMonth.classList.remove('hide');
        event.preventDefault();
    } 
}

function onKeyPressYear(event){
    const errorMassageYear = document.querySelector(".error-massage-year");

    const currentValue = parseInt(inputYear.value + event.key);
    const minValue = 1;
    const currentYear = date.getFullYear();
    const maxValue = currentYear; // Nilai maksimum yang diinginkan
    
    if (currentValue < minValue || currentValue > maxValue) {
        let labelYear = document.querySelector(".years-label")
        // labelYear.style.color = "hsl(0, 100%, 67%)";
        // inputYear.style.borderColor = "hsl(0, 100%, 67%)";
        errorMassageYear.classList.remove('hide');
        event.preventDefault();
    } else {
        errorMassageYear.classList.add('hide');
    }
}


