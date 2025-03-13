const yCazagangas = 120;
const yCazagangasInstagram = 180;

const data = {
  numeroDeEdicion: 22,
  quality: 0.95,
  portada: [
    {
      src: "/images/ops/verano2.jpg",
      x: 0,
      y: 300,
      instagramX: 200,
      instagramY: 0,
      width: 1024,
      height: 1024,
      scale: 1,
      scaleInstagram: 1.4,
      blur:6,
      blurInstagram:3
    },
  ],
  portadaDimmer: 0,
  texts: [
    {
      title: "Rueda Lúdica de",
      subtitle: "",
      x: 0,
      y: 200 + yCazagangas,
      instagramY: 170 + yCazagangasInstagram,
      scale: 1,
    },
    {
      title: "",
      subtitle: "Verano II",
      x: 0,
      y: 150 + yCazagangas,
      instagramY: 150 + yCazagangasInstagram,
      scale: 1.2,
    },
    {
      title: "Tormenta de juegos",
      white: true,
      //subtitle: "de los mejores juegos jugados en 2024",
      x: 0,
      y: 450 + yCazagangas,
      instagramY: 380 + yCazagangasInstagram,
      scale: 1,
    },
    {
      title: "Top 10 Cazagangas",
     // white: true,
      subtitle: "",
      x: 0,
      y: 640 + yCazagangas,
      instagramY: 500 + yCazagangasInstagram,
      scale: 1.1,
    },
    {
      title: "",
     // white: true,
      subtitle: "de Enero",
      x: 0,
      y: 650 + yCazagangas,
      instagramY: 515 + yCazagangasInstagram,
      scale: .8,
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
