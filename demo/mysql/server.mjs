// get the client
import { createConnection } from "mysql2";

// create the connection to database
const connection = createConnection({
  host: 'localhost',
  user: 'ratp',
  database: 'ratp',
  password: 'ratp',
  port: 3308
});

// simple query
connection.query(
  'SELECT * FROM `2021` WHERE `station` = "REPUBLIQUE"',
  function(err, results) {
    if(!err) console.log('resultat du 1er', results[0].id)
    else console.log('error', err)
  }
);

// with placeholder
connection.query(
  'SELECT * FROM `2021` WHERE `network` = ? AND `connection_1` > ?',
  ['Métro', 1],
  function(err, results) {
    if(!err) console.log('results 2', results.length)
    else console.log('error', err)
  }
);