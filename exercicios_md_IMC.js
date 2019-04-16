var express = require("express");
var app = express();

app.get('/api/imc/:peso/:altura', (req, res) => {
    let peso   = req.params.peso;
    let altura = req.params.altura;
    let imc    = 0;

    imc = (peso / (altura * altura));
    res.send({IMC: imc});
});

app.listen(3000,
    function(){
        console.log("Servidor iniciado com ExpressJS");
    }
);