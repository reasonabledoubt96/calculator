document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', calculator);
  });

const screen = document.querySelector('#screen')

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve,ms))
}

let opp;

function calculator(event) {
    if (opp == true) {
        screen.innerText = ''
    }
    opp = false
    const value = event.target.innerText
    if (value == 'AC') {
        screen.innerText = ''
    } else if (value == '=') {
        try {
            result = Function("return " + screen.innerText)();
            roundedResult = Math.round(result * 10**9) / 10**9
            screen.innerText = roundedResult
        }
        catch(err) {
            screen.innerText = 'Syntax error'
            opp = true
        }
    } else if (value == 'STR') {
        try {
            screen.innerText = Function("return " + screen.innerText)();
            store = screen.innerText
            screen.innerText += ' (stored)'
            opp = true
        }
        catch(err) {
            screen.innerText = 'Store error'
            opp = true
        }
    } else if (value == 'VAR') {
        screen.innerText += store;
    } else if (value == 'DEL') {
        storedText = screen.innerText
        screen.innerText = storedText.substring(0,storedText.length - 1)
    } else {
        screen.innerText += value
    }
};
