const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors=require("cors");
const mysql = require("mysql");
const path = require('path');

const tableName = 'students'; //your table name
const tableSchema = 'mydb' //your table schema



//connection object init
var connection = mysql.createConnection({
    host:'localhost',
    user:'root', // change depending on your user
    password:'root', // change depending on your password
    database:'mydb' //change depending on your database
})
//sql connection
connection.connect((err) => {
    if(err)
        console.log(err)
    else 
        console.log("Connected")
})

//corsOptions for cross website 
const corsOptions ={
    origin:'*', 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200,
 }

//const resultQuery;



const app = express();
app.use(cors(corsOptions)) // use the corsOptions to allow cross website calls 

//this api responsible for column names
//change the destination if you want
app.get("/columns", (req,res) => {

    

    const sqlQuery = `select column_name
    from INFORMATION_SCHEMA.COLUMNS
    where TABLE_NAME='${tableName}' and table_schema = '${tableSchema}' order by ordinal_position asc;`; // order by ordinal_position will result in the same order in the dbms

    connection.query(sqlQuery, (err,result) => {
        if(err)
            res.send(err)
        else
            res.send(result)
    })

})


//this api responsible for fetching all table array
//change the destination if you want
app.get("/api" , (req,res) => {

    //query
    connection.query(`SELECT * FROM ${tableName}`, (err,result) => {
        if(err) console.log(err)
        else
            res.send(result)
    });


})


//this api is to handle the first load call
// i suggest you dont touch it
app.get("/api/:anything", (req,res) => res.redirect("/api"))

// this api is to handle the search 
app.get("/api/:column/:searchItem", (req,res) => {
    
    if(req.params.name == "" || req.params.name == " ")
        console.log("ERER")

    var searchItem = req.params.searchItem;
    var column = req.params.column;
   
    //query
    connection.query(`SELECT * FROM ${tableName} where ${column} like '${searchItem}%' `, (err,result) => {
        
        if(err) console.log(err)
            
        else
            res.send(result)
        });

})


app.listen("3001", () => {
    console.log("Server Started")
    
})