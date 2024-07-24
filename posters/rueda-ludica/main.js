import createLapiz from "../../js/utils/createLapiz";
import ImageList from "../../js/imageList";

/***********************************/
const numeroDeEdicion = 9;
const portada = "/images/ops/rock_hard.jpg";
const portadaRealWidth = 2500;
const portadaY = 600;
/***********************************/

const canvas = document.getElementById("my-canvas");

const L = createLapiz(canvas);

const width = 1920;
const height = 1069;
const rectHeight = 1000;

const onRender = () => {
  L.imageCropped({
    ...ImageList.background.image,
    destiny: {
      x: 0,
      y: 0,
      width: 1924,
      height: 1924 * ImageList.background.ratio,
    },
  });

  L.imageCropped({
    image: "portada",
    source: {
      x: 0,
      y: portadaY,
      width: portadaRealWidth,
      height: (rectHeight * portadaRealWidth) / 1920,
    },
    destiny: {
      x: 0,
      y: 0.5 * (height - rectHeight),
      width: 1920,
      height: rectHeight,
    },
  });

  L.rect({
    x: 0,
    y: 0.5 * (height - rectHeight),
    width,
    height: rectHeight,
    color: "#000",
    borderWidth: 0,
    opacity: 0.5,
  });
  L.rect({
    x: 0,
    y: 0.5 * (height - rectHeight),
    width,
    height: 8,
    color: "#000",
    borderWidth: 0,
    opacity: 0.8,
  });
  L.rect({
    x: 0,
    y: 0.5 * (height - rectHeight),
    width,
    height: 230,
    color: "#000",
    borderWidth: 0,
    opacity: 0.4,
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

  const lastRectHeight = 360;

  L.rect({
    x: 0,
    y: 0.5 * (height - rectHeight) + rectHeight - lastRectHeight,
    width,
    height: lastRectHeight,
    color: "#000",
    borderWidth: 0,
    opacity: 0.1,
  });

  const lastRectHeight2 = 180;

  L.rect({
    x: 0,
    y: 0.5 * (height - rectHeight) + rectHeight - lastRectHeight2,
    width,
    height: lastRectHeight2,
    color: "#000",
    borderWidth: 0,
    opacity: 0.2,
  });

  const iconWidth = 900;

  L.imageCropped({
    ...ImageList.icon.image,
    destiny: {
      x: 1250,
      y: -450,
      width: iconWidth,
      height: iconWidth * ImageList.icon.ratio,
    },
    opacity: 0.7,
  });

  const iconWidth2 = 700;
  L.imageCropped({
    ...ImageList.icon.image,
    destiny: {
      x: -160,
      y: 670,
      width: iconWidth2,
      height: iconWidth2 * ImageList.icon.ratio,
    },
    opacity: 0.7,
  });

  const titleX = 100;
  const laruedaludicaWidth = 1400;
  L.imageCropped({
    ...ImageList.laruedaludica.image,
    destiny: {
      x: 40 + titleX,
      y: 70,
      width: laruedaludicaWidth,
      height: laruedaludicaWidth * ImageList.laruedaludica.ratio,
    },
  });
  const envivoWidth = 260;
  L.imageCropped({
    ...ImageList.envivo.image,
    destiny: {
      x: 1250 + titleX,
      y: 20,
      width: envivoWidth,
      height: envivoWidth * ImageList.envivo.ratio,
    },
  });

  L.text({
    text: `${numeroDeEdicion}`,
    x: 1500 + titleX,
    y: -30,
    width: 400,
    fontSize: 300,
    color: "#fff",
    borderWidth: 0,
    shadow: "0 0 30px rgba(0,0,0,0.9)",
    fontFamily: "Libre Baskerville",
    italic: true,
    //textAlign: "center",
  }).render();

  const yTexts = 360;

  L.text({
    text: "Tormenta de Juegos",
    x: 0,
    y: 300 + yTexts,
    width: 1850,
    fontSize: 74,
    color: "#eecc5d",
    borderWidth: 0,
    shadow: "0 0 30px rgba(0,0,0,0.9)",
    fontFamily: "Libre Baskerville",
    italic: true,
    textAlign: "right",
    bold: 600,
  }).render();

  L.text({
    text: "Rock Hard 1977",
    x: 0,
    y: 400 + yTexts,
    width: 1850,
    fontSize: 140,
    color: "#fff",
    borderWidth: 0,
    shadow: "0 0 30px rgba(0,0,0,0.9)",
    fontFamily: "Libre Baskerville",
    // italic: true,
    textAlign: "right",
    bold: 600,
  }).render();
};

// Images
L.setImages(
  {
    ...ImageList.background.src,
    ...ImageList.icon.src,
    ...ImageList.laruedaludica.src,
    ...ImageList.envivo.src,

    portada,
  },
  onRender
);

//laruedaludica
