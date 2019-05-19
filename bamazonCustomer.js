//Doing node [file name] in terminal will display all items available
//create db in mysql/require "inquirer"
//Create two prompts after list of items available
//First: What is the sku number of your item?
//Second prompt: How many would you like to buy?
//User enters input and our database checks we have enough amount for order
//If answer === false, console.log "Insufficient" and STOP process
// If response === true, update DataBase to reflect new remaining quantity
//Response to client total order/purchase cost

var mysql = require('mysql')
var inquirer = require('inquirer')

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: 'nodeUser',
    password:'',
    database:'bamazon'

})

connection.connect(function (err) {
    if (err) throw err
    console.log("Conncted as id: "+ connection.threadId)
    saleItems()
    start()
})

function saleItems () {
    var query = connection.query('SELECT * FROM products', function (err, res) {
        if (err) throw err
        for (var i = 0; i < res.length; i++) {
          console.log(`${res[i].sku} | ${res[i].product_name} | ${res[i].department_name} | ${res[i].price} | ${res[i].stock_quantity}`)
        }
        console.log('-----------------------------------')
      })
    }
    
    function start () {
    inquirer
    .prompt([
      {
        name: 'item',
        type: 'input',
        message: 'What is the item you would like to submit?'
      },
      {
        name: 'category',
        type: 'input',
        message: 'What category would you like to place your auction in?'
      },





