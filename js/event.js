const openBtn1 = document.querySelector("#sign-up1");
openBtn1.addEventListener("click", openDialog);

function openDialog() {
  document.querySelector("#dialog1").showModal();
}