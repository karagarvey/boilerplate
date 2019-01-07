const db = require('./database')
const Table1 = require('./table1')
const Table2 = require('./table2')

Table1.belongsTo(Table2)
Table2.hasMany(Table1)

module.exports = {
  db,
  Table1,
  Table2
}
