alert("Developed by Bhaskar Anand");
const buttons = document.querySelectorAll('.btn');
const screen = document.getElementById('screen');
let screenValue = '';
let percentBtn = document.getElementById('percent');
let powerBtn = document.getElementById('power');
let pie = document.getElementById('pie');
let factorial = document.getElementById('factorial');
let moreBtn = document.getElementById('moreID');
buttons.forEach(button => {
  button.addEventListener('click', each => {
    let currentValue = each.target.innerText;
    if (currentValue == '×') {
      currentValue = '*';
      screenValue = currentValue;
      screen.innerText += screenValue;
    } else if (currentValue == 'C') {
      screenValue = '';
      screen.innerText = screenValue;
    } else if (currentValue == '÷') {
      currentValue = '/';
      screenValue = currentValue;
      screen.innerText += screenValue;
    } else if (currentValue == '=') {
      try {
        if (screen.innerText.includes('√')) {
          screenArray = Array.from(screen.innerText);
          index = screenArray.indexOf('√');
          rootNumbers = screenArray.slice(index + 1, screenArray.length);
          screenValue = rootNumbers.join('');
          screen.innerText = Math.sqrt(screenValue);
        } else if (screen.innerText.includes("^")) {
          screenArray = screen.innerText.split("^");
          screen.innerText = Math.pow(screenArray[0], screenArray[1]);
        } else if (screen.innerText.includes('%')) {
          screenArray = screen.innerText.split('%');
          percent = screenArray[0];
          num = screenArray[1];
          screen.innerText = (percent / 100) * num;
        } else {
          screenValue = eval(screen.innerText);
          screen.innerText = screenValue;
        }
      } catch (error) {
        screen.innerText = error.name;
        console.log(error.message);
      }
    } else if (currentValue == '⌫') {
      if (screen.innerText.includes("Error") || screen.innerText.includes("defined") || screen.innerText.includes("number") || screen.innerText.includes("NaN")) {
        screen.innerText = "";
      } else {
        newArray = [...screen.innerText].slice(0, -1);
        screenValue = newArray.join('');
        screen.innerText = screenValue;
      }
    } else if (currentValue == 'roman') {
      screenValue = parseInt(screen.innerText);
      if (screen.innerText != '') {
        screen.innerText = romanize(screenValue);
      } else {
        screen.innerText = "No number to convert (╯︵╰)"
      }
    } else if (currentValue == '⦿') {
      moreBtn.innerText = "⊚";
      percentBtn.innerText = '%';
      powerBtn.innerText = "Xⁿ";
      pie.innerText = 'π';
      factorial.innerText = "X!";

    } else if (currentValue == "⊚") {
      moreBtn.innerText = "⦿";
      percentBtn.innerText = '÷';
      powerBtn.innerText = "×";
      pie.innerText = '-';
      factorial.innerText = "+";
    } else if (currentValue == "Xⁿ") {
      screen.innerText += "^";
    } else if (currentValue == 'π') {
      screen.innerText += '(3.14159)';
    } else if (currentValue == "X!") {
      if (screen.innerText == '') {
        screen.innerText = "0!"
      } else {
        screen.innerText = factorialOf(screen.innerText);
      }
    } else {
      screen.innerText += currentValue;
    }
  })
})


function romanize(number) {
  if (typeof(number) == 'number') {
    const romans = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    }
    let roman = '';
    for (let key in romans) {
      while (number >= romans[key]) {
        roman += key;
        number -= romans[key];
      }
    }
    return roman;
  } else {
    console.log('Not a number');
  }
}

function factorialOf(number) {
  let fac = 1;
  for (var i = 0; i < number; i++) {
    fac = fac * (i + 1);
  }

  if (number === 0 || number === 1) {
    return 1;
  } else {
    return fac;
  }
}
