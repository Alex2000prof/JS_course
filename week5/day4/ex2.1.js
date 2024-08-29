function myMove() {
  const element = document.getElementById("animate");
  let pos = 0;
  const id = setInterval(frame, 10);

  function frame() {
    if (pos >= 350) {
      clearInterval(id);
    } else {
      pos++;
      element.style.left = pos + "px";
    }
  }
}
