// FADES IN LOADING CIRCLES

document.getElementById("loading-box").style = "animation: fadeIn 1.4s";

setTimeout(() => {
  document.getElementById("loading-box").style.animation = "fadeOut 1s";

  setTimeout(() => {
    document.getElementById("loading-box").style = "display: none";
  }, 900);
}, 4000);

//
function spinjar() {
  document.getElementById("webgl").style.animation = "fadeOut 1s";

  setTimeout(function directLink() {
    location.href = "/skill_page";
  }, 800);
}

//
function showBody() {
  document.getElementById("wholebody").style.animation = "fadeIn 1.3s";
  document.getElementById("wholebody").style.display = "block";
  document.getElementsByTagName("canvas")[0].style =
    "display: block; position: relative; align-items: center;";
  document.getElementsByTagName("canvas")[0].style.animation = "fadeIn 1.3s";
}
setTimeout(showBody, 4750);

document.querySelector("#webgl").addEventListener("mousedown", () => {
  document.querySelector("canvas").classList.toggle("grab");
});

document.querySelector("#webgl").addEventListener("mouseup", () => {
  document.querySelector("canvas").classList.toggle("grab");
});
