const orm = require('../config/orm');

//call the ORM functions using burger specific info  like table name = burgers
//module.exports all this 
//it should be set up as a burger object with methods in it

const burger = {
    view: cb => {
        orm.selectAll('burgers', cb);
    },
    add: (burgerObj, cb) => {
        orm.insertOne('burgers',burgerObj, cb);
    },
    edit: (changeObj, cb) => {
        orm.updateOne('burgers', changeObj, cb);
    }
}

module.exports = burger;