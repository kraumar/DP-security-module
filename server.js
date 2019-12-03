const express = require("express");
const mysql = require("mysql");
const path = require("path");
const morgan = require("morgan");

const port = process.env.PORT || 3060;

// create connection
const db = mysql.createConnection({
  host: "michnamarcin.pl",
  user: "DPuser",
  password: "polska1",
  database: "DPbase"
});

// connect
db.connect(err => {
  if (err) {
    throw err;
  }

  console.log("MySql connected...");
});

const app = express();
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "public")));

// create DB
app.get("/createdb", (req, res) => {
  let sql = "CREATE DATABASE test_db";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("database created...");
  });
});

// create table
app.get("/createtesttable", (req, res) => {
  let sql =
    "CREATE TABLE test2_from_js(id int AUTO_INCREMENT, name VARCHAR(255), hobby VARCHAR(255), PRIMARY KEY (id))";
  db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("Test table created");
  });
});

// insert sample
app.get("/addsome", (req, res) => {
  let insert1 = { name: "Marek Krauze", hobby: "Psy i koty" };
  let sql = "INSERT INTO test2_from_js SET ?";
  let query = db.query(sql, insert1, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("insert1 created...");
  });
});

// select all
app.get("/getall", (req, res) => {
  let sql = "SELECT * FROM test2_from_js";
  let query = db.query(sql, (err, results) => {
    if (err) throw err;
    console.log(results);
    res.send("select all...");
  });
});

// select single
app.get("/getsingle/:id", (req, res) => {
  let sql = `SELECT * FROM test2_from_js WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(results);
    res.send("single select...");
  });
});

// update
app.get("/update/:id", (req, res) => {
  let newName = "Marek Krauze";
  let sql = `Update test2_from_js SET name = "${newName}" WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("updated...");
  });
});

// delete
app.get("/delete/:id", (req, res) => {
  let sql = `DELETE FROM test2_from_js WHERE id = ${req.params.id}`;
  let query = db.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("deleted...");
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
