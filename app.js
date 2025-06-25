let who = ['Fijate que el chichicuilote', 'Lo que pasó fue que Trump', 'Por mi madre santa que Pedro Picapiedras', 'Que me parta un rayo si miento. Daddy Yankee', 'Yo no soy de hablar por hablar, pero el borracho de la esquina'];
let action = ['mandó en un paquete a la isla de madagascar', 'mandó en una nave con Elon Musk', 'se fumó', 'se hizo un sandwich con', 'se hizo un abrigo con'];
let what = ['la tarea de mi sobrino', 'mi partida de nacimiento', 'el generador de electricidad de mi pueblo', 'mi licencia de conducir', 'todas mis camisas'];
let when = ['en plena hora de la siesta', 'justo antes del cafecito', 'ahoritica mismo', 'el unico dia que yo tenia de vacaciones', 'mientras yo cantaba en la ducha', 'el domingo cuando yo estaba a que la tia', 'durante el partido de los magallanes'];


function generateExcuse() {
 let randomWho = who[Math.floor(Math.random() * who.length)];
 let randomAction = action[Math.floor(Math.random() * action.length)];
 let randomWhat = what[Math.floor(Math.random() * what.length)];
 let randomWhen = when[Math.floor(Math.random() * when.length)];
 return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}.`;
}

window.onload = function() {
 document.getElementById("excuse").innerHTML = generateExcuse();
};
