const { MongoClient } = require('mongodb')

const url = process.env.MONGODB_URI || 'mongodb://localhost:27017';
const client = new MongoClient(url)
const dbName = 'Supermarket'

let database = null

async function connect() {
  // Use connect method to connect to the server
  await client.connect();
  const db = client.db(dbName);
  database = db
}

function getDatabase() {
  return database
}

module.exports = { connect, getDatabase }
