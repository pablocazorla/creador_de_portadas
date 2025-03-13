import createLapiz from "../../js/utils/createLapiz";
import ImageList from "../../js/imageList";

const MES = "Febrero";
const ANNO = "2025";

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
    ...ImageList.cazagangas.image,
    destiny: {
      x: 0,
      y: 0.5 * (height - rectHeight),
      width,
      height: width * ImageList.cazagangas.ratio - 2 * (height - rectHeight),
    },
  });

  /*   L.rect({
    x: 0,
    y: 0.5 * (height - rectHeight),
    width,
    height: rectHeight,
    color: "#000",
    borderWidth: 0,
    opacity: 0.5,
  }); */
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
    y: 0.5 * (height - rectHeight) + rectHeight - 20,
    width,
    height: 8,
    color: "#000",
    borderWidth: 0,
    opacity: 0.8,
  });

  const lastRectHeight2 = 400;

  L.rect({
    x: 0,
    y: 0.5 * (height - rectHeight) + rectHeight - lastRectHeight2,
    width,
    height: lastRectHeight2,
    color: "#000",
    borderWidth: 0,
    opacity: 0.4,
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
  /////////
  const prText = 70;
  const yText = 60;
  /*
  L.text({
    text: "Evolución de todo el",
    x: 0,
    y: 480 + yText,
    width: width - prText,
    fontSize: 110,
    color: "#fff",
    borderWidth: 0,
    shadow: "0 0 30px rgba(0,0,0,1)",
    fontFamily: "Libre Baskerville",
    textAlign: "right",

    // bold: 600,
  }).render();
  */
  L.text({
    text: "Top 10 Cazagangas",
    x: 0,
    y: 600 + yText,
    width: width - prText,
    fontSize: 140,
    color: "#fff",
    borderWidth: 0,
    shadow: "0 0 30px rgba(0,0,0,1)",
    fontFamily: "Libre Baskerville",
    textAlign: "right",
    // bold: 600,
  }).render();
  L.text({
    text: `${MES} ${ANNO}`,
    x: 0,
    y: 800 + yText,
    width: width - prText,
    fontSize: 100,
    color: "#eecc5d",
    borderWidth: 0,
    shadow: "0 0 30px rgba(0,0,0,1)",
    fontFamily: "Libre Baskerville",
    //italic: true,
    textAlign: "right",
    bold: 600,
  }).render();
};

L.setImages(
  {
    ...ImageList.background.src,
    ...ImageList.icon.src,
    ...ImageList.laruedaludica.src,
    ...ImageList.envivo.src,
    ...ImageList.cazagangas.src,
  },
  onRender
);

//laruedaludica
