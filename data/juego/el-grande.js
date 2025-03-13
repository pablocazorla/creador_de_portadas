const yPos = -25;

const data = {
  portada: [
    {
      src: "/images/ops/elgrande-caja.jpg",
      x: 100,
      y: -80,
      width: 1000,
      height: 1000,
      scale: 1.1,
      points: [
        [0.16, 0.18],
        [0.95, 0.181],
        [0.95, 0.76],
        [0.16, 0.82],
        [0.055, 0.78],
        [0.055, 0.195],
      ],
    },
  ],
  backOpacity: 0.6,
  texts: [
    {
      title: "Reseña",
      subtitle: "El Grande",
      x: 0,
      y: 660 + yPos,
      instagramY: 540,
      scale: 1.3,
    },
    /*    {
      title: "El destino de Roanoke",
      subtitle: "",
      x: 0,
      y: 960 + yPos,
      instagramY: 540,
      scale: 0.9,
    }, */
  ],
  mirror: true,
};

export default data;
