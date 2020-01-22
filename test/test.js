var mysql = require('mysql');


function setVar(val)
{
    myVar = val;
    console.log(val)
}

var connection = mysql.createConnection({
    "host": "michnamarcin.pl",
    "user": "DPuser",
    "password": "polska1",
    "database": "DPbase"
});

connection.connect();


var myVar = null;
connection.query("select * from acl", function (err, result)
{
    setVar(result);
    console.log("ok");
});
console.log(myVar);

class Klasa
{
    connec
}