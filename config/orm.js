const connection = require('../config/connection');

const orm = {
    //select all
    selectAll:function(table, cb){
        connection.query('SELECT * FROM ' + table + ';', (err, result) => {
            if (err) throw err
            cb(result);
        });
    },
    //insert one row
    insertOne:function(table,rowObj, cb){
        connection.query('INSERT INTO ' + table + ' SET ?;',rowObj, (err, result) => {
            if (err) throw err;
            cb(result);
        })

    },
    //update one row
    updateOne: function (table, updateObj, id, cb){
        connection.query('UPDATE '+ table +' SET ? WHERE id= ?;', [updateObj, id], (err, result) =>{
            if (err) throw err;
            cb(result);
        })
    }
}

module.exports = orm;
