// as variáveis person, age e color são do scopo da função lol()
function lol() {
    let person = 'Tom';
    const age = 45;
    var color = 'teal';
    console.log(age);
  }

  // as variáveis color e age são do scopo da função changeColor()
  function changeColor() {
    let color = 'purple';
    const age = 19;
    console.log(age);
  }

  lol();
  changeColor();
  // age; Não existe
  // color; // Não existe
  // person; // Não existe
  
  
  let bird = 'mandarin duck';
  
  function birdWatch() {
    // variável bird é do scopo birdWatch()
    let bird = 'golden pheasant';
    console.log(bird); // golden pheasant
  }
  birdWatch();
  console.log(bird); // mandarin duck