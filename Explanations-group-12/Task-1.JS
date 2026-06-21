// Practice : Form Validation

let phone = document.getElementById("phone");

document.getElementById("register").addEventListener("submit", function (e) {
  e.preventDefault(); // to see result in console
  if (/^01[0125]\d{8}$/.test(phone.value)) {
    console.log("done");
  } else {
    alert(`'${phone.value}' is not a Valild number`);
  }
});

/*
  <form id="register" action="" method="get">
    <input type="text" id="phone" name="the-phone" maxlength="15" />
    <input type="submit" id= "submit" value="Register" />
  </form>
*/
