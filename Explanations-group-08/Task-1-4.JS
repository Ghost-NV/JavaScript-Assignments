// - onclick:        => left click
// - oncontextmenu:  => right click
// - onmouseenter:   => hover inside of element
// - onmouseleave:   => hover out of element

// - onload:         => page loaded
// - onscroll:       => page scroll
// - onresize:       => page resize

// - onfocus:        => input focus
// - onblur:         => input blur (leave)
// - onsubmit:       => form submit

let MyBtn = document.getElementById("btn");

MyBtn.onsubmit = function () {
  console.log("click");
};

window.onresize = function () {
  console.log("Scroll");
};

/* 
  <form action="">
    <input type="text" name="username" placeholder="Max 10 Chars Only" />
    <input type="text" name="age" placeholder="Cant Be Empty" />
    <input type="submit" value="Submit Data" />
  </form>
*/
