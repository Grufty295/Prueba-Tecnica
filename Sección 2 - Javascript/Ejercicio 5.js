/************************************************************/
/* Pregunta:                                                */
/* Crea un array llamado colores con al menos tres colores. */
/* Añade un nuevo color al final del array.                 */
/* Elimina el primer color del array.                       */
/* Imprime el array resultante en la consola.               */
/************************************************************/

const coloresList = ['rosa', 'gris', 'morado'];

coloresList.push('rojo');

coloresList.shift();

console.log(coloresList); // Result: [ 'gris', 'morado', 'rojo' ]