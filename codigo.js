function mostrar(){
  var n = document.form.nombre.value;
  var c = document.form.correo.value;
  var nn = document.form.numero.value;
  if(n&&c&&nn){
    var parrafo = document.createElement('p');
    var texto = document.createTextNode("Nombre: "+n+"    Correo: "+c+"     Número: "+nn);
    parrafo.appendChild(texto);
    document.body.appendChild(parrafo);
  }
  else {
    alert("Incorrecto");
  }
}
