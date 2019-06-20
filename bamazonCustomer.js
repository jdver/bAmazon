// Doing node [file name] in terminal will display all items available
// create db in mysql/require "inquirer"
// Create two prompts after list of items available
// First: What is the sku number of your item?
// Second prompt: How many would you like to buy?
// User enters input and our database checks we have enough amount for order
// If answer === false, console.log "Insufficient" and STOP process
// If response === true, update DataBase to reflect new remaining quantity
// Response to client total order/purchase cost
// DEPENDENCIES

var mysql = require('mysql')
var inquirer = require('inquirer')
var Table = require('cli-table')

// Establishing connection to mySQL
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'nodeUser',
  password: '',
  database: 'bamazon'

})

connection.connect(function (err) {
  if (err) throw err
})

// Display available items for sale
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
    shop()
  })
}

// Prompt user to input sku number for item
var shop = function () {
  inquirer.prompt({
    name: 'choice',
    type: 'input',
    message: 'Please enter the sku number for the item you would like to purchase'
  })
    .then(function (input) {
      var item = input.choice
      connection.query('SELECT * FROM products WHERE sku=?', item, function (err, res) {
        if (err) throw err
        if (res.length === 0) {
          console.log('Please enter a sku number from the items available')
          //  shop()

          shop()
        } else {
          inquirer.prompt({
            name: 'quantity',
            type: 'input',
            message: 'How many would you like to buy?'
          })
            .then(function (input2) {
              var quantity = input2.quantity
              if (quantity > res[0].stock_quantity) {
                console.log('Out of stock!')
                shop()
              } else {
                console.log('')
                console.log(res[0].product_name + ' purchased')
                console.log(quantity + ' qty @ $' + res[0].price)

                var updatedQuantity = res[0].stock_quantity - quantity
                connection.query('UPDATE products SET stock_quantity = ' + updatedQuantity + ' WHERE sku = ' + res[0].sku, function (err, res) {
                  if (err) throw err
                  console.log('')
                  console.log('Your order has been processed!')
                  console.log('Thank you!')
                  console.log('')
                  connection.end()
                })
              }
            })
        }
      })
    })
}

saleItems()
