const yCazagangas = 150;
const yCazagangasInstagram = 100;

const data = {
  numeroDeEdicion: 25,
  quality: 0.95,
  portada: [
    {
      src: "/images/ops/trickerion.png",
      x: 0,
      y: 50,
      instagramX: 100,
      instagramY: 0,
      width: 1500,
      height: 1500,
      scale: 0.58,
      scaleInstagram: 0.9,
      blur: 3,
      blurInstagram: 3,
    },
    {
      src: "/images/ops/muralla.jpg",
      x: -600,
      y: 0,
      instagramX: -205,
      instagramY: 0,
      width: 1134,
      height: 1134,
      scale: 0.7,
      scaleInstagram: 1,
      blur: 5,
      blurInstagram: 4,
    },
    // {
    //   src: "/images/ops/codex.png",
    //   x: -400,
    //   y: 0,
    //   instagramX: -200,
    //   instagramY: 0,
    //   width: 809,
    //   height: 793,
    //   scale: 0.6,
    //   scaleInstagram: 1,
    //   blur: 1,
    //   blurInstagram: 0,
    // },
    // {
    //   src: "/images/ops/gatos.jpg",
    //   x: 600,
    //   y: 0,
    //   instagramX: 0,
    //   instagramY: 0,
    //   width: 2000,
    //   height: 2000,
    //   scale: 1.4,
    //   scaleInstagram: 2.5,
    //   blur: 1,
    //   blurInstagram: 0,
    // },
    // {
    //   src: "/images/ops/scythe.jpg",
    //   x: -1500,
    //   y: 600,
    //   instagramX: 0,
    //   instagramY: 700,
    //   width: 4259,
    //   height: 3151,
    //   scale: 1.1,
    //   scaleInstagram: 1.5,
    //   blur: 0,
    //   blurInstagram: 0,
    // },
    // {
    //   src: "/images/ops/kingdomlegacy.png",
    //   x: -360,
    //   y: 80,
    //   instagramX: 0,
    //   instagramY: -100,
    //   width: 351,
    //   height: 492,
    //   scale: 0.7,
    //   scaleInstagram: 0.7,
    //   blur: 2,
    //   blurInstagram: 2,
    // },
  ],
  portadaDimmer: 0.5,
  texts: [
    {
      title: "Especial",
      subtitle: "Tormenta de juegos",
      x: 0,
      y: 240 + yCazagangas,
      instagramY: 220 + yCazagangasInstagram,
      scale: 0.8,
    },
    {
      title: "y se viene el",
      subtitle: "Top 10 de Cazagangas",
      x: 0,
      y: 530 + yCazagangas,
      instagramY: 420 + yCazagangasInstagram,
      scale: 0.8,
    },
    {
      title: "de Marzo 2025",
      subtitle: "",
      white: true,
      x: 0,
      y: 760 + yCazagangas,
      instagramY: 660 + yCazagangasInstagram,
      scale: 0.8,
    },
  ],
};

export default data;
