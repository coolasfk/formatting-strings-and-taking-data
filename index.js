const fieldName = document.querySelector(".form__input--name");
const fieldSurname = document.querySelector(".form__input--surname");
const fieldAge = document.querySelector(".form__input--age");
const btn = document.querySelector(".form__button")
const form = document.querySelector(".form")

class FormatData {
    constructor(names, surname, age){
        this.names = names;
        this.surname = surname;
        this.age = age;
    }

    formatDataFunc(){
        let newName = this.names.toLowerCase();
        let newNameNoFirstLetter = newName.substring(1);
        let firstCapitalLetterName = this.names[0].toUpperCase();
        let newNameFormatted = `${firstCapitalLetterName}${newNameNoFirstLetter}`

        let newSurname = this.surname.toLowerCase();
        let newSurnameNoFirstLetter = newSurname.substring(1);
        let firstCapitalLetterSurname = this.surname[0].toUpperCase();
        let newSurnameFormatted = `${firstCapitalLetterSurname}${newSurnameNoFirstLetter}`
        let age = this.age

        return `Hello I am ${newNameFormatted} ${newSurnameFormatted}. I am ${age} years old.`
    }
}


let nameTextField = fieldName.value;
let surnameTextField = fieldSurname.value;
let ageTextField = fieldAge.value;



const newData = new FormatData (nameTextField, surnameTextField, ageTextField)

const formattedData = newData.formatDataFunc()

    form.addEventListener('submit', function(e) {
 
    e.preventDefault();
  
    const formData = new FormData(form);  
   
    fetch('https://httpbin.org/post', {
    method: 'POST',
    body: newData.formatDataFunc()
    })
    .then(res => res.json())
    .then(data => console.log(data))  
})

