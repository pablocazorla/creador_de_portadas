const yPos = -25;

const data = {
  portada: [
    {
      src: "/images/ops/pagan-caja.webp",
      x: 40,
      y: -30,
      width: 800,
      height: 800,
      scale: 1.4,
      points: [
        [0.79, 0.116],
        [0.84, 0.14],
        [0.824, 0.771],
        [0.2, 0.871],
        [0.17, 0.815],
        [0.146, 0.171],
      ],
    },
  ],
  backOpacity: 0.6,
  texts: [
    {
      title: "Reseña",
      subtitle: "Pagan",
      x: 0,
      y: 590 + yPos,
      instagramY: 540,
      scale: 1.3,
    },
    {
      title: "El destino de Roanoke",
      subtitle: "",
      x: 0,
      y: 960 + yPos,
      instagramY: 540,
      scale: 0.9,
    },
  ],
  mirror: true,
};

export default data;
