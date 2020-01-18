const mysql = require("mysql");

const DBSecurityModule = require("./DBSecurityModule");
const db = new DBSecurityModule();

const connection = mysql.createConnection(db.getCredentials());

connection.connect();

let queryStr;
let fromDB = [];

const getInformationFromDB = callback => {
  queryStr = db.getQuery();
  connection.query(queryStr, (err, result) => {
    if (err) return callback(err);

    if (result.length) {
      for (let i = 0; i < result.length; i++) {
        fromDB.push(result[i]);
      }
    }
    callback(null, fromDB);
  });
};

const queryDB = query => {
  db.setQuery(query);

  getInformationFromDB((err, result) => {
    if (err) console.log("Database error!" + err);
    else {
      console.log(result);
      connection.end();
    }
  });
};

module.exports = { queryDB };
