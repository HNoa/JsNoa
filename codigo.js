function mostrar(){
  var n = document.form.nombre.value;
  var c = document.form.correo.value;
  var nn = document.form.numero.value;
  if(n&&c&&nn){
    var p1 = document.createElement('p');
    var t1 = document.createTextNode("Nombre: "+n);
    var linea = document.createElement('br');
    p1.appendChild(t1);
    document.body.appendChild(p1);
    document.body.appendChild(linea);

    var p2 = document.createElement('p');
    var t2 = document.createTextNode("Correo: "+c);
    p2.appendChild(t2);
    document.body.appendChild(p2);
    document.body.appendChild(linea);

    var p3 = document.createElement('p');
    var t3 = document.createTextNode("Número: "+nn);
    p3.appendChild(t3);
    document.body.appendChild(p3);
    document.body.appendChild(linea);
  }
  else {
    alert("Incorrecto");
  }
}
