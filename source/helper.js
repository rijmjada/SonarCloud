// 1. Null Pointer Dereference
let obj = null;
console.log(obj.property); // Accediendo a una propiedad de un objeto nulo

// 2. Memory Leaks
function createArray() {
    let arr = [];
    return arr;
}

let leakedArray = createArray(); // El array nunca se libera

// 3. Dead Code
function deadCodeExample() {
    console.log("Este código está muerto");
    return;
    console.log("Esto nunca se ejecutará");
}

// 4. Unused Variables/Functions
let unusedVariable = 10;

function unusedFunction() {
    console.log("Esta función nunca se llama");
}

// 5. Resource Leaks
let unclosedFile = openFile("archivo.txt"); // Se abre un archivo pero nunca se cierra

// 6. Race Conditions
let counter = 0;

function incrementCounter() {
    counter++;
}

// 7. Exceptions Not Handled
function divide(a, b) {
    return a / b;
}

let result = divide(10, 0); // División por cero sin manejo de excepciones

// 8. Infinite Loops
while (true) {
    // Este bucle no tiene una condición de salida
}

// 9. Incorrect Logic
let isLoggedIn = false;

if (!isLoggedIn || isLoggedIn) {
    console.log("Esto nunca se imprimirá debido a la lógica incorrecta");
}

// 10. Unsafe Type Conversions
let unsafeString = "10";
let unsafeNumber = parseInt(unsafeString); // Conversión sin manejo de errores

console.log(unsafeNumber);
