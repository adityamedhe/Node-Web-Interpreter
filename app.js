//express init and config
var express = require('express');
var app = express();

//express static dir config(s)
app.use(express.static('static'));

//routes
app.get('/', function(r, s) {
    r.sendFile('static/index.html');
});

app.post('/run', function(r, s) {
    
});


app.listen(process.env.PORT);
