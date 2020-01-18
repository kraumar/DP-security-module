const fs = require("fs");

const { prepareQuery } = require("./aspect");

class DBSecurityModule {
  init(dbHost, dbUser, dbPassword, dbName) {
    const output = {
      host: dbHost,
      user: dbUser,
      password: dbPassword,
      database: dbName
    };

    fs.writeFileSync("./dbConfig.json", JSON.stringify(output));
  }

  getCredentials() {
    const jsonObj = JSON.parse(fs.readFileSync("./dbConfig.json", "utf8"));

    return jsonObj;
  }

  getRole() {
    const jsonObj = JSON.parse(fs.readFileSync("./role.json", "utf8"));
    const role = jsonObj.role;

    return role;
  }

  setRole(role) {
    const output = {
      role
    };

    fs.writeFileSync("./role.json", JSON.stringify(output));
  }

  getQuery() {
    const jsonObj = JSON.parse(fs.readFileSync("./query.json", "utf8"));
    const query = jsonObj.query;

    return query;
  }

  setQuery(query) {
    const output = {
      query
    };

    fs.writeFileSync("./query.json", JSON.stringify(output));
  }

  query() {
    const readyQuery = prepareQuery(this.getQuery());

    // save ready query
    const output = {
      query: readyQuery
    };
    fs.writeFileSync("./query.json", JSON.stringify(output));

    //  get result from /readyquery
    // ...
  }
}

const db = new DBSecurityModule();

// db.init("michnamarcin.pl", "DPuser", "polska1", "DPbase");
// db.setRole("admin");
// db.setQuery("select * from acl");
// db.query();

module.exports = DBSecurityModule;
