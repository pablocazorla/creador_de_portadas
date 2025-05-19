const yPos = 90;

const data = {
  title: "",

  quality: 0.95,
  portada: [
    {
      src: "/images/ops/feld-op.png",
      x: 600,
      y: 0,
      instagramX: 70,
      instagramY: 190,
      width: 1920,
      height: 1080,
      scale: 1,
      scaleInstagram: 1.2,
    },
    {
      src: "/images/ops/trickerion-portada.jpg",
      x: -440,
      y: 250,
      instagramX: 0,
      instagramY: 0,
      width: 1000,
      height: 1004,
      scale: 0.7,
      scaleInstagram: 1.2,
      xPos: -200,
      blur: 2,
    },
  ],
  portadaDimmer: 0.3,
  texts: [
    {
      title: "Reseña",
      subtitle: "Trickerion",
      x: 0,
      y: 530 + yPos,
      instagramY: 340,
      scale: 1.4,
    },
  ],
};

export default data;
