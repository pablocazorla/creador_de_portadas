import createLapiz from "../../js/utils/createLapiz";
import ImageList from "../../js/imageList";
import data from "../../data/juego/tmdados";

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

  data.portada.forEach((portada, i) => {
    const portadaScale = portada.scale || 1;
    const portadaPoints = portada?.points;
    L.ctx.save();

    L.ctx.scale(portadaScale, portadaScale);

    if (portadaPoints) {
      L.ctx.fillStyle = "rgba(0,0,0,1)";
      L.ctx.shadowColor = "rgba(0,0,0,0.6)";
      L.ctx.shadowBlur = 40;
      L.ctx.shadowOffsetX = -20;
      L.ctx.shadowOffsetY = 0;

      L.ctx.beginPath();
      portadaPoints.forEach(([x, y], j) => {
        const xp = x * portada.width + portada.x;
        const yp = y * portada.width + portada.y;

        if (j === 0) {
          L.ctx.moveTo(xp, yp);
        } else {
          L.ctx.lineTo(xp, yp);
        }
      });

      L.ctx.closePath();
      L.ctx.fill();
      L.ctx.clip();
    }

    L.image({
      image: `portada${i}`,
      x: portada.x,
      y: portada.y,
      width: portada.width,
      height: portada.height,
    });

    L.ctx.restore();
  });
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

const portadas = (() => {
  const p = {};

  data.portada.forEach(({ src }, i) => {
    p[`portada${i}`] = src;
  });

  return p;
})();

const images = {
  ...ImageList.background.src,
  ...ImageList.icon.src,
  ...ImageList.laruedaludica.src,
  ...ImageList.envivo.src,
  ...portadas,
};
L.setImages(images, onRender);

/*********************** */
