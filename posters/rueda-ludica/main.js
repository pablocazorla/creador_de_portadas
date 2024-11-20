import createLapiz from "../../js/utils/createLapiz";
import ImageList from "../../js/imageList";
import data from "../../data/rueda-ludica/rd17";

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

  const portadaLength = data.portada.length;
  const portadaPadding = 160;
  data.portada.forEach((portada, i) => {
    const portadaScale = portada.scale || 1;
    L.ctx.save();

    if (i) {
      L.ctx.fillStyle = "rgba(0,0,0,1)";
      L.ctx.shadowColor = "rgba(0,0,0,0.6)";
      L.ctx.shadowBlur = 40;
      L.ctx.shadowOffsetX = -20;
      L.ctx.shadowOffsetY = 0;

      L.ctx.beginPath();
      L.ctx.moveTo(
        (width / portadaLength) * i + portadaPadding,
        0.5 * (height - rectHeight)
      );
      L.ctx.lineTo(
        (width / portadaLength) * i + width,
        0.5 * (height - rectHeight)
      );
      L.ctx.lineTo(
        (width / portadaLength) * i + width,
        0.5 * (height - rectHeight) + rectHeight
      );
      L.ctx.lineTo(
        (width / portadaLength) * i - portadaPadding,
        0.5 * (height - rectHeight) + rectHeight
      );
      L.ctx.closePath();
      L.ctx.fill();
      L.ctx.clip();
    }

    L.imageCropped({
      image: `portada${i}`,
      source: {
        x: portada.x,
        y: portada.y,
        width: portada.width / portadaScale,
        height: (rectHeight * portada.width) / width / portadaScale,
      },
      destiny: {
        x: 0,
        y: 0.5 * (height - rectHeight),
        width,
        height: rectHeight,
      },
    });

    if (i) {
      L.ctx.lineWidth = 4;
      L.ctx.strokeStyle = "rgba(255,255,255,0.6)";
      L.ctx.beginPath();
      L.ctx.moveTo(
        (width / portadaLength) * i + portadaPadding,
        0.5 * (height - rectHeight)
      );
      L.ctx.lineTo(
        (width / portadaLength) * i + width,
        0.5 * (height - rectHeight)
      );
      L.ctx.lineTo(
        (width / portadaLength) * i + width,
        0.5 * (height - rectHeight) + rectHeight
      );
      L.ctx.lineTo(
        (width / portadaLength) * i - portadaPadding,
        0.5 * (height - rectHeight) + rectHeight
      );
      L.ctx.closePath();
      L.ctx.stroke();
    }

    L.ctx.restore();
  });

  L.rect({
    x: 0,
    y: 0.5 * (height - rectHeight),
    width,
    height: rectHeight,
    color: "#000",
    borderWidth: 0,
    opacity: data.portadaDimmer || 0.5,
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

  const titleX = 50;
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
    text: `${data.numeroDeEdicion}`,
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

  if (data?.texts.length) {
    const xBase = 460;
    const prBase = 100;
    data.texts.forEach(({ title, subtitle, x, y, scale = 1, white }) => {
      L.text({
        text: title || "",
        x: xBase + x,
        y,
        width: width - xBase - prBase,
        fontSize: 74 * scale,
        color: white ? "#fff" : "#eecc5d",
        borderWidth: 0,
        shadow: "0 0 30px rgba(0,0,0,1)",
        fontFamily: "Libre Baskerville",
        italic: true,
        textAlign: "right",
        bold: 600,
      }).render();

      L.text({
        text: subtitle || "",
        x: xBase + x,
        y: 100 * scale + y,
        width: width - xBase - prBase,
        fontSize: 140 * scale,
        color: "#fff",
        borderWidth: 0,
        shadow: "0 0 30px rgba(0,0,0,1)",
        fontFamily: "Libre Baskerville",
        textAlign: "right",
        bold: 600,
      }).render();
    });
  }
};

// Images

const portadas = (() => {
  const p = {};

  data.portada.forEach(({ src }, i) => {
    p[`portada${i}`] = src;
  });

  return p;
})();

L.setImages(
  {
    ...ImageList.background.src,
    ...ImageList.icon.src,
    ...ImageList.laruedaludica.src,
    ...ImageList.envivo.src,
    ...portadas,
  },
  onRender
);

//laruedaludica
