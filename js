// кикнуть все в экрана
 function clearScreen() {
 document.getElementById("result").value = "";
 }

 // Tвызывает с айдишки рузульт ну с чтмл
 function display(value) {
 document.getElementById("result").value += value;
 }
 // калькулятор
 function calculate() {
 var p = document.getElementById("result").value;
 var q = eval(p);
 document.getElementById("result").value = q;
 }
 document.addEventListener('keydown', function(event) {
                                                            
    if(event.key == 'Enter'){calculate();} else if(event.key == 'Backspace'){clearScreen();}
    
    
    
    else{document.getElementById("result").value += event.key ;} 
    
});
