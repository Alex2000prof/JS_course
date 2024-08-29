const form = document.getElementById("MyForm");
const radiusInput = document.getElementById("radius");
const vol_inp = document.getElementById("volume");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  calculateVolume();
});
function calculateVolume() {
  const radius = parseFloat(radiusInput.value);

  if (isNaN(radius) || radius <= 0) {
    vol_inp.value = "Invalid radius";
    return;
  }

  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
  vol_inp.value = volume.toFixed(2);
}
