const express = require('express');
const app = express();


// Error: Se está concatenando una cadena de consulta directamente en la consulta SQL, lo que puede llevar a inyección de SQL
app.get('/usuarios', (req, res) => {
    const userId = req.query.id;
    const query = 'SELECT * FROM usuarios WHERE id=' + userId;
    // Ejecutar la consulta SQL...
});

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});

// Puerto en el que se ejecutará el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
