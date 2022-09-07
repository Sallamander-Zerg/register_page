let email = document.getElementById('field3');
let password = document.getElementById('field4');
let password2 = document.getElementById('field5');
let date = document.getElementById('field6');
let form = document.querySelector('.popup__form');
let name = document.getElementById('field1');
let surname = document.getElementById('field2');
function confermform(evt){
    evt.preventDefault(); 
    let bornedate = new Date(date.value);
    let nawday = new Date()
    let nameS = name.value;
    let surnameS = surname.value;
    let passwordl = password.value;
    let numdersinName = /\d/.test(nameS);
    let numdersinSurname = /\d/.test(surnameS);
    age=nawday.getFullYear()-bornedate.getFullYear();
    if((numdersinName === true)||(numdersinSurname === true)){
        alert("в имении и фамилии не длжнобыть чисел")
        return 0;
     }
    if(password.value !== password2.value){
       alert("пароли не совпадают")
       return 0
    }
    if( age < 18){
        alert("вам ещё рано заходить на даный сайт")
        return 0
     }
     if((password.value >= 8 )||(passwordl.length < 8)){
        alert("слишком короткий или длиный пароль минимальная длина 8")
        return 0
     }
    form.reset()
    
}
form.addEventListener('submit',confermform);