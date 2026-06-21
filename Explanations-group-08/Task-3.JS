let len = document.querySelectorAll('[decoding="async"]').length;
for (let i = 0; i < len; i++) {
  let attr = document.querySelectorAll('[decoding="async"]')[i];
  attr.setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png",
  );
  attr.setAttribute("alt", "Elzero Logo");
}

/*
  <div>
    <img decoding="async" src="#" alt="" />
  </div>
  <div>
    <img decoding="async" src="#" alt="" />
  </div>
  <div>
    <img decoding="async" src="#" alt="" />
  </div>
  <div>
    <img decoding="async" src="#" alt="" />
  </div>
  <div>
    <img decoding="async" src="#" alt="" />
  </div>
  <div>
    <img decoding="async" src="#" alt="" />
  </div>
  <div>
    <img decoding="async" src="#" alt="" />
  </div>
  <div>
    <img decoding="async" src="#" alt="" />
  </div>
  <div>
    <img decoding="async" src="#" alt="" />
  </div>
  <div>
    <img decoding="async" src="#" alt="" />
  </div>
*/
