const h1_el = document.querySelector("h1");
console.log(h1_el);

const art = document.querySelector("article");
const par = document.querySelectorAll("p");
art.removeChild(par[par.length - 1]);

const h2_el = document.querySelector("h2");
h2_el.addEventListener("click", () => {
  h2_el.style.backgroundColor = "red";
});

const h3 = document.querySelector("h3");
h3.addEventListener("click", () => {
  h3.style.display = "none";
});

const button = document.getElementById("boldbutton");
button.addEventListener("click", () => {
  const all_p = document.querySelectorAll("p");
  all_p.forEach((p) => {
    p.style.fontWeight = "bold";
  });
});
