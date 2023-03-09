let email = document.getElementById('field3');
let password = document.getElementById('field4');
let password2 = document.getElementById('field5');
let date = document.getElementById('field6');
let form = document.querySelector('.popup__form');
let errorP = document.querySelector('#errorP');
let errorD = document.querySelector('#errorD');
function confermform(evt){
    evt.preventDefault(); 
    let bornedate = new Date(date.value);
    let nawday = new Date()
    age=nawday.getFullYear()-bornedate.getFullYear();
    if(password.value !== password2.value){
        errorP.textContent = "пароли не совпадают";
        errorP.classList.add('.popup__field-error_active');
       return 0
    }
    if( age < 18){
        errorD.textContent = "вам нет 18";
        errorD.classList.add('.popup__field-error_active');
        return 0
     }
    form.reset()
    
}
form.addEventListener('submit',confermform);