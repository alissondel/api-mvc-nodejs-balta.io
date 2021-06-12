'use strict';

//Importações
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

//Carrega as rotas
const indexRoutes = require('./routes/index');
const productRoutes = require('./routes/product')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.use('/', indexRoutes);
app.use('/products', productRoutes)

module.exports = app


/*'use strict' -> força o Javascript a usar regras mais restritas pro seu código. 
Funciona bem se você sabe o que está fazendo. 
É uma boa prática sempre que você não tem que manter código ruim
*/

/* GET = Obtem as informações
   POST = Enviar as informações
   PUT = Atualizar
   Delete = Excluir as informações */