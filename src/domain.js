let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogges", "racom"];
let ext = ["com", "es"];

function comparar(extension, sujeto) {
  let extracto = "";
  for (let i = 3; i > 0; i--) {
    if (sujeto[sujeto.length - i] == extension[extension.length - i]) {
      extracto = extracto + sujeto[sujeto.length - i];
      if (extracto == extension) {
        break;
      }
    }
  }
  return extracto;
}

function modificar(extension, sujeto) {
  let extracto = "";
  let modificacion = "";
  for (let i = 3; i > 0; i--) {
    if (sujeto[sujeto.length - i] == extension[extension.length - i]) {
      extracto = extracto + sujeto[sujeto.length - i];
      if (extracto == extension) {
        modificacion = sujeto.slice(0, sujeto.length - extracto.length);
        break;
      }
    }
  }
  return modificacion;
}

pronoun.forEach((articulo) => {
  adj.forEach((adjetivo) => {
    noun.forEach((sujeto) => {
      ext.forEach((extension) => {
        if (comparar(extension, sujeto) == extension) {
          console.log(
            articulo + adjetivo + modificar(extension, sujeto) + "." + extension
          );
        } else {
          console.log(articulo + adjetivo + sujeto + "." + extension);
        }
      });
    });
  });
});
