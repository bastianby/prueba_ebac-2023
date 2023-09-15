//Nombre del sistema 
console.log("Sistema EBAC de registro de alumnos");


//Se define un arreglo de registro con datos de alumnos en EBAC
var registro = [

  //Muestra lista de datos de alumnos
  {nombre:"Sebastián Lorenzo", edad: "13", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End De Cero a Pro", correo: "kiniwahopcake@ebac.mx"},
  {nombre:"Maria hubbert", edad: "34", zonaResidencia: "Edo Mex", nombrePrograma: "Desarrollo Back End con Python", correo: "maria@.mx"},
  {nombre:"Andrea Lorenzza", edad: "16", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End De Cero a Pro", correo: "nasuka@ebac.mx"},
  {nombre:"Claudio Bruno", edad: "13", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End De Cero a Pro", correo: "cucho@ebac.mx"},
  {nombre:"Karla", edad: "28", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End De Cero a Pro", correo: "bosco@ebac.mx"},
];


//aqui asignamos la frase "agregarAlumno" al texto que da una serie de preguntas para poder añadir al alumno, y asi responder a la opcion
function agregarAlumno(){

  //Aqui preguntamos los datos del nuevo alumno
  var nombre = prompt("Ingrese el nombre del nuevo alumno");
  var zonaResidencia = prompt("Ingrese la zona de residencia del alumno");
  var edad = prompt("ingrese la edad del alumno");
  var nombrePrograma = prompt("Porfavor, ingrese su correo electronico");
  var correo = prompt("¿que programa desea estudiar?");



  //Hace posible la idea de agregar nuevo alumno
  var NuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, correo:correo}



 //Agrega los datos ya dichos a la lista
 registro.push(NuevoAlumno);

}

//aqui asignamos la frase "ConsultarAlumno" al texto que da una serie de preguntas de tal alumno, y asi responder a la opcion
function ConsultarRegistros(){



  //Este ciclo for itera sobre cada uno de los registros del arreglo
  for(var i = 0; i < registro. length; i++){

    //Lista de console.log permite ver al usuario el registro en la consola
   console.log ("Nombre:" + registro [i] .nombre);
   console.log ("Edad: " + registro [i] .edad);
   console. log("Zona de residencia :" + registro [i] .zonaResidencia); 
   console. log("Nombre del programa :" + registro [i] .nombrePrograma);
   console. log("correo electronico :" + registro [i] .correo)
  };  
}


//Esta funcion permite generar un nuevo arreglo que no contenga la informacion del alumno deseado
function EliminarAlumno(){

  //Preguntamos que alumno desea eliminar
  var NombreAeliminar = prompt("Ingrese el nombre del alumno que desea eliminar");

  //Utiliza el metodo filter para crear un nuevo arreglo sin el alumno a eliminar
  registro = registro.filter(alumno => alumno.nombre !== NombreAeliminar);

}


//Ciclo do while permite repetir el menu cuando es indicado hasta que no se cumpla la condicion
do{

  //Variable que toma la eleccion del usuario para ejecutar la funcion indicada
  var opcion = prompt ("Seleccione una opción: \n1. Agregar registro \n2. Consultar registro de alumnos \n3. Eliminar registro \n4. Salir");


  //Se declara este if para dar a elegir al usuario la opcion que desea

  if (opcion === "1"){
  agregarAlumno();
  } else if(opcion === "2" ){
   ConsultarRegistros();
  }else if(opcion === "3"){
  EliminarAlumno();
  }else if("Salida"){
  alert("Salir del programa");
  } else{
  alert("Opción no disponible, elige otra opción");
  }

  //Esta variable nos permite elegir si hacemos otra accion o cerramos el ciclo
   

  var continuar = prompt ("¿desea hacer otra accion? (S/N)")

  //while que se encarga de cerrar el ciclo 
}while(continuar === "s");


