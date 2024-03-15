const express = require('express');
const app = express();

// Error: No se está manejando la promesa rechazada
app.get('/promesa', (req, res) => {
    Promise.reject(new Error('Error de promesa no manejado'));
});

// Error: No se está usando req ni res en la ruta
app.get('/ruta-sin-usar', () => {
    // Hacer algo sin usar req ni res
});

// Error: Se está concatenando una cadena de consulta directamente en la consulta SQL, lo que puede llevar a inyección de SQL
app.get('/usuarios', (req, res) => {
    const userId = req.query.id;
    const query = 'SELECT * FROM usuarios WHERE id=' + userId;
    // Ejecutar la consulta SQL...
});

// Error: No se está utilizando la función next() en el middleware
app.use((req, res, next) => {
    // Hacer algo sin llamar a next()
});

// Error: No se está manejando el caso de que la ruta no sea encontrada
app.use((req, res, next) => {
    res.status(404).send('Página no encontrada');
});

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
