const { queryDB } = require("./../standaloneCon");
const roleFile = require("./role.json");

class AccessAllowance {
  constructor() {
    this.role = roleFile.role;
    this.permissions = "";
    this.asdf = queryDB("select * from roles");
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
}

const accessAllowance = new AccessAllowance();

console.log(accessAllowance.role);

// console.log(conn);
