//express init and config
var express = require('express');
var bodyParser = require('body-parser');
var spawn = require('child_process').spawn;

var app = express();

//express static dir config(s)
app.use(express.static('static'));
app.use(bodyParser.urlencoded({
    extended: true
}));

//routes
app.get('/', function(r, s) {
    r.sendFile('static/index.html');
});

app.post('/run', function(r, s) {
    var code = decodeURI(r.body.code);
    runCode(code, s);
});

app.listen(process.env.PORT);


function runCode(code, response) {
    var py = spawn('python', ['-c', code]);
    py.stdout.on('data', function(data) {
        py.kill('SIGTERM');
        response.write((data))
        response.end();
        py.stdout.removeAllListeners();
        py.stderr.removeAllListeners('data');
    })
    
    py.stderr.on('data', function(data) {
        py.kill('SIGTERM');
        response.write(data);
        response.end();
        py.stdout.removeAllListeners();
        py.stderr.removeAllListeners('data');
    })
}