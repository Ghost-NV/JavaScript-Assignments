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

Data("https://api.github.com/users/Ghost-NV/repos")
  .then((data) => console.log(data[0].full_name))
  .catch((error) => console.log(error))
  .finally(() => console.log("Done"));

// =================
// fetch(APILink)
setTimeout(() => {
  console.log("=============================");
  fetch("https://api.github.com/users/Ghost-NV/repos")
    .then((response) => {
      console.log(response); // Response
      console.log(response.url);
      return response.json(); // Return Promise
    })
    .then((data) => {
      console.log(data[0].full_name);
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      console.log("Done");
    });
}, 1000);
