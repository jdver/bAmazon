// Doing node [file name] in terminal will display all items available
// create db in mysql/require "inquirer"
// Create two prompts after list of items available
// First: What is the sku number of your item?
// Second prompt: How many would you like to buy?
// User enters input and our database checks we have enough amount for order
// If answer === false, console.log "Insufficient" and STOP process
// If response === true, update DataBase to reflect new remaining quantity
// Response to client total order/purchase cost

var mysql = require('mysql')
var inquirer = require('inquirer')
var Table = require('cli-table')

var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'nodeUser',
  password: '',
  database: 'bamazon'

})

connection.connect(function (err) {
  if (err) throw err
  // console.log('Conncted as id: ' + connection.threadId)
  // saleItems()
  //  start()
})
var saleItems = function () {
  connection.query('SELECT * FROM products', function (err, res) {
    if (err) throw err
    console.log('-----------------------------')
    console.log('      Welcome To bAmazon    ')
    console.log('-----------------------------')
    console.log('')
    console.log('Products Available')
    console.log('')
    var table = new Table({
      head: ['Sku', 'Product Name', 'Price'],
      colWidths: [12, 45, 8],
      colAligns: ['left', 'left', 'right']
    })
    for (var i = 0; i < res.length; i++) {
      table.push([res[i].sku, res[i].product_name, res[i].price])
    }
    console.log(table.toString())
    console.log('')
    // saleItems()
  })
}

















saleItems()


