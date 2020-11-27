//Databse connectivity segment
var mysql=require("my-sql");
var connection = mysql.createConnection({
	host     : 'localhost',
	user     : 'root',
	password : '',    // give your root password here
	database : 'database_name'  //mention the name of the database that you want to link your app with
});
connection.connect(function(err){
	if(!err){
		console.log("Database successfully connected");
	}else{
		console.log("Error in connecting to the database");
	}
});
//Connection done
module.exports=connection;  // used to expose connection as a local module
