const yPos = 90;

const data = {
  title:'',
  
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
      src: "/images/ops/marrakesh.jpg",
      x: -600,
      y: 0,
      instagramX: 0,
      instagramY: 0,
      width: 6000,
      height: 4000,
      scale: 1,
      scaleInstagram: 1.2,
    },
  ],
  portadaDimmer: 0.5,
  texts: [
    {
      title: "Mi opinión sobre los juegos de",
      //white: true,
      x: 0,
      y: 530 + yPos,
      instagramY: 485,
      scale: 1.3,
    },
    {
      title: "",
      subtitle: "Stefan Feld",
      x: 0,
      y: 530 + yPos,
      instagramY: 340,
      scale:1.4,
    },
  
    
  ],
};

export default data;
