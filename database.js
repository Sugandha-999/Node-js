//Databse connectivity segment
var mysql=require("my-sql");
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',
	database : 'database_name'
});
connection.connect(function(err){
	if(!err){
		console.log("Database successfully connected");
	}else{
		console.log("Error in connecting to the database");
	}
});
//Connection done
module.exports=connection;
