const yCazagangas = 140;
const yCazagangasInstagram = 290;

const data = {
  numeroDeEdicion: 21,
  quality: 0.95,
  portada: [
    {
      src: "/images/ops/summer.webp",
      x: 0,
      y: 200,
      instagramX: 0,
      instagramY: 0,
      width: 1100,
      height: 1100,
      scale: 1,
      scaleInstagram: 1,
    },
  ],
  portadaDimmer: 0.5,
  texts: [
    {
      title: "Especial",
      subtitle: "",
      x: 0,
      y: 350 + yCazagangas,
      instagramY: 370 + yCazagangas,
      scale: 1.3,
    },
    {
      title: "",
      subtitle: "Verano",
      x: 0,
      y: 250 + yCazagangas,
      instagramY: 320 + yCazagangas,
      scale: 1.7,
    },
    {
      title: "Arrancando el 2025",
      white: true,
      //subtitle: "de los mejores juegos jugados en 2024",
      x: 0,
      y: 740 + yCazagangas,
      instagramY: 460 + yCazagangasInstagram,
      scale: 1,
    },
    // {
    //   title: "del 2024",
    //   white: true,
    //   x: 0,
    //   y: 520 + yCazagangas,
    //   instagramY: 490 + yCazagangasInstagram,
    //   scale: 1,
    // },
  ],
};

export default data;
