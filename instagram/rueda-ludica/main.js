import createLapiz from "../../js/utils/createLapiz";
import ImageList from "../../js/imageList";
import data from "../../data/rueda-ludica/rd16";

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

  const portadaLength = data.portada.length;
  const portadaPadding = 100;
  data.portada.forEach((portada, i) => {
    const portadaScale = portada.scaleInstagram || portada.scale || 1;
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
        x: portada.instagramX || portada.x || 0,
        y: portada.instagramY || portada.y || 0,
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

  const titleX = -10;
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
    text: `${data.numeroDeEdicion}`,
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

  if (data?.texts.length) {
    const xBase = 200;
    const prBase = 40;
    data.texts.forEach(
      ({ title, subtitle, x, instagramX, y, instagramY, scale = 1, white }) => {
        L.text({
          text: title || "",
          x: xBase + (instagramX || x || 0),
          y: instagramY || y || 0,
          width: width - xBase - prBase,
          fontSize: 46 * scale,
          color: white ? "#fff" : "#eecc5d",
          borderWidth: 0,
          shadow: "0 0 30px rgba(0,0,0,0.9)",
          fontFamily: "Libre Baskerville",
          italic: true,
          textAlign: "right",
          bold: 600,
        }).render();

        L.text({
          text: subtitle || "",
          x: xBase + (instagramX || x),
          y: 62 * scale + (instagramY || y),
          width: width - xBase - prBase,
          fontSize: 84 * scale,
          color: "#fff",
          borderWidth: 0,
          shadow: "0 0 30px rgba(0,0,0,0.9)",
          fontFamily: "Libre Baskerville",
          textAlign: "right",
          bold: 600,
        }).render();
      }
    );
  }

  if(data.date){
    L.rect({
      x: 0,
      y: height-230,
      width,
      height: 100,
      color: "#a64399",
    })
    L.text({
      text: `${data.date.text}`,
      x: 0,
      y: height-220,
      width,
      fontSize: 60,
      color: "#fff",
      borderWidth: 0,
      shadow: "0 0 30px rgba(0,0,0,0.9)",
      fontFamily: "Montserrat",
      //bold: 600,
      textAlign: "center",
    }).render();
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
