var exoress = require ('express');
var app = express();
var http = require('http').server(app);
var io = require('socket.io')(http);
const port = process.env.PORT || 3000;
app.use(express.static('public'));
app.get('/', (req,res) =>{
  res.sendfile(__dirname + '/views/index.html');
  htpp.listen(port, ()=> {
    console.log('app is running on port ${port}');
  });
}
