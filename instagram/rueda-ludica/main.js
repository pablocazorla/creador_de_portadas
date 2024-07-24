import createLapiz from "../../js/utils/createLapiz";
import ImageList from "../../js/imageList";

/***********************************/
const numeroDeEdicion = 9;
const portada = "/images/ops/rock_hard.jpg";
const portadaRealWidth = 2500;
const portadaY = 0;
/***********************************/

const canvas = document.getElementById("my-canvas");

const L = createLapiz(canvas);

const width = 1000;
const height = 1000;
const rectHeight = 960;

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
      height: (rectHeight * portadaRealWidth) / width,
    },
    destiny: {
      x: 0,
      y: 0.5 * (height - rectHeight),
      width: width,
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
    height: 160,
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

  const lastRectHeight = 500;

  L.rect({
    x: 0,
    y: 0.5 * (height - rectHeight) + rectHeight - lastRectHeight,
    width,
    height: lastRectHeight,
    color: "#000",
    borderWidth: 0,
    opacity: 0.3,
  });

  const lastRectHeight2 = 200;

  L.rect({
    x: 0,
    y: 0.5 * (height - rectHeight) + rectHeight - lastRectHeight2,
    width,
    height: lastRectHeight2,
    color: "#000",
    borderWidth: 0,
    opacity: 0.4,
  });

  const iconWidth = 600;

  L.imageCropped({
    ...ImageList.icon.image,
    destiny: {
      x: 600,
      y: -300,
      width: iconWidth,
      height: iconWidth * ImageList.icon.ratio,
    },
    opacity: 0.7,
  });

  const iconWidth2 = 300;
  L.imageCropped({
    ...ImageList.icon.image,
    destiny: {
      x: -60,
      y: 660,
      width: iconWidth2,
      height: iconWidth2 * ImageList.icon.ratio,
    },
    opacity: 0.8,
  });

  const titleX = 50;
  const laruedaludicaWidth = 700;
  L.imageCropped({
    ...ImageList.laruedaludica.image,
    destiny: {
      x: 40 + titleX,
      y: 70,
      width: laruedaludicaWidth,
      height: laruedaludicaWidth * ImageList.laruedaludica.ratio,
    },
  });
  const envivoWidth = 160;
  L.imageCropped({
    ...ImageList.envivo.image,
    destiny: {
      x: 600 + titleX,
      y: 10,
      width: envivoWidth,
      height: envivoWidth * ImageList.envivo.ratio,
    },
  });

  L.text({
    text: `${numeroDeEdicion}`,
    x: 760 + titleX,
    y: -30,
    width: 400,
    fontSize: 200,
    color: "#fff",
    borderWidth: 0,
    shadow: "0 0 30px rgba(0,0,0,0.9)",
    fontFamily: "Libre Baskerville",
    italic: true,
    //textAlign: "center",
  }).render();

  const yTexts = 220;

  L.text({
    text: "Tormenta de Juegos",
    x: 0,
    y: 300 + yTexts,
    width: 950,
    fontSize: 50,
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
    width: 950,
    fontSize: 90,
    color: "#fff",
    borderWidth: 0,
    shadow: "0 0 30px rgba(0,0,0,0.9)",
    fontFamily: "Libre Baskerville",
    // italic: true,
    textAlign: "right",
    bold: 600,
  }).render();

  L.imageCropped({
    ...ImageList.twitch.image,
    destiny: {
      x: 0,
      y: 864,
      width: 1000,
      height: 1000 * ImageList.twitch.ratio,
    },
  });
};

// Images
L.setImages(
  {
    ...ImageList.background.src,
    ...ImageList.icon.src,
    ...ImageList.laruedaludica.src,
    ...ImageList.envivo.src,
    ...ImageList.twitch.src,
    portada,
  },
  onRender
);

//laruedaludica
