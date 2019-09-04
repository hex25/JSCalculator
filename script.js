 
const screen = document.getElementById('screen');
const actions = ['+','-','*','/','.'];

document.getElementById('ac').onclick = function() {
    screen.innerHTML = '0';
  }
  
document.getElementById('result').onclick = function() {
    if (actions.indexOf(screen.innerHTML[screen.innerHTML.length-1]) === -1) {
        screen.innerHTML = eval(screen.innerHTML);
    }
  }

for (let i=1; i<11; i++) {


    document.getElementById(`btn${i}`).onmousedown = function() {
        document.getElementById(`btn${i}`).style.backgroundColor = 'lightyellow';
    }
    document.getElementById(`btn${i}`).onmouseup = function() {
        document.getElementById(`btn${i}`).style.backgroundColor = 'lightgrey';
    }

  document.getElementById(`btn${i}`).onclick = function() {
    if (screen.innerHTML === '0'){
        screen.innerHTML = document.getElementById(`btn${i}`).innerHTML;
    } else {
    screen.innerHTML = screen.innerHTML + document.getElementById(`btn${i}`).innerHTML;

}
}
} 
    

for (let j=11; j<16; j++) {
        document.getElementById(`btn${j}`).onclick = function() {
            if (screen.innerHTML !== ''){
                if (actions.indexOf(screen.innerHTML[screen.innerHTML.length-1]) === -1) {
                    screen.innerHTML = screen.innerHTML + document.getElementById(`btn${j}`).innerHTML;
                } else {
                    screen.innerHTML = screen.innerHTML.slice(0,-1) + document.getElementById(`btn${j}`).innerHTML;
                }
            }       
  }
  } 


