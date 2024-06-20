const display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}
function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        alert('Invalid Input')
        clearDisplay();
    }
}
function clearDisplay(){
    display.value = '';
}
function backspace(){
    if(display.value == 'NaN'){
        clearDisplay();
    }
    display.value = display.value.substring(0, display.value.length - 1);
    
}