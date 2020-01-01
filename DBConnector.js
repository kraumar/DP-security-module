const _mysql = require("mysql");

let _connection = "";
let _config = "";
let _middlewareFn = "";

module.exports = config => {
  if (!(config instanceof Object)) throw Error("config must be a Object");

  //config reference
  _config = config;
  _connection = _mysql.createConnection(config);
  _middlewareFn = (req, res, next) => {
    req.getConnection = callback => {
      //  return connection
      callback(null, _connection);
    };

    next();
  };

  return _middlewareFn;
};
