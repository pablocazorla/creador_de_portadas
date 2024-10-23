import createLapiz from "../../js/utils/createLapiz";
import createCapturePhoto from "../../js/utils/capture";
import ImageList from "../../js/imageList";
import data from "../../data/resena/deepsea";

const canvas = document.getElementById("my-canvas");

const L = createLapiz(canvas);

const width = 1920;
const height = 1069;
const rectHeight = 1000;
const percentPortada = 0.46;

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
  L.text({
    text: "Sacar foto",
    x: 300,
    y: 350,
    width,
    fontSize: 40,
    color: "#FFFFFF",
    borderWidth: 0,
    bold: 600,
  }).render();

  L.imageCropped({
    image: "photo",
    source: {
      x: 0,
      y: 0,
      width: 1920,
      height: (rectHeight * 1920) / width,
    },
    destiny: {
      x: 0,
      y: 0.5 * (height - rectHeight),
      width,
      height: rectHeight,
    },
  });
  L.ctx.save();
  L.ctx.shadowOffsetX = -20;
  L.ctx.shadowOffsetY = 0;
  L.ctx.shadowBlur = 20;
  L.ctx.shadowColor = "rgba(0,0,0,0.7)";
  L.imageCropped({
    image: "portada",
    source: {
      x: data.portada.x,
      y: data.portada.y,
      width: data.portada.width,
      height: data.portada.width,
    },
    destiny: {
      x: percentPortada * width,
      y: 0.5 * (height - rectHeight),
      width: (1 - percentPortada) * width,
      height: rectHeight,
    },
  });
  L.ctx.restore();

  L.ctx.save();
  L.ctx.filter = "blur(2px)";
  L.rect({
    x: percentPortada * width,
    y: 0.5 * (height - rectHeight),
    width: 1,
    height: rectHeight,
    color: "#FFF",
    borderWidth: 0,
    opacity: 1,
  });
  L.ctx.restore();
  L.rect({
    x: 0,
    y: 0.5 * (height - rectHeight),
    width,
    height: rectHeight,
    color: "#000",
    borderWidth: 0,
    opacity: 0.2,
  });

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

  const iconWidth2 = 400;
  L.imageCropped({
    ...ImageList.icon.image,
    destiny: {
      x: 20,
      y: 770,
      width: iconWidth2,
      height: iconWidth2 * ImageList.icon.ratio,
    },
    opacity: 0.4,
  });

  if (data?.texts.length) {
    const xBase = 160;
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
  portada: data.portada.src,
};
L.setImages(images, onRender);

const capturePhoto = createCapturePhoto(width, height);

capturePhoto.btn.addEventListener("click", function () {
  capturePhoto.getPhotoRetarded(function (photo) {
    L.setImages(
      {
        ...images,
        photo,
      },
      onRender
    );
  });
});
