/****************************************************************************************/
/* Pregunta:                                                                            */
/* - Utiliza un bucle for para imprimir los números del 1 al 5 en la consola.           */
/* - Escribe un condicional que muestre "Par" si un número es par y "Impar" si es impar */
/****************************************************************************************/

for (let i = 1; i <= 5; i++) {
  console.log(i % 2 === 0 ? `${i} es un número Par` : `${i} es un número Impar`);
}

// Result:
// - '1 es un número Impar' 
// - '2 es un número Par' 
// - '3 es un número Impar' 
// - '4 es un número Par' 
// - '5 es un número Impar'