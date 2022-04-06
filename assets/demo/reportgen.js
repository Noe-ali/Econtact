
const boton = document.querySelector("#botonsucc");

var doc = new jsPDF();

boton.addEventListener("click", function(evento){

    doc.text(20, 20, 'Datos de incidencia #0001');
    doc.text(20, 30, 'Reporte de incidencia finalizada con estatus: COMPLETADO');
    doc.text(20, 40, 'Descripción: ');
    doc.text(20, 50, 'Se envian 14 unidades de computadoras Desktop ');
    doc.text(20, 60, 'modelo HP ENVY 3160 para cambio de tarjeta grafica')
    doc.text(20, 70, 'Actividades realizadas:');
    doc.text(30, 80, '- Apertura de equipo');
    doc.text(30, 90, '- Limpieza de placa base');
    doc.text(30, 100, '- Reemplazo de pieza: GPU');
    doc.save('Test.pdf');

});
