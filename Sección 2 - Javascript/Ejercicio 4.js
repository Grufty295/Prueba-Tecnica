/***************************************************************************************************/
/* Pregunta:                                                                                       */
/* - Crea un objeto persona con propiedades nombre y edad.                                         */
/* - Agrega un método llamado saludar que imprima un saludo con el nombre y la edad de la persona. */
/* - Llama al método saludar para mostrar el saludo.                                               */
/***************************************************************************************************/

class Persona {
  nombre = '';
  edad = 0;
  
  constructor({nombre, edad}){
    this.nombre = nombre;
    this.edad = edad;
  }
  
  saludar(){
    console.log(`Saludos ${this.nombre}, tienes una edad de ${this.edad}`)
  }
  
}

const persona = new Persona({ nombre: 'Sebastián Audetat', edad: 23 });

persona.saludar(); // Result: 'Saludos Sebastián Audetat, tienes una edad de 23'

