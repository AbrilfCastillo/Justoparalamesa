const areaTexto = document.getElementById("areaTexto");
let botonCalcular = document.getElementById("botonCalcular");
let botonMasIngredientes = document.getElementById("botonMasIngredientes");
const botonCopiar = document.getElementById("botonCopiar");

function ajustarReceta() {
  /*Obtención de elementos*/
  let inputTitulo = document.getElementById("titulo");
  let inputporcionReceta = document.getElementById("porcionReceta");
  let inputunidadesReceta = document.getElementById("unidadesReceta");
  let inputingrediente = document.getElementById("ingrediente");
  let inputcantidadIngred = document.getElementById("cantidadIngred");
  let inputporcNecesarias = document.getElementById("porcNecesarias");
  let inputcantConvertir = document.getElementById("cantConvertir");
  let selectUnidadIngred = document.getElementById("unidadIngred");
  let selectUnidadRec = document.getElementById("unidadRec");

  /*Conversión valor de inputs*/
  let unidadRec = selectUnidadRec.value;
  let unidadIngred = selectUnidadIngred.value;
  let titulo = inputTitulo.value;
  let porcionReceta = parseFloat(inputporcionReceta.value);
  let unidadesReceta = parseFloat(inputunidadesReceta.value);
  let ingrediente = inputingrediente.value;
  let cantidadIngred = parseFloat(inputcantidadIngred.value);
  let porcNecesarias = parseFloat(inputporcNecesarias.value);
  let cantConvertir = parseFloat(inputcantConvertir.value);

  const cantidadnectotal = porcNecesarias * cantConvertir;
  const cantidadorigtotal = porcionReceta * unidadesReceta;
  let mensaje = cantidadnectotal + "y" + cantidadorigtotal;
  let resultado = (cantidadnectotal * cantidadIngred) / cantidadorigtotal;
  mensaje =
    titulo +
    "\n" +
    "Para hacer " +
    porcNecesarias +
    " " +
    titulo +
    " de " +
    unidadesReceta +
    "" +
    unidadRec +
    " se necesitan: " +
    "\n" +
    "_" +
    resultado +
    "" +
    unidadIngred +
    " de " +
    ingrediente;
  areaTexto.value = mensaje;
}
let botonesagregarquitar = document.getElementById("botonesagregarquitar");
let columnaIngredientes = document.getElementById("columnaIngredientes");
let columnaCantidad = document.getElementById("columnaCantidad");
let columnaUnidad = document.getElementById("columnaUnidad");
function agregarIngredientes() {
  let nuevoIngrediente = document.createElement("input");
  let cantidadNuevoIngrediente = document.createElement("input");
  let unidadNuevoIngrediente = document.createElement("select");
  let botonquitarIngrediente = document.createElement("button");
  botonquitarIngrediente.innerText = "-";
  botonquitarIngrediente.classList.add("botones");
  nuevoIngrediente.type = "text";
  cantidadNuevoIngrediente.type = "number";
  botonquitarIngrediente.addEventListener("click", function () {
    quitarIngrediente(
      nuevoIngrediente,
      cantidadNuevoIngrediente,
      unidadNuevoIngrediente,
      botonquitarIngrediente
    );
  });
  if (columnaIngredientes.children.length <= 1) {
    botonquitarIngrediente.style.display = "none";
  } else {
    botonquitarIngrediente.style.display = "inline-block";
  }
  columnaIngredientes.appendChild(nuevoIngrediente);
  columnaCantidad.appendChild(cantidadNuevoIngrediente);
  columnaUnidad.appendChild(unidadNuevoIngrediente);
  botonesagregarquitar.appendChild(botonquitarIngrediente);
}

function quitarIngrediente(
  nuevoIngrediente,
  cantidadNuevoIngrediente,
  unidadNuevoIngrediente,
  botonquitarIngrediente
) {
  columnaIngredientes.removeChild(nuevoIngrediente);
  columnaCantidad.removeChild(cantidadNuevoIngrediente);
  columnaUnidad.removeChild(unidadNuevoIngrediente);
}

function copiarTexto() {
  areaTexto.select();
  document.execCommand("copy");
}
/*Funciones botones*/
botonCalcular.addEventListener("click", ajustarReceta);
botonMasIngredientes.addEventListener("click", agregarIngredientes);
botonCopiar.addEventListener("click", copiarTexto);
