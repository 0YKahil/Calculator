/*
 * DISCLAIMER: This program was made to help learn JS, CSS, and HTML
 * and the code was not fully created by me. I used this video:
 * https://www.youtube.com/watch?v=I5kj-YsmWjM to guide me 
 * as I created the program.
 * 
 * Calculator Program
 */

const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    }
    catch(error) {
        display.value = "ERROR";
    }
    
}