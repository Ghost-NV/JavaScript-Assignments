let xhr = new XMLHttpRequest();
xhr.open("GET", "Explanations-group-15/articles.json", true);
xhr.send();
console.log(xhr);

xhr.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    let JSData = JSON.parse(this.responseText); // Array/object

    console.log(JSData);
    JSData.forEach((element) => {
      element["content"] = "JSON";
      console.log(element);

      let div = document.createElement("div");

      for (let i = 0; i < Object.keys(element).length; i++) {
        let elementN;
        if (Object.keys(element)[i] === "title") {
          elementN = document.createElement("h2");
        } else {
          elementN = document.createElement("p");
        }
        elementN.append(Object.values(element)[i]);
        div.append(elementN);
      }

      /* =======================
      ? instead of for() -> use Object.entries + Nested forEach:
      Object.entries(element).forEach(([key, value]) => {
        let elementN;
        if (key === "title") {
          elementN = document.createElement("h2");
        } else {
          elementN = document.createElement("p");
        }
        elementN.append(value);
        div.append(elementN);
      });
      ======================= */

      document.body.append(div);
    });

    let JSONsaved = JSON.stringify(JSData); // string (JSON format)
    console.log(JSONsaved);
  }
};

// make div for every object in array(JSON)
// inside Object make one title takes title property value from every Object in array
// same with other prop, take thier values and append them at last (change 'content' prop)
