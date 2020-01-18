const { getInformationFromDB } = require("../standaloneCon");

class AccessAllowance {
    constructor() {
        const roleFile = require("../role");
        this.role = roleFile.role;
        this.permissions = "";
        // this.asdf = getInformationFromDB();
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

console.log(conn);
