// Vulnerabilidades Helper

const secret_password = "secretPassword"
const mysql = require('mysql');

function getUserById(userId) {
    const connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'password',
        database: 'mydatabase'
    });

    const query = `SELECT * FROM usuarios WHERE id='${userId}'`; // Vulnerabilidad de SQL Injection

    connection.query(query, (error, results) => {
        if (error) return console.error("Error:", error);
        console.log("Resultado:", results);
    });

    connection.end();
}


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

