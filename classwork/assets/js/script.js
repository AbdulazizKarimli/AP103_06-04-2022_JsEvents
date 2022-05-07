const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    let giftItem = document.getElementById(`${btn.dataset.targetId}`);
    giftItem.style.filter = "none";
    btn.style.opacity = "0";
    btn.setAttribute("disabled", "true");
  });
});
