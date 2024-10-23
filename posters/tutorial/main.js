import createLapiz from "../../js/utils/createLapiz";
import ImageList from "../../js/imageList";
import data from "../../data/tutorial/rock-hard";

const captureBtn = document.getElementById("captureBtn");
const canvas = document.getElementById("my-canvas");

const L = createLapiz(canvas);

const width = 1920;
const height = 1069;
const rectHeight = 1000;

let dataPortada = {
  x: 0,
  y: 0,
  width: 1920,
};

const onRender = () => {
  L.clear();
  L.imageCropped({
    ...ImageList.background.image,
    destiny: {
      x: 0,
      y: 0,
      width: 1924,
      height: 1924 * ImageList.background.ratio,
    },
  });

  L.ctx.save();
  if (data?.mirror) {
    L.ctx.scale(-1, 1);
    L.ctx.translate(-width, 0);
  }

  L.imageCropped({
    image: "portada",

    source: {
      x: dataPortada.x,
      y: dataPortada.y,
      width: width,
      height: height * 0.9,
    },
    destiny: {
      x: 0,
      y: 0.5 * (height - rectHeight),
      width,
      height: rectHeight,
    },
  });
  L.ctx.restore();
  ////////////////////////////////
  /* 
  L.rect({
    x: 0,
    y: 0.5 * (height - rectHeight),
    width,
    height: rectHeight,
    color: "#000",
    borderWidth: 0,
    opacity: 0.2,
  });
 */
  L.rect({
    x: 0,
    y: 0.5 * (height - rectHeight),
    width,
    height: 8,
    color: "#000",
    borderWidth: 0,
    opacity: 0.6,
  });

  L.rect({
    x: 0,
    y: 0.5 * (height - rectHeight) + rectHeight - 8,
    width,
    height: 8,
    color: "#000",
    borderWidth: 0,
    opacity: 0.8,
  });

  L.ctx.save();
  L.ctx.filter = "blur(20px)";
  L.ctx.rotate(-0.15);
  L.rect({
    x: -500,
    y: height - 200,
    width: width + 700,
    height: 1000,
    color: "#000",
    borderWidth: 0,
    opacity: data.backOpacity,
  });
  L.ctx.restore();

  const iconWidth2 = 700;
  L.imageCropped({
    ...ImageList.icon.image,
    destiny: {
      x: 1400,
      y: -100,
      width: iconWidth2,
      height: iconWidth2 * ImageList.icon.ratio,
    },
    opacity: 1,
  });

  if (data?.texts.length) {
    const xBase = 460;
    const prBase = 100;
    data.texts.forEach(({ title, subtitle, x, y, scale }) => {
      L.text({
        text: title,
        x: xBase + x,
        y,
        width: width - xBase - prBase,
        fontSize: 74 * scale,
        color: "#eecc5d",
        borderWidth: 0,
        shadow: "0 0 30px rgba(0,0,0,0.9)",
        fontFamily: "Libre Baskerville",
        italic: true,
        textAlign: "right",
        bold: 600,
      }).render();

      L.text({
        text: subtitle,
        x: xBase + x,
        y: 100 * scale + y,
        width: width - xBase - prBase,
        fontSize: 140 * scale,
        color: "#fff",
        borderWidth: 0,
        shadow: "0 0 30px rgba(0,0,0,0.9)",
        fontFamily: "Libre Baskerville",
        textAlign: "right",
        bold: 600,
      }).render();
    });
  }
};

const images = {
  ...ImageList.background.src,
  ...ImageList.icon.src,
  ...ImageList.laruedaludica.src,
  ...ImageList.envivo.src,
};
L.setImages(images, onRender);

/*********************** */

const uploadInput = document.getElementById("uploadInput");
const videoInput = document.getElementById("videoInput");

uploadInput.addEventListener("change", function (event) {
  const file = this.files[0];
  const url = URL.createObjectURL(file);

  videoInput.src = url;
});

captureBtn.addEventListener("click", function () {
  const canvasCap = document.createElement("canvas");

  canvasCap.width = width;
  canvasCap.height = height;
  const ctxCap = canvasCap.getContext("2d");
  ctxCap.drawImage(videoInput, 0, 0, canvasCap.width, canvasCap.height);
  const portada = canvasCap.toDataURL("image/png");

  //

  //
  const images = {
    ...ImageList.background.src,
    ...ImageList.icon.src,
    ...ImageList.laruedaludica.src,
    ...ImageList.envivo.src,
    portada,
  };

  console.log(videoInput, videoInput.width);
  L.setImages(images, onRender);
});
