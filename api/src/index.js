const mysql = require('mysql2');
const express = require('express');

const app = express();

var connection = mysql.createConnection({
    host: 'mysql-container-test',
    user: 'root',
    password: 'root',
    database: 'db_site_frutas_test'
});

connection.connect();

app.get('/products', function(req, res){

    connection.query("SELECT * FROM products", function(error, results){

        if(error){
            throw error
        };

        res.send(results.map(item => ({name: item.name, price: item.price })));
    });

});

app.listen(9001, '0.0.0.0', function(){
    console.log('Listening on port 9001');
});