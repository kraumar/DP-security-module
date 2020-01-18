const mysql = require("mysql");

const DBSecurityModule = require("./DBSecurityModule");
const db = new DBSecurityModule();

const connection = mysql.createConnection(db.getCredentials());

connection.connect();

// let queryStr;
// let fromDB = [];

// const getInformationFromDB = callback => {
//   queryStr = db.getQuery();
//   connection.query(queryStr, (err, result) => {
//     if (err) return callback(err);

//     if (result.length) {
//       for (let i = 0; i < result.length; i++) {
//         fromDB.push(result[i]);
//       }
//     }
//     callback(null, fromDB);
//   });
// };

let table = [];

const getInformationFromDB2 = queryStr => {
  return new Promise((resolve, reject) => {
    // queryStr = db.getQuery();
    connection.query(queryStr, (err, res) => {
      if (err) {
        reject(err);
      } else {
        for (let i = 0; i < res.length; i++) {
          table.push(res[i]);
        }
        resolve(table);
      }
    });
  });
};

// const queryDB = query => {
//   db.setQuery(query);

//   getInformationFromDB(async (err, result) => {
//     if (err) console.log("Database error!" + err);
//     else {
//       // console.log(result);
//       // db.setResponse(result);
//       res = await result;
//       return result;
//       connection.end();
//     }
//   });
// };

const queryDB2 = async query => {
  // db.setQuery(query);
  try {
    await getInformationFromDB2(query);
  } catch (e) {
    console.log(e);
  }
  connection.end();
  return table;
};

module.exports = { queryDB2, getInformationFromDB2 };
