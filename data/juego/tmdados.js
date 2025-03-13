const yPos = 30;

const data = {
  portada: [
    {
      src: "/images/ops/tmdados.webp",
      x: 0
      ,
      y: 0,
      width: 1200,
      height: 1200,
      scale: 1.5,
      xpoints: [
        [0.71, 0.13],
        [0.78, 0.15],
        [0.753, 0.803],
        [0.31, 0.888],
        [0.27, 0.821],
        [0.239, 0.17],
      ],
    },
  ],
  backOpacity: 0.7,
  texts: [
    {
      title: "Reseña",
      subtitle: "Terraforming Mars",
      x: 0,
      y: 610 + yPos,
      instagramY: 540,
      scale: 0.9,
    },
      {
      title: "",
      subtitle: "El juego de dados",
      x: 0,
      y: 800 + yPos,
      instagramY: 540,
      scale: 0.6,
    }, 
  ],
  mirror: true,
};

export default data;
