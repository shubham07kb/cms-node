var MongoClient = require('mongodb').MongoClient;
async function query() {

}
async function update() {
  var db = await MongoClient.connect(d);
  var dbo = await db.db(e);
  try {
    var r = await dbo.collection(a).updateOne(c, b);
    db.close();
    return { status: 'success', statcode: 1, message: r };
  } catch (e) {
    return { status: 'error', statcode: 0, message: e };
  }
}
async function del() {

}
async function insert() {
  var db = await MongoClient.connect(c);
  var dbo = await db.db(d);
  try {
    var r = await dbo.collection(a).insertOne(b);
    db.close();
    return { status: 'success', statcode: 1, message: r };
  } catch (e) {
    return { status: 'error', statcode: 0, message: e };
  }
}
module.exports = {
  query: query,
  update: update,
  del: del,
  insert: insert
}