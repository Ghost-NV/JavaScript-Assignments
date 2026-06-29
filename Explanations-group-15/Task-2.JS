let jsonfile = "Explanations-group-15/last.json";

let Data = (APILink) => {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open("GET", APILink);
    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300 && xhr.readyState === 4) {
        resolve(JSON.parse(xhr.response));
      } else {
        reject(Error("No Data Found"));
      }
    };
    xhr.send();
  });
};

Data(jsonfile)
  .then((data) => {
    data.length = 5;
    return data;
  })
  .then((data) => {
    data.forEach((element) => {
      let div = document.createElement("div");

      Object.entries(element).forEach(([key, value]) => {
        let elementN;
        if (key === "title") {
          elementN = document.createElement("h2");
          elementN.append(value);
          div.append(elementN);
        } else if (key === "description") {
          elementN = document.createElement("p");
          elementN.append(value);
          div.append(elementN);
        }
      });
      document.body.append(div);
    });
  })
  .catch((error) => console.log(error))
  .finally(() => console.log("Done"));
