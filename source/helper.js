

// Vulnerabilidades Helper

function nullPointerDereference() {
    // 1. Null Pointer Dereference
    let obj = null;
    console.log(obj.property); // Accediendo a una propiedad de un objeto nulo
}

function deadCode() {
    // 3. Dead Code
    function deadCodeExample() {
        console.log("Este código está muerto");
        return;
        console.log("Esto nunca se ejecutará");
    }
}

function infiniteLoops() {
    // 8. Infinite Loops
    while (true) {
        // Este bucle no tiene una condición de salida
    }
} 

