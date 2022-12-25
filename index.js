// Input 

const email_Input = document.querySelector("#email_Input");
const email_reminder = document.querySelector("#email_reminder");
const passoword_Input = document.querySelector("#password_Input");
const password_reminder = document.querySelector("#password_reminder");
const signin_btn = document.querySelector("#signin_btn");
console.log(email_reminder);
signin_btn.addEventListener("click", function(){
    if (email_Input.value == ""){
        email_Input.classList.add("border-bottom", "border-3", "border-primary");
        email_reminder.innerHTML = "Please enter a valid email or phone number";
    }
    if(passoword_Input.value == ""){
        passoword_Input.classList.add("border-bottom", "border-3", "border-primary");
        password_reminder.innerHTML = "Your password must contain between 4 an 60 characters.";
    }
        
})