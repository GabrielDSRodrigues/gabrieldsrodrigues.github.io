function id(e) { return document.getElementById(e); }

function loadPage() {
  let chave = false;
  let rt = 0;

  function rotation() {
    if (chave == false) {
      rt += 15;
      id("circleLoading").style.transform = `rotate(${rt}deg)`;
      window.requestAnimationFrame(rotation);
    } else if (chave == true) {
      id("loadPage").style.display = "none";
    }
  }
  rotation();
  setTimeout(() => {
    chave = true;
  }, 4000);
}
loadPage();