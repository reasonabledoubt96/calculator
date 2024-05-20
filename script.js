document.querySelectorAll('button').forEach((button) => {
    button.addEventListener('click', calculator);
  });

const screen = document.querySelector('#screen')
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
            roundedResult = Math.round(result * 10**8) / 10**8
            screen.innerText = roundedResult
        }
        catch(err) {
            screen.innerText = 'Syntax error'
            opp = true
        }
    } else if (value == 'STR') {
        try {
            if (typeof Function("return " + screen.innerText)() == 'number') {
                screen.innerText = Math.round((Function("return " + screen.innerText)()) * 10**5) / 10**5
                store = screen.innerText
                screen.innerText += ' (stored)'
            }
            opp = true
        }
        catch(err) {
            screen.innerText = 'Store error'
            opp = true
        }
    } else if (value == 'VAR') {
        if (screen.innerText.length < 20) {
            screen.innerText += store;
        }
    } else if (value == 'DEL') {
        storedText = screen.innerText
        screen.innerText = storedText.substring(0,storedText.length - 1)
    } else {
        if (screen.innerText.length < 20) {
            screen.innerText += value
        }
    }
};
