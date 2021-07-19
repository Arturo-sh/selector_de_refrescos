var refresco = ["Pepsi", "Coca_Cola", "Manzanita", "Mundet", "Piñada", "Sangria", "Mirinda"];

function eleccionRefresco(){
    var aleatorio = parseInt(Math.random() * refresco.length);
    alert("El refresco elegido aleatoriamente fue: " + refresco[aleatorio]);
    console.log("El refresco elegido aleatoriamente fue: " + refresco[aleatorio]);
    //return refresco;
}

var listado = refresco.map(function(i){
  return '<li>'+ i +'</li>'
});

document.getElementById("opciones").innerHTML = listado;
 
// document.querySelector("div").innerHTML = JSON.stringify(refresco); // Esta implementacion usa el formato JSON para mostrar los valores del arreglo