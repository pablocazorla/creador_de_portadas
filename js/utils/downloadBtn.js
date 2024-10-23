const $btn = document.getElementById("download-btn");
const $canvas = document.getElementById("my-canvas");

$btn.addEventListener("click", function () {
  const a = document.createElement("a");
  a.href = $canvas.toDataURL("image/jpeg", 0.9);
  a.download = `${window.imgName || "image"}.jpg`;
  a.click();
});
