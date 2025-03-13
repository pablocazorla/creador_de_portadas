const yCazagangas = 0;
const yCazagangasInstagram = 290;

const data = {
  numeroDeEdicion: 20,
  quality: 0.95,
  portada: [
    {
      src: "/images/ops/rock_hard.jpg",
      x: 1050,
      y: 0,
      instagramX: 0,
      instagramY: 0,
      width: 2500,
      height: 2500,
      scale: 0.8,
      scaleInstagram: 1,
    },
    {
      src: "/images/ops/wonder.jpg",
      x: -800,
      y: 0,
      instagramX: 0,
      instagramY: 0,
      width: 3900,
      height: 3900,
      scale: 0.7,
      scaleInstagram: 1,
    },
    {
      src: "/images/ops/harmonies.jpg",
      x: -400,
      y: 0,
      instagramX: 0,
      instagramY: 0,
      width: 899,
      height: 900,
      scale: 0.9,
      scaleInstagram: 1,
    },
    // {
    //   src: "/images/ops/20/sample_3.jpg",
    //   x: -1150,
    //   y: 0,
    //   instagramX: 0,
    //   instagramY: 0,
    //   width: 1024,
    //   height: 1024,
    //   scale: 0.55,
    //   scaleInstagram: 1,
    // },
  ],
  portadaDimmer: 0.6,
  texts: [
    {
      title: "Fin de año",
      subtitle: "Top 15",
      x: 0,
      y: 350,
      instagramY: 350 + yCazagangas,
      scale: 1.6,
    },
    {
      title: "de los mejores juegos jugados en 2024",
      white: true,
      //subtitle: "de los mejores juegos jugados en 2024",
      x: 0,
      y: 820 + yCazagangas,
      instagramY: 340 + yCazagangasInstagram,
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
