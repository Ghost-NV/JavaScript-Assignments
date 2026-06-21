/*
  DOM [CSS]
    add to HTML code (using <style>):
      - style    ==> Add fast style code
      - cssText  ==> Write as CSS code syntax
      - removeProperty(propertyName)
      - setProperty(propertyName, value, priority)
    add to styleSheets directley:
      - styleSheetss
*/

let element = document.getElementById("Div");

element.style.color = "red";
element.style.fontWeight = "bold";

element.style.cssText = "font-weight: bold; color: green; opacity: 0.8"; // Overwrite

element.style.removeProperty("margin-left"); // does't work (edits HTML <style>)
element.style.setProperty("font-size", "40px", "important");

// styleSheets => files , rules[i] => .div0 {} .div1 {} .div2 {} ,others edits styleSheets
document.styleSheets[0].rules[0].style.removeProperty("margin-left"); // works
document.styleSheets[0].rules[0].style.removeProperty("line-height"); // remove from styleSheets
document.styleSheets[0].rules[0].style.setProperty("background-color", "red"); // add to styleSheets

/*
  #Div {
    margin-top: 10px;
    margin-left: 10px;
    height: 80px;
    width: 200px;
    text-align: center;
  }
*/
/* <div id="Div">Hello</div> */
