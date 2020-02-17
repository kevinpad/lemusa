// var a = true;
// var acumulado = 0;

// for (var i = 0; i <= 100; i++) {
//     if (i % 2 == 0 )
//        acumulado = acumulado + i;      
// }
// console.log(acumulado)

// var paso;
// var cl;
// var acomulado = 0;

// for (var paso = 0; paso <= 10; paso++) {
//     if( paso % 2 == 0)
//     acomulado = acomulado + paso;
//     for (var cl = 0.5;){
//         acomulado = paso % cl;
//     }
// }
// console.log(paso);


// var arreglo = ["-", "+", "*", "/", "^","="]
// for(i = 0;i<11; i++) {
//     for( j=0; j<11; j++)
//         document.write(arreglo[(i + j) % 6 ] + " | ")
//     document.write("<br>")
// }

/*var myname = new Object();
myname.firsname = "juan";
myname.lastname = "stang";
myname.birth = 1999;
myname.sex = ["masculino, femenino"]
var gustos = new Object();
gustos.deporte = ["futboll, Basket, atletismo"]
gustos.deporte = true;
gustos.deporte = basket = false;
if (gustos.futboll = true)
    alert("futboll,atletismo")
function mostrarPropiedades(objeto, nombreObjeto) {

    var resultado = ``;
    for (var i in objeto) {
      //objeto.name se usa para filtrar las propiedades
      if (objeto.name(i)) {
          resultado += `${nombreObjeto}.${i} = ${objeto[i]}\n`;
      }
    }
    return resultado;
}*/
/*var cadenaInvertida = "william";
var myFunction = function (original) {
  console.log(original)
return original.split("").reverse().join("");
}
function(n)*/
var datos = ["nombres", "apellidos", "telefono", "correos"];
var nombres = ["anderzon ", "achon ", "cristo ", "andrea ", "nicol ", "paola ", "ingrid ", "gerson ", "samuel ", "juan "];
var apellidos = ["cardenaz ", "monrroy ", "robayo ", "niño ", "gomez ", "padilla ", "garcia ", "rodriguez ", "perez ", "lopez "];
var edades = ["12", "41", "51", "92", "29", "27", "21", "17", "65", "26"];
var telefono = ["3178822362 ", "3124567890 ", "3215566897 ", "3135803601 ", "3119955167 ", "3118877120 ", "3126521456 ", "3195533453 ", "3128767290 ", "3119966097 "];
var correos = ["anderzon@gmail.com", "achon@gmail.com", "cristo@gmail.com", "andrea@gmail.com", "nicol@gmail.com", "paola@gmail.com", "ingrid@gmail.com", "gerson@gmail.com", "samuel@gmail.com", "juan@gmail.com"];

var a = Math.floor(Math.random() * 9)
var b = Math.floor(Math.random() * 9)
var c = Math.floor(Math.random() * 9)
var d = Math.floor(Math.random() * 9)

function generar() {
  var persona = {
    nombre: nombres[a]
}
  var personap = {
    apellodo: apellidos[b]
}
  var personae = {
    edad: edades[c]
}
  var personat = {
    tele: telefono[d]
}
  var personac = {
    correo: correos[a]
}
  document.write(JSON.stringify(persona));
  document.write(JSON.stringify(personap));
  document.write(JSON.stringify(personae));
  document.write(JSON.stringify(personat));
  document.write(JSON.stringify(personac));

}
