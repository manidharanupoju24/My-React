var express = require('express')

// create our app
var app = express();

app.use(express.static('public')); //app.use lets you add the functionality to your express application
//express.static specifies a folder name that we are gonna expose to the web server
app.listen(3000,function(){ //starting the server using app.listen
  console.log('express server is up on port 3000');
});
