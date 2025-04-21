import express from "express";

const app = express();
const port = 3001;

app.use(express.json);

app.get('/', (req, res) => {
    res.send('Bienvenido a mi servidor');
});

app.get('/saludo', (req, res) => 
{
    res.send('Hola Mundo');
});

app.get('/numero', (req, res) => {
    res.send(42);
});

app.get('/usuario', (req, res) => {
    res.send({ "nombre": "Ana", "edad": 25 } );
});

app.get('/productos', (req, res) => { 
    res.send([ "Mouse", "Teclado", "Monitor" ]);
});

app.get('/materias', (req, res) => {
    res.send([ { "nombre": "Matemática" }, { "nombre": "Lengua" } ] );
});

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`)
}) 

let personas = [];

app.post('/agregarpersona', (req, res) => {
    const nuevaPersona = req.body;
    personas.push(nuevaPersona);
    res.json({ mensaje: 'Persona agregada correctamente', persona: nuevaPersona });
});

app.get('/personas', (req, res) => {
    res.json(personas);
});

app.post('/borrarpersona', (req, res) => {
    const borrarPersona = req.body;
    if(!personas.includes(borrarPersona)){
        res.send("Persona no encontrada");
        return;
    }
    personas.splice(borrarPersona, 1);
    res.json({ mensaje: 'Persona borrada correctamente', persona: borrarPersona });
});