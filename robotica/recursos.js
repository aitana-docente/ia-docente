/* RECURSOS DE CADA EQUIPO
   Aquí se añaden los vídeo tutoriales y la carpeta de manuales de cada equipo. Solo hay que editar este archivo.

   - documentacion: enlace a la carpeta de Drive con los manuales, la documentación y las prácticas de ese equipo
                    (si no hay enlace, la sección "Manuales y documentación" no aparece en la ficha).
                    Para varios enlaces o con título propio:  documentacion: [ { titulo: "Lecciones en LEGO Education", url: "https://..." } ]
   - videos:        enlaces a vídeos (YouTube, Drive, etc.)  ->  { titulo: "Nombre del vídeo", url: "https://..." }

   Ejemplo:
     "maqueen": {
       documentacion: "https://drive.google.com/drive/folders/XXXX",
       videos: [ { titulo: "Cómo montar el Maqueen", url: "https://www.youtube.com/watch?v=XXXX" } ]
     },
*/
window.RECURSOS = {
  "lego-coding-express": { // LEGO Coding Express
    documentacion: [{"titulo": "Manual y recursos de LEGO Education", "url": "https://education.lego.com/es-es/lessons/preschool-coding-express/"}],
    videos: [
      { titulo: "Vídeo presentación de LEGO Coding Express", url: "https://www.youtube.com/watch?v=KOapGIyXsu0" }
    ]
  },
  "mtiny-discovery-kit": { // mTiny Discovery Kit
    documentacion: "https://drive.google.com/drive/folders/1FMeAqVjXWxE408yPU1bf28TZfYI_bNbO?usp=drive_link",
    videos: [
      { titulo: "Primeros pasos", url: "https://www.youtube.com/watch?v=ZvHR4WCgVDg" },
      { titulo: "Configuración", url: "https://www.youtube.com/watch?v=22NhpLL4qpA" },
      { titulo: "Accesorios", url: "https://www.youtube.com/watch?v=v7g1uWQEtYg" },
      { titulo: "Programación", url: "https://www.youtube.com/watch?v=-Y_VZNgEoMI" },
      { titulo: "Consejos y trucos", url: "https://www.youtube.com/watch?v=KlVwXZQbggI" },
      { titulo: "Accesorios (expansión)", url: "https://www.youtube.com/watch?v=jpIl_xjxjg0" }
    ]
  },
  "lego-steam-park": { // LEGO Steam Park
    documentacion: [{"titulo": "Lecciones y recursos de LEGO Education", "url": "https://education.lego.com/es-es/lessons/preschool-steam-park/"}],
    videos: [
      { titulo: "Vídeo tutorial de LEGO Steam Park", url: "https://www.youtube.com/watch?v=cVJqrCWzadA" }
    ]
  },
  "lego-duplo": { // LEGO DUPLO
    documentacion: "",
    videos: [
      { titulo: "Torres tambaleantes (I)", url: "https://www.youtube.com/watch?v=6sSSdTKCPaU" },
      { titulo: "Torres tambaleantes (II)", url: "https://www.youtube.com/watch?v=6Sb2K1qCbec" },
      { titulo: "El equilibrista", url: "https://www.youtube.com/watch?v=vTs70bJAdMw" },
      { titulo: "Colgante", url: "https://www.youtube.com/watch?v=R8BNgyWh7FI" },
      { titulo: "Estabilidad", url: "https://www.youtube.com/watch?v=kj1l5ibj7qM" }
    ]
  },
  "bee-bot": { documentacion: "", videos: [] },  // Bee-Bot
  "codey-rocky": { // Codey Rocky
    documentacion: "https://drive.google.com/drive/folders/1_iknm-IwcikAXfjYKDA1-u0okYwY8QfJ?usp=drive_link",
    videos: [
      { titulo: "CODEY ROCKY 1: Presentación - Código Escuela 4 0", url: "https://www.youtube.com/watch?v=xxImL6yn_0Q" },
      { titulo: "CODEY ROCKY 2: Primeros pasos con Codey Rocky - Código Escuela 4.0", url: "https://www.youtube.com/watch?v=upj1nMZ4O2s" },
      { titulo: "CODEY ROCKY 3: Programación - Escuela 4.0", url: "https://www.youtube.com/watch?v=CPC07xTTPdo" },
      { titulo: "CODEY ROCKY 4: Accesorios - Código Escuela 4.0", url: "https://www.youtube.com/watch?v=QBGC5Mixu2Y" },
      { titulo: "CODEY ROCKY 5: Trucos y consejos - Código Escuela 4.0", url: "https://www.youtube.com/watch?v=Go0T9w6H1Fk" }
    ]
  },
  "lego-computer-science-ai": { documentacion: "", videos: [] },  // LEGO Computer Science & AI
  "lego-masterpiece-explore": { // LEGO Masterpiece Explore Set
    documentacion: [{"titulo": "Instrucciones de montaje - Libro 1", "url": "manuales/lego-masterpiece-libro-1.pdf", "tag": "PDF"}, {"titulo": "Instrucciones de montaje - Libro 2", "url": "manuales/lego-masterpiece-libro-2.pdf", "tag": "PDF"}],
    videos: [
      { titulo: "Masterpiece - Libro 1", url: "https://www.youtube.com/watch?v=omLvdqx1R0w&t=88s" },
      { titulo: "Masterpiece - Libro 2", url: "https://www.youtube.com/watch?v=un_W1QHGGQ4" }
    ]
  },
  "microbit-placas": { documentacion: "", videos: [] },  // Kit de placas programables Micro:bit
  "microbit-componentes": { documentacion: "", videos: [] },  // Equipo de componentes para Micro:bit
  "maqueen": { documentacion: "", videos: [] },  // Robot móvil programable Maqueen
  "nezha-inventor-kit": { documentacion: "", videos: [] },  // Inventor Kit Nezha para Micro:bit
  "cortadora-laser": { documentacion: "", videos: [] },  // Cortadora láser y purificador de aire
};
