var child_process = require("child_process");
var spawn = child_process.spawn;

var child = spawn('node', ['-i']);

child.on('error', function(err){
    console.log(err.message)
})

child.stdin.on('error', function(){})


child.stdout.on('data', function(data) {
    console.log(data.toString());
});


child.on('exit', function(code, signal) {
    console.log('Node process exited');
});

child.stdin.write('5+5\n');

