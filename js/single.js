let id = localStorage.getItem("id");
const template = findElement("#product-template");
const card = findElement(".card");
const headerSvg = findElement("svg");

headerSvg.addEventListener("click", () =>{ 
  window.location.href = 'file:///C:/Users/user/Desktop/Front-end/Uzum1/Uzum/index.html'
})

fetch(BASE_URL + "products/" + id)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    renderProducts([data], card, template);
  });

