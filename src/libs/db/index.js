const mongo = require('./mongo');
const mysql = require('./mysql');
const postgre = require('./postgre');
async function dbinsert(db, env) { 
    if (db == 'mongodb') {
        await mongo.insert(env);
    } else if (db == 'mysql') {
        await mysql.insert(env);
    } else if (db == 'postgre') {
        await postgre.insert(env);
    }
}
async function dbupdate(db, env) { 
    if (db == 'mongodb') {
        await mongo.update(env);
    } else if (db == 'mysql') {
        await mysql.update(env);
    } else if (db == 'postgre') {
        await postgre.update(env);
    }
}
async function dbdelete(db, env) { 
    if (db == 'mongo') {
        await mongo.del(env);
    } else if (db == 'mysql') {
        await mysql.del(env);
    } else if (db == 'postgre') {
        await postgre.del(env);
    }
}
async function dbquery(db, env) { 
    if (db == 'mongo') {
        await mongo.query(env);
    } else if (db == 'mysql') {
        await mysql.query(env);
    } else if (db == 'postgre') {
        await postgre.query(env);
    }
}
module.exports = {
    dbinsert: dbinsert,
    dbupdate: dbupdate,
    dbdelete: dbdelete,
    dbquery: dbquery
}