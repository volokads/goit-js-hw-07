const inputRef = document.querySelector('#validation-input')
const dataSetLength = Number(inputRef.dataset.length);
console.log(dataSetLength);
const changeBorder = (event) =>{

let inputLength = event.target.value.length
inputLength === dataSetLength ? event.target.classList.remove('invalid') &
event.target.classList.add('valid') :  event.target.classList.add('invalid')
}
inputRef.addEventListener('blur',changeBorder)
