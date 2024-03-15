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

// 11. Uso de eval()
const userInput = "console.log('¡Hola, mundo!')";
eval(userInput); // Ejecutando código de usuario arbitrario, lo cual puede ser peligroso

// 12. Deserialización no segura de JSON
const maliciousPayload = '{"__proto__": {"isAdmin": true}}';
const userData = JSON.parse(maliciousPayload);
console.log(userData.isAdmin); // Podría permitir a un atacante obtener privilegios de administrador

// 13. Inyección de código SQL
const userId = "1 OR 1=1";
const query = `SELECT * FROM usuarios WHERE id=${userId}`;
// Esta consulta podría permitir a un atacante obtener acceso no autorizado a datos sensibles

// 14. Gestión insegura de archivos
const fs = require('fs');
fs.writeFileSync('/ruta/importante', 'Datos confidenciales');
// Escribir en ubicaciones sensibles del sistema de archivos puede ser explotado por atacantes

// 15. Dependencias con vulnerabilidades conocidas
// No se muestra código específico, pero el uso de bibliotecas con vulnerabilidades conocidas puede exponer la aplicación a riesgos de seguridad

// 16. Ausencia de autenticación y autorización
app.get('/admin', (req, res) => {
    if (req.user.isAdmin) {
        res.send('Página de administrador');
    } else {
        res.status(401).send('No autorizado');
    }
});
// Si no se implementa adecuadamente la autenticación y autorización, los atacantes podrían acceder a recursos protegidos

// 17. XSS (Cross-Site Scripting)
const userInput = "<script>maliciousCode()</script>";
res.send(`¡Hola, ${userInput}!`);
// La salida no escapada de entrada del usuario puede permitir a los atacantes inyectar scripts maliciosos en la página web

// 18. Exposición de información sensible
console.log(process.env.SECRET_KEY);
// La exposición de secretos u otra información sensible en el registro puede ser explotada por atacantes

