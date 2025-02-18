const darcMode = document.querySelector(".d");

darcMode.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    darcMode.innerHTML = `
        <img id="light-mode" src="./images/Icon (1).svg" width="19" alt="">`;
    document.body.classList.add(".dark-mode");
  } else {
    darcMode.innerHTML = `
        <img id="dark-mode" src="./images/Settings Icon.svg" width="19" alt="">`;
  }
});
