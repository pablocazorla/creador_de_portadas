const titleY = 600;
const titleYinstagram = 500;

const data = {
  title: "",

  quality: 0.95,
  portada: [
    {
      src: "/images/ops/harmony/2.jpg",
      x: 2000,
      y: 500,
      instagramX: 2500,
      instagramY: 0,
      width: 6000,
      height: 3376,
      scale: 1.2,
      scaleInstagram: 1.5,
      //blur: 5,
    },
    {
      src: "/images/ops/harmony/1.jpg",
      x: -800,
      y: 200,
      instagramX: -200,
      instagramY: 200,
      width: 1364,
      height: 1860,
      scale: 0.5,
      scaleInstagram: 1,
      // blur: 5,
    },
    {
      src: "/images/ops/harmony/3.jpg",
      x: -2200,
      y: 0,
      instagramX: -500,
      instagramY: 0,
      width: 6000,
      height: 3376,
      scale: 1,
      scaleInstagram: 1.6,
      // blur: 5,
    },
  ],
  portadaDimmer: 0.3,
  portadaDimmerInstagram: 0.4,
  blur: 10,
  blurInstagram: 5,
  titleY,
  titleYinstagram,
  texts: [
    {
      //title: "",
      subtitle: "Harmony",
      y: titleY - 30,
      instagramY: titleYinstagram - 20,
      scale: 1.6,
      instagramScale: 1,
    },
  ],
};

export default data;
