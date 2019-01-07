const Sequelize = require('sequelize')
const db = require('./database')

const Table2 = db.define('table2', {
  Name: {}
})

module.exports = Table2
