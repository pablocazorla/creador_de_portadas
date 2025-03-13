import createLapiz from "../../js/utils/createLapiz";
import ImageList from "../../js/imageList";
import data from "../../data/partida/harmony";

// CUSTOM

const canvas = document.getElementById("my-canvas");

const L = createLapiz(canvas);

const width = 1000;
const height = 1000;
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

  L.ctx.save();
  if (data.blurInstagram) {
    L.ctx.filter = `blur(${data.blurInstagram}px)`;
  }

  data.portada.forEach((portada, i) => {
    const portadaScale = portada.scaleInstagram || 1;
    L.ctx.save();
    if (portada.blur) {
      L.ctx.filter = `blur(${portada.blur}px)`;
    }
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
        x: portada.instagramX,
        y: portada.instagramY,
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
  L.ctx.restore();

  L.rect({
    x: 0,
    y: 0.5 * (height - rectHeight),
    width,
    height: rectHeight,
    color: "#000",
    borderWidth: 0,
    opacity: data.portadaDimmerInstagram || 0.5,
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

  // TITLE: PARTIDA
  const envivoWidth = 300;
  const xdef = 150;
  L.text({
    text: "Partida",
    x: -xdef,
    y: data?.titleYinstagram || 0,
    width,
    fontSize: 80,
    color: "#eecc5d",
    borderWidth: 0,
    shadow: "0 0 30px rgba(0,0,0,1)",
    fontFamily: "Libre Baskerville",
    italic: true,
    textAlign: "center",
    bold: 600,
  }).render();

  L.imageCropped({
    ...ImageList.envivo.image,
    destiny: {
      x: 660 - xdef,
      y: data?.titleYinstagram || 0,
      width: envivoWidth,
      height: envivoWidth * ImageList.envivo.ratio,
    },
  });

  if (data?.texts.length) {
    data.texts.forEach(
      ({ title, subtitle, instagramY, instagramScale = 1, white }) => {
        L.text({
          text: title || "",
          x: 0,
          y: instagramY || 0,
          width,
          fontSize: 74 * instagramScale,
          color: white ? "#fff" : "#eecc5d",
          borderWidth: 0,
          shadow: "0 0 30px rgba(0,0,0,1)",
          fontFamily: "Libre Baskerville",
          italic: true,
          textAlign: "center",
          bold: 600,
        }).render();

        L.text({
          text: subtitle || "",
          x: 0,
          y: 100 * instagramScale + instagramY,
          width,
          fontSize: 140 * instagramScale,
          color: "#fff",
          borderWidth: 0,
          shadow: "0 0 30px rgba(0,0,0,1)",
          fontFamily: "Libre Baskerville",
          textAlign: "center",
          bold: 600,
        }).render();
      }
    );
  }
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
    ...ImageList.twitch.src,
    ...portadas,
  },
  onRender
);

//laruedaludica
