function calculateNums() {
    let firstNum = parseInt(document.getElementById('calcFirst').value);
    let secondNum = parseInt(document.getElementById('calcSecond').value);
    let operator = document.getElementById('operators').value;

    let result;

    switch(operator) {
        case '+':
            result = firstNum + secondNum;
        break;
        case '-':
            result = firstNum - secondNum; 
        break;
        case '*':
        result = firstNum * secondNum;
        break;
        case '/' :
            if(secondNum === 0) {
            result = 'Cannot divide by zero';
            }
            else {
                result = firstNum / secondNum

            }
        break;
        default:
            result = 'Invalid operator';
            break;
          
 
    }
    document.getElementById('result').innerHTML = 'Result: ' + result;

    document.getElementById('calcFirst').value = "";
    document.getElementById('calcSecond').value = "";

      

}