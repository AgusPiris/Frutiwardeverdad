let Fruta1;
let Fruta2;

document.getElementsByClassName("Botones").forEach((element) => {
  element.addEventListener("click", function() {
    Fruta1 = element.id;
  });
});

console.log(Fruta1);