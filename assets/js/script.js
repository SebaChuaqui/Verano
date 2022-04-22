window.onload = function() {
  
  const outfits = [
    {
      hairLeft:   "#b300ff", // lila
      hairRight:  "#9900F0",
      skinLeft:   "#5b586c", // black
      skinRight:  "#302e38",
      dressLeft:  "#00ffc6", // 
      dressRight: "#00ffc6",

    },
    {
      hairLeft:   "#000",
      hairRight:  "#000",
      skinLeft:   "#fff7bc",
      skinRight:  "#ccc596",
      dressLeft:  "#000",
      dressRight: "#000",

    },
    {
      hairLeft:   "#d80700",
      hairRight:  "#B20600",
      skinLeft:   "#ffffff",
      skinRight:  "#ffffff",
      dressLeft:  "#b4ff9f",
      dressRight: "#90cc7f",

    },
    {
      hairLeft:   "#e8ff4f",
      hairRight:  "#f4ff4f",
      skinLeft:   "#000",
      skinRight:  "#000",
      dressLeft:  "#000",
      dressRight: "#000",

    },
  ]

  let count = 0;

  // dejar el audio con muy poco volumen para que no moleste
  const audio = document.querySelector('audio')
  audio.volume = 0.1;

  // Tres listeners: 
  // Listener 1
  const cocoSuicida = document.querySelectorAll('.coco_suicida');
  cocoSuicida.forEach(coco => coco.addEventListener('click', cocoAlSuelo));

  // Listener 2
  const quitasol = document.querySelector('.umbrella_top');
  quitasol.addEventListener('click', cambiaColorQuitasol);

  // Listener 3
  const mujer = document.querySelector('.beach__people');
  mujer.addEventListener('click', cambiarAparienciaMujer);


  /* tirar el coco más oscuro al suelo y reproducir un sonido */
  function cocoAlSuelo(e) {
    document.querySelector('#drop-sound').currentTime = 0;
    document.querySelector('#drop-sound').play();
    e.target.style.transform = 'translateY(38px)';
  }

  /* hacer toggle al rojo del quitasol (azul) */
  function cambiaColorQuitasol(e) {
    const nuevoColor = document.querySelectorAll('.umbrella_top1');
    nuevoColor.forEach(e => e.classList.toggle('sun-umbrella-cambia-color'))
  }

  /**
   * cada vez que hacemos clic sobre la mujer, se le cambia
   * el color de ropa, piel y cabello.
   */
  function cambiarAparienciaMujer () {
    let countRemainder = count % 4;
    // console.log(outfits[count%4]);
    document.querySelector('.hair.left.top').style.fill = outfits[countRemainder].hairLeft;
    document.querySelector('.hair.left.bottom').style.fill = outfits[countRemainder].hairLeft;
    document.querySelector('.hair.right.top').style.fill = outfits[countRemainder].hairRight;
    document.querySelector('.hair.right.bottom').style.fill = outfits[countRemainder].hairRight;
    document.querySelector('.face.left').style.fill = outfits[countRemainder].skinLeft;
    document.querySelector('.arm.left').style.fill = outfits[countRemainder].skinLeft;
    document.querySelector('.face.right').style.fill = outfits[countRemainder].skinRight;
    document.querySelector('.ear').style.fill = outfits[countRemainder].skinRight;
    document.querySelector('.arm.right').style.fill = outfits[countRemainder].skinRight;
    document.querySelector('.dress.left').style.fill = outfits[countRemainder].dressLeft;
    document.querySelector('.dress.border.left').style.fill = outfits[countRemainder].dressLeft;
    document.querySelector('.dress.right').style.fill = outfits[countRemainder].dressLeft;
    document.querySelector('.dress.border.right').style.fill = outfits[countRemainder].dressLeft;
    count++;
  }

} // windows.onload scope -- no tocar!
