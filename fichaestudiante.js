// const carta = document.querySelector("#carta");

// function generarTarjeta() {
//   fetch("fichaestudiante.json")
//     .then((Response) => Response.json())
//     .then((data) => {
//       data.forEach((Contenido) => {
//         const nom = document.createElement("h1");
//         nom.innerHTML = `
//         <div class="nombre">${Contenido.nombre} </div>
//         `;
//         carta.appendChild(nom);
//       });
//     });
// }

// function generarTarjeta(){
//     var contenido1 = document.querySelector("#carta");
//     fetch("fichaestudiante.json")
//     .then(res => res.json())
//     .then(data =>{
//         data.forEach(element => {
//             console.log(element);
//         });
//         var correo = "<h1>nombre: " + data.nombre + "</h1>"
//         contenido1.innerHTML = correo;
//     });
// }

const datos = document.querySelector("#carta");

function generarTarjeta() {
  let i = 0;
  let cont = "";
  fetch("fichaestudiante.json")
    .then((res) => res.json())
    .then((est) => {
      var Contenido = Object.values(est.Contenido);

      for (i = 0; i < Contenido.length; i++) {
        console.log(Contenido);

        var nombre = `<div class="divNombre" > <h1 class="nombre">${Contenido[i].nombre}</h1>  <img class="foto" src="/FichaEstudiante/c4.jpg"> </div>`;
        var correo = `<div class="divLink">
        <img src="/FichaEstudiante/c7.png"> <a href="mailto:${Contenido[i].correo}?subject=Contacto_PaginaWeb" class="CORREO">CORREO</a> </div>`;
        var github = ` <div class="divLink">
        <img src="/FichaEstudiante/c.png"> <a href="${Contenido[i].github}" class="git">GITHUBG</a> </div>`;
        var neocities = `<div class="divLink">
         <img src="/FichaEstudiante/c3.png"> <a  href="mailto:${Contenido[i].neocities} class="neocities">NEOCITIES</a> </div>`;
      
        var actividad1 = `<div class="actividades">
        <a href="${Contenido[i].actividad1}" class="actividad1">Actividad 1: Finalizado: ${Contenido[i].porcentaje}</a> </div>`;
        var actividad2 = `<div class="actividades">
        <a href="${Contenido[i].actividad2}" class="actividad2">Actividad 2: Finalizado: ${Contenido[i].porcentaje}</a> </div>`;
        var actividad3 = `<div class="actividades">
        <a href="${Contenido[i].actividad3}" class="actividad3">Actividad 3: Finalizado: ${Contenido[i].porcentaje}</a> </div>`;
        var actividad4 = `<div class="actividades">
        <a href="${Contenido[i].actividad3}" class="actividad4">Actividad 4: Finalizado: ${Contenido[i].porcentaje}</a> </div>`;
        var actividad5 = `<div class="actividades">
        <a href="${Contenido[i].actividad3}" class="actividad5">Actividad 5: Finalizado: ${Contenido[i].porcentaje}</a> </div>`;
        var html = `<div class="estados">
        <p class="html">Html ${Contenido[i].html} </p>`;
        var js = `<p class="js">JavaScript ${Contenido[i].js} </p>`;
        var ux = `<p class="ux">UX ${Contenido[i].ux} </p> </div> `;
        var json = `<p class="json">Json ${Contenido[i].json} </p>`;
        var css = `<p class="css">Css ${Contenido[i].css} </p>`;


        cont += nombre + correo + github + neocities  + actividad1 + actividad2 + 
        actividad3 + actividad4 +actividad5 + html + css + js + json + ux;
      }
      datos.innerHTML = cont;
    });
}

//est.forEach(x => {
//     const nom = document.createElement("tr");
//     nom.innerHTML += `<td> ${x.Contenido['1']}</td>
//     ` ;
//     cheve.appendChild(nom);
// });

// const datos = [
//   {
//     nombre: "Sebastian Arango Villegas",
//     correo: "davidbediaz@gmail.com",
//     github: "https://github.com/zebasti4n?tab=repositories",
//     neocities: "https://zebasti4n.neocities.org/",
//     "actividad1": "https://zebasti4n.neocities.org/sopa%20de%20letras/Sopadeletras-.html",
//     "actividad2": "https://zebasti4n.neocities.org/conferencia/ConferenciaInicio.html",
//     "actividad3": "https://zebasti4n.neocities.org/flash%20cards/FlashCard.html",
//     actividad4": "https://zebasti4n.neocities.org/catalogo/catalogo.html",
//     actividad5": "https://zebasti4n.neocities.org/Carrito/Carrito.html",
//     porcentaje: "100%",
//     html: "100%",
//     css: "100%",
//     jss: "100%",
//     json: "100%",
//     ux: "100%",
//   },
// ];


// function plantilla(datos) {
//   return `<div class="encabezado">
//     <div><h1 class="nombre">${datos.nombre}</h1><p class="precio">Precio: ${datos.precio}</p>
//     <p class="cantidad">Cantidad: ${datos.cantidad}</p><p class="descripcion">${datos.descripcion}</p>
//     <button class="btn">Comprar</button>
//     </div></div>`;
// }
// const p1 = (document.getElementById(
//   "app"
// ).innerHTML = `<h1>Productos Disponibles(${
//   datosproductos.length
// }) </h1> ${datosproductos.map(plantilla).join("")} <p class="precio">Son ${
//   datosproductos.length
// }
//     productos que se han actualizado recientemente en el catalogo.</p><p class="cantidad">Verifique las actualizaciones periodicamente!!!</p><br>`);
