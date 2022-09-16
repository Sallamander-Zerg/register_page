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
    let numdersinName = /^[а-яА-Я]+$/.test(nameS);
    let numdersinSurname = /^[а-яА-Я]+$/.test(surnameS);
    let testPassword = /(?=.*[A-ZА-Я])/.test(passwordl);
    let testPassword2 = /(?=.*[0-9])/.test(passwordl);
    age=nawday.getFullYear()-bornedate.getFullYear();
    if((numdersinName === false)||(numdersinSurname === false)){
        alert("в имении и фамилии не должы содержать постароние символы")
        return 0;
     }
     if((testPassword2 === false)||(testPassword === false)){
      alert("пароль должен содержать хотябы одну большую букву и хотябы одну цыфру")
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
    form.reset()
    
}
form.addEventListener('submit',confermform);