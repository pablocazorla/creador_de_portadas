const yPos = -25;

const data = {
  portada: [
    {
      src: "/images/ops/matcha-caja.jpg",
      x: 40,
      y: -30,
      width: 1200,
      height: 1200,
      scale: 0.93,
      points: [
        [0.32, 0.075],
        [0.78, 0.181],
        [0.782, 0.867],
        [0.32, 0.934],
        [0.215, 0.9],
        [0.215, 0.095],
      ],
    },
  ],
  backOpacity: 0.6,
  texts: [
    {
      title: "Unboxing",
      subtitle: "Matcha",
      x: 0,
      y: 590 + yPos,
      instagramY: 540,
      scale: 1.3,
    },
    {
      title: "Expa de The White Castle",
      subtitle: "",
      x: 0,
      y: 930 + yPos,
      instagramY: 540,
      scale: 0.9,
    },
  ],
  mirror: true,
};

export default data;
