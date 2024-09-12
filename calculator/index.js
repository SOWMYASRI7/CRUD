function appendToDisplay(value) {  
    document.getElementById('display').value += value;  
}  

function clearDisplay() {  
    document.getElementById('display').value = '';  
}  

function calculateResult() {  
    const display = document.getElementById('display');  
    try {  
        display.value = eval(display.value);  
    } catch (error) {  
        display.value = 'Error';  
    }  
}  
function clearDisplay() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function deleteLastCharacter() {
    const display = document.getElementById('display');
    // Check if the display is not empty before deleting
    if (display.value.length > 0) {
        display.value = display.value.slice(0, -1);
    }
}

function calculateResult() {
    try {
        // Evaluate the expression and display the result
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (e) {
        // Display 'Error' if the expression is invalid
        document.getElementById('display').value = 'Error';
    }
}
