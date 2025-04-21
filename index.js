app.get('/', function(req,res){
    res.send('Bienvenido a mi servidor');
});

app.get('/saludo', function(req,res){
    res.send('Hola Mundo');
});

app.get('/numero', function(req,res){
    res.send('42');
});

app.get('/usuario', function(req,res){ 
    res.send({ "nombre": "Ana", "edad": 25 } );
});

app.get('/productos', function(req,res){ 
    res.send([ "Mouse", "Teclado", "Monitor" ]);
});

app.get('/materias', function(req,res){
    res.send([ { "nombre": "Matemática" }, { "nombre": "Lengua" } ] );
});


