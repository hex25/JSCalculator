  
const display = document.getElementById('display');
const actions = ['+','-','*','/'];

document.getElementById('clear').onclick = function() {
    display.innerHTML = '0';
    document.getElementById('screen-result').innerHTML = '0';
  }
  
document.getElementById('equals').onclick = function() {
    if (actions.indexOf(display.innerHTML[display.innerHTML.length-1]) === -1) {
        document.getElementById('screen-result').innerHTML = eval(display.innerHTML);
        display.innerHTML = eval(display.innerHTML);
    } else {
        let result = display.innerHTML.slice(0,-1);
        document.getElementById('screen-result').innerHTML = eval(result);
        display.innerHTML = eval(result);
    }
  }

  document.getElementById(`one`).onclick = function() {
    if (display.innerHTML === '0'){
        display.innerHTML = '1';
    } else {
    display.innerHTML = display.innerHTML + '1';
    }
}
document.getElementById(`two`).onclick = function() {
    if (display.innerHTML === '0'){
        display.innerHTML = '2';
    } else {
    display.innerHTML = display.innerHTML + '2';
    }
}
document.getElementById(`three`).onclick = function() {
    if (display.innerHTML === '0'){
        display.innerHTML = '3';
    } else {
    display.innerHTML = display.innerHTML + '3';
    }
}
document.getElementById(`four`).onclick = function() {
    if (display.innerHTML === '0'){
        display.innerHTML = '4';
    } else {
    display.innerHTML = display.innerHTML + '4';
    }
}
document.getElementById(`five`).onclick = function() {
    if (display.innerHTML === '0'){
        display.innerHTML = '5';
    } else {
    display.innerHTML = display.innerHTML + '5';
    }
}
document.getElementById(`six`).onclick = function() {
    if (display.innerHTML === '0'){
        display.innerHTML = '6';
    } else {
    display.innerHTML = display.innerHTML + '6';
    }
}
document.getElementById(`seven`).onclick = function() {
    if (display.innerHTML === '0'){
        display.innerHTML = '7';
    } else {
    display.innerHTML = display.innerHTML + '7';
    }
}
document.getElementById(`eight`).onclick = function() {
    if (display.innerHTML === '0'){
        display.innerHTML = '8';
    } else {
    display.innerHTML = display.innerHTML + '8';
    }
}
document.getElementById(`nine`).onclick = function() {
    if (display.innerHTML === '0'){
        display.innerHTML = '9';
    } else {
    display.innerHTML = display.innerHTML + '9';
    }
}
document.getElementById(`zero`).onclick = function() {
    if (display.innerHTML !== '0'){
        display.innerHTML = display.innerHTML + '0';
    }
}


document.getElementById('add').onclick = function() {
    if (display.innerHTML[display.innerHTML.length-1] !== '-') {
        if (actions.indexOf(display.innerHTML[display.innerHTML.length-1]) === -1) {
            display.innerHTML = display.innerHTML + '+';
        } else {
            display.innerHTML = display.innerHTML.slice(0,-1) + '+';
        }
    } else {
        if (actions.indexOf(display.innerHTML[display.innerHTML.length-2]) !== -1) {
        display.innerHTML = display.innerHTML.slice(0,-2) + '+';
        } else {
            display.innerHTML = display.innerHTML.slice(0,-1) + '+';
        }
    }      
}
document.getElementById('divide').onclick = function() {
    if (display.innerHTML[display.innerHTML.length-1] !== '-') {
        if (actions.indexOf(display.innerHTML[display.innerHTML.length-1]) === -1) {
            display.innerHTML = display.innerHTML + '/';
        } else {
            display.innerHTML = display.innerHTML.slice(0,-1) + '/';
        }
    } else {
        if (actions.indexOf(display.innerHTML[display.innerHTML.length-2]) !== -1) {
        display.innerHTML = display.innerHTML.slice(0,-2) + '/';
        } else {
            display.innerHTML = display.innerHTML.slice(0,-1) + '/';
        }
    }      
}
document.getElementById('multiply').onclick = function() {
    if (display.innerHTML[display.innerHTML.length-1] !== '-') {
        if (actions.indexOf(display.innerHTML[display.innerHTML.length-1]) === -1) {
            display.innerHTML = display.innerHTML + '*';
        } else {
            display.innerHTML = display.innerHTML.slice(0,-1) + '*';
        }
    } else {
        if (actions.indexOf(display.innerHTML[display.innerHTML.length-2]) !== -1) {
        display.innerHTML = display.innerHTML.slice(0,-2) + '*';
        } else {
            display.innerHTML = display.innerHTML.slice(0,-1) + '*';
        }
    }      
}
document.getElementById('subtract').onclick = function() {

    if (display.innerHTML[display.innerHTML.length-1] !== '-') {
        display.innerHTML = display.innerHTML + '-';
    }
}
document.getElementById('decimal').onclick = function() {
    let indexes = [];
    for (let n=0; n<4; n++) {
        let index = display.innerHTML.lastIndexOf(actions[n]) + 1;
        indexes.push(index);
    }
    let lastActionIndex = indexes.sort((a,b)=>b-a)[0];

    if (display.innerHTML.indexOf('.', lastActionIndex) === -1){
        display.innerHTML = display.innerHTML + '.';
    }
}

