const mysql = require("mysql");

const DBSecurityModule = require("./DBSecurityModule");
const db = new DBSecurityModule();

const connection = mysql.createConnection(db.getCredentials());

connection.connect();

const queryStr = "SELECT * FROM roles";
let fromDB = [];

const getInformationFromDB = callback => {
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

getInformationFromDB((err, result) => {
  if (err) console.log("Database error!");
  else console.log(result);
});

module.exports = { getInformationFromDB };
