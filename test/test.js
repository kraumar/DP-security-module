var MySql = require('sync-mysql');

var connection = new MySql({
    host: 'michnamarcin.pl',
    user: 'DPuser',
    password: 'polska1',
    database: 'DPbase'
});

const result = connection.query('SELECT * FROM acl');
console.log(result);
