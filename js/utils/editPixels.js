const canvas = document.getElementById("my-canvas");
const ctx = canvas.getContext("2d");
let imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);

const $saturacion = document.getElementById("saturacion");
const $brillo = document.getElementById("brillo");
const $reset = document.getElementById("reset-levels");

const setValue = (x, A, B) => {
  let c = (x - A) * (255 / (B - A));
  if (c < 0) c = 0;
  if (c > 255) c = 255;
  return c;
};

const changeLevels = () => {
  const brillo = 255 - parseInt($brillo.value, 10);
  var sv = parseFloat($saturacion.value); // saturation value. 0 = grayscale, 1 = original

  const imageDataCopy = new ImageData(
    new Uint8ClampedArray(imgData.data),
    imgData.width,
    imgData.height
  );

  for (let i = 0; i < imageDataCopy.data.length; i += 4) {
    imageDataCopy.data[i] = setValue(imgData.data[i], 0, brillo);
    imageDataCopy.data[i + 1] = setValue(imgData.data[i + 1], 0, brillo);
    imageDataCopy.data[i + 2] = setValue(imgData.data[i + 2], 0, brillo);
  }
  ////

  var dA = imageDataCopy.data; // raw pixel data in array

  var luR = 0.3086; // constant to determine luminance of red. Similarly, for green and blue
  var luG = 0.6094;
  var luB = 0.082;

  var az = (1 - sv) * luR + sv;
  var bz = (1 - sv) * luG;
  var cz = (1 - sv) * luB;
  var dz = (1 - sv) * luR;
  var ez = (1 - sv) * luG + sv;
  var fz = (1 - sv) * luB;
  var gz = (1 - sv) * luR;
  var hz = (1 - sv) * luG;
  var iz = (1 - sv) * luB + sv;

  for (var i = 0; i < dA.length; i += 4) {
    var red = dA[i]; // Extract original red color [0 to 255]. Similarly for green and blue below
    var green = dA[i + 1];
    var blue = dA[i + 2];

    var saturatedRed = az * red + bz * green + cz * blue;
    var saturatedGreen = dz * red + ez * green + fz * blue;
    var saturateddBlue = gz * red + hz * green + iz * blue;

    dA[i] = saturatedRed;
    dA[i + 1] = saturatedGreen;
    dA[i + 2] = saturateddBlue;
  }

  ///
  ctx.putImageData(imageDataCopy, 0, 0);
};

$reset.addEventListener("click", () => {
  imgData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  $saturacion.value = 1;
  $brillo.value = 0;
  changeLevels();
});
$saturacion.addEventListener("input", changeLevels);
$brillo.addEventListener("input", changeLevels);
