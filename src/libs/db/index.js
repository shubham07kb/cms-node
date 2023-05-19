const mongo = require('./mongo');
const mysql = require('./mysql');
const postgre = require('./postgre');
async function insertOne(dbtype, dbvar, tablename, data) { 
    if (dbtype == 'mongodb') {
        console.log('ok');
        res=await mongo.insertOne(dbvar.url, dbvar.dbname, tablename, data);
    } else if (dbtype == 'mysql') {
        res=await mysql.insertOne(env);
    } else if (dbtype == 'postgre') {
        res=await postgre.insertOne(env);
    }
    console.log(res);
    return res;
}
async function update(dbtype, dbvar, tablename, predata, data) { 
    if (dbtype == 'mongodb') {
        res=await mongo.update(dbvar.url, dbvar.dbname, tablename, predata, data);
    } else if (dbtype == 'mysql') {
        res=await mysql.update(env);
    } else if (dbtype == 'postgre') {
        res=await postgre.update(env);
    }
    console.log(res);
    return res;
}
async function del(dbtype, db, env) { 
    if (dbtype == 'mongo') {
        res=await mongo.del(env);
    } else if (dbtype == 'mysql') {
        res=await mysql.del(env);
    } else if (dbtype == 'postgre') {
        res=await postgre.del(env);
    }
    return res;
}
async function query(dbtype, db, env) { 
    if (dbtype == 'mongo') {
        res=await mongo.query(env);
    } else if (dbtype == 'mysql') {
        res=await mysql.query(env);
    } else if (dbtype == 'postgre') {
        res=await postgre.query(env);
    }
    return res;
}
module.exports = {
    insertOne: insertOne,
    update: update,
    del: del,
    query: query
}