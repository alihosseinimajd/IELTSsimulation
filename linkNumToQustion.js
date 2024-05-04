for (let i = 1; i < 41; i++) {
  document.getElementById(`btn_${i}`).addEventListener("click", function () {
    var targetElement = document.getElementById(`answer${i}`);
    targetElement.scrollIntoView({ behavior: "smooth" });
  });
}
