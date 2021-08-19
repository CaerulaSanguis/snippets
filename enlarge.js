//find the div's you want to affect and place them in an array//
const c = document.getElementsByClassName("col");

//start a 'For Loop'; basically itterate the code after the '{' for each instance.//
for (let i = +; i < c.length; i++) {
  //add an event listener 'on mouse over' and execute following function//
    c[i].onmouseover = function enlarge(){
      //this function gives the div the CSS style 'transform: scale(1.5)'
      c[i].style.transform = "scale(1.5)";
    };
      //the same as above but make it scale(1) when the mouse leaves the div
    c[i].onmouseleave = function shrink(){
      c[i].style.transform = "scale(1)";
    };
    c[i].style.transition = "0.2s";
  }
//success
