const areaTexto = document.getElementById("areaTexto");
let botonCalcular = document.getElementById("botonCalcular");
let botonMasIngredientes = document.getElementById("botonMasIngredientes");
const botonCopiar = document.getElementById("botonCopiar");
let botonquitarIngrediente = document.getElementById("botonquitarIngrediente");
botonquitarIngrediente.style.visibility = "hidden";

let botonesagregarquitar = document.getElementById("botonesagregarquitar");
let columnaIngredientes = document.getElementById("columnaIngredientes");
let columnaCantidad = document.getElementById("columnaCantidad");
let columnaUnidad = document.getElementById("columnaUnidad");

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

function agregarIngrediente() {
  let nuevoIngrediente = document.createElement("input");
  let cantidadNuevoIngrediente = document.createElement("input");
  let unidadNuevoIngrediente = document.createElement("select");
  nuevoIngrediente.type = "text";
  cantidadNuevoIngrediente.type = "number";

  columnaIngredientes.appendChild(nuevoIngrediente);
  columnaCantidad.appendChild(cantidadNuevoIngrediente);
  columnaUnidad.appendChild(unidadNuevoIngrediente);

  // Hace visible el botón de quitar
  botonquitarIngrediente.style.visibility = "visible";
}

function quitarIngrediente() {
  if (columnaIngredientes.children.length > 1) {
    let ultimoIngrediente = columnaIngredientes.lastElementChild;
    let ultimaCantidad = columnaCantidad.lastElementChild;
    let ultimaUnidad = columnaUnidad.lastElementChild;

    columnaIngredientes.removeChild(ultimoIngrediente);
    columnaCantidad.removeChild(ultimaCantidad);
    columnaUnidad.removeChild(ultimaUnidad);
  }

  // Oculta el botón de quitar si ya no hay suficientes elementos
  if (columnaIngredientes.children.length <= 1) {
    botonquitarIngrediente.style.visibility = "hidden";
  }
}

function copiarTexto() {
  areaTexto.select();
  document.execCommand("copy");
}

/* Funciones botones */
botonCalcular.addEventListener("click", ajustarReceta);
botonMasIngredientes.addEventListener("click", agregarIngrediente);
botonquitarIngrediente.addEventListener("click", quitarIngrediente);
botonCopiar.addEventListener("click", copiarTexto);
