let jsonfile = "Explanations-group-15/last.json";

async function FetchAPI() {
  try {
    let response = await fetch(jsonfile);
    let data = await response.json();
    data.length = 5;

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
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Done");
  }
}

FetchAPI();
