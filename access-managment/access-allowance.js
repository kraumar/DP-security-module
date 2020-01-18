const { queryDB2 } = require("./../standaloneCon");
const roleFile = require("./role.json");
// const responseFile = require("./response.json");

class AccessAllowance {
  constructor() {
    this.role = roleFile.role;
    this.permissions = "";
    this.query = "select * from roles";
    this.asdf = queryDB2(this.query);
  }

  // setResponseByQuery(query) {
  //   queryDB(query);
  //   this.asdf = responseFile;
  // }

  setQuery(query) {
    this.query = query;
  }

  addChild() {
    return undefined;
  }

  removeChild() {
    return undefined;
  }

  getChild() {
    return undefined;
  }

  async doAsdf() {}
}

const accessAllowance = new AccessAllowance();

console.log(accessAllowance.role);

const doAsync = async () => {
  const allowanceLevel1 = await accessAllowance.asdf;
  accessAllowance.setQuery("select * from acl");
  const allowanceLevel2 = await accessAllowance.asdf;

  console.log(allowanceLevel1);
  console.log(allowanceLevel2);
};

doAsync();

// console.log(accessAllowance.asdf);

// console.log(conn);
