const yDiff = 160;

const data = {
  numeroDeEdicion: 18,
  quality: 0.95,
  portada: [
    {
      src: "/images/ops/daitoshi.jpg",
      x: 0,
      y: 960,
      instagramX: 250,
      instagramY: 810,
      width: 2320,
      height: 2320,
      scale: 1,
      scaleInstagram: 1.3,
    },
  ],
  portadaDimmer: 0.6,
  texts: [
    {
      title: "Tormenta de juegos",
      subtitle: "Daitoshi, Matcha y más!",
      x: 0,
      y: 230 + yDiff,
      instagramY: 210 + yDiff,
      scale: 1,
    },
    {
      title: "También te muestro lo que me traje de Chile!",
      subtitle: "",
      x: 0,
      y: 750 + yDiff,
      instagramY: 520 + yDiff,
      scale: 0.8,
    },
  ],
};

export default data;
