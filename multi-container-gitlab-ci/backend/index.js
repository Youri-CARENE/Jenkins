const express = require('express');
const { Client } = require('pg');
const app = express();
const port = 3000;

const client = new Client({
  user: 'postgres',
  host: 'db',
  database: 'testdb',
  password: 'password',
  port: 5432,
});

client.connect();

app.get('/', (req, res) => {
  client.query('SELECT NOW()', (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(`Database time: ${result.rows[0].now}`);
    }
  });
});

app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
