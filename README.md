# live-search-app
<br>
<h1>This app is developed using react-redux-nodejs-mysql database</h1>
<br>
<h3>A search bar that fetches data from server based on user's current input without submitting</h3>
<br>
<pre>
 it fetches data from the server -> display it in a table
 
 a search bar is represented on top of the table and choices radio button beneath it
 
 the choices for search are taken from the database columns 
 (for example if your database has 3 columns {id,name,age} -> these will be the search choices)
 
 the application detects your database columns and data, you need only to do the database connection
</pre>
<br>
<hr>
<br>
<h1>
# A video that demonstrate how the search works
</h1>

https://user-images.githubusercontent.com/51764194/184923736-c8f87dab-2472-43f8-8a10-7c21e8661cc6.mp4

<br>
<hr>
<br>

 <h1>How to use</h1>

 <ol>
 
  <li>Download the zip file</li>
  <li>run { npm i } on both files and run {npm init -y on express file (backend folder)}</li>
  <li>make sure the main is {"main": "app.js"} in backend</li>
  <li>connect to your database {host,user,password,database} and change the tableName and tableSchema variables</li>  
  <li>Change api destination if you want</li>
 </ol>
 
 <br>
 <p>happy searching!</p>



