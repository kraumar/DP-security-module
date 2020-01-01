const express = require("express");
// useless with DBConnector
const mysql = require("mysql");
const path = require("path");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const dbConnector = require("./DBConnector");
const dbConfig = require("./dbConfig.json");
const { prepareQuery } = require("./aspect");

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(express.static(path.join(__dirname, "public")));
app.use(dbConnector(dbConfig));

// aspect example
console.log(prepareQuery("select * from acl"));

app.get("/something", (req, res, next) => {
  req.getConnection((err, connection) => {
    if (!err) {
      // writing queries
      connection.query("select * from acl", (err, result) => {
        // handle result or err
        console.log(result);
        res.send("...");
      });
    } else {
      throw err;
    }
  });
});

// // create DB
// app.get("/createdb", (req, res) => {
//   let sql = "CREATE DATABASE test_db";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("database created...");
//   });
// });

// // dummy
// app.post("/marekkrauze", (req, res) => {
//   const userQuery = req.body.userQuery;
//   const checkedRole = req.body.checkedRole;
//   let resultFromMySQL;

//   // do the stuff
//   const write = writeSomething();

//   selectAll().then(results => {
//     resultFromMySQL = results;
//     res.send({
//       username: "Marek Krauze to fajny gosc",
//       userQuery,
//       checkedRole,
//       write,
//       resultFromMySQL
//     });
//   });

//   // res.json({ username: "Marek Krauze to fajny gosc", userQuery, checkedRadio });
// });

// // create table
// app.get("/createtesttable", (req, res) => {
//   let sql =
//     "CREATE TABLE test2_from_js(id int AUTO_INCREMENT, name VARCHAR(255), hobby VARCHAR(255), PRIMARY KEY (id))";
//   db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("Test table created");
//   });
// });

// // insert sample
// app.get("/addsome", (req, res) => {
//   let insert1 = { name: "Marek Krauze", hobby: "Psy i koty" };
//   let sql = "INSERT INTO test2_from_js SET ?";
//   let query = db.query(sql, insert1, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("insert1 created...");
//   });
// });

// // select all
// app.get("/getall", (req, res) => {
//   let sql = "SELECT * FROM test2_from_js";
//   let query = db.query(sql, (err, results) => {
//     if (err) throw err;
//     console.log(results);
//     res.send("select all...");
//   });
// });

// // select single
// app.get("/getsingle/:id", (req, res) => {
//   let sql = `SELECT * FROM test2_from_js WHERE id = ${req.params.id}`;
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(results);
//     res.send("single select...");
//   });
// });

// // update
// app.get("/update/:id", (req, res) => {
//   let newName = "Marek Krauze";
//   let sql = `Update test2_from_js SET name = "${newName}" WHERE id = ${req.params.id}`;
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("updated...");
//   });
// });

// // delete
// app.get("/delete/:id", (req, res) => {
//   let sql = `DELETE FROM test2_from_js WHERE id = ${req.params.id}`;
//   let query = db.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log(result);
//     res.send("deleted...");
//   });
// });

// // test calls
// const writeSomething = () => {
//   return "hello";
// };

// const selectAll = () => {
//   return new Promise((resolve, reject) => {
//     let sql = "SELECT * FROM acl_table_permission";
//     let query = db.query(sql, (err, results) => {
//       if (err) reject(new Error(err));
//       resolve(results);
//     });
//   });
// };

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
