const express = require('express');
const cors = require('cors'); // Add this line
const app = express();
const port = 3001;

const corsOptions = {
    origin: 'http://localhost:3000'
};

app.use(cors(corsOptions)); // Add this line

app.get('/events', (req, res) => {
    // res.send('Hello World!');
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.flushHeaders();

    // Then you would push updates using res.write
    // For example:
    setInterval(() => {
        const date = new Date();
        const entities = ['Sala Nacedora 1', 'Sala Nacedora 2', 'Sala Nacedora 3', 'Sala Nacedora 4'];
        const causes = ['Temperatura Baja', 'Temperatura Alta', 'Humedad Baja', 'Humedad Alta'];
        const values = ['20', '30', '40', '50', '60', '70', '80', '90', '100'];
        const idAlerts = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
        const data = { 
            idAlerts: getRandomElement(idAlerts),
             entity: getRandomElement(entities),
             cause: getRandomElement(causes),
             value: getRandomElement(values), 
             date:
             date.toISOString()
        };
        console.log('Enviando evento', data);
        // Example usage of getRandomElement function
        res.write(`data: ${JSON.stringify(data)}\n\n`);

    }, 5000);
});

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

