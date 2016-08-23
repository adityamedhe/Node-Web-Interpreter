$("#inp_term").terminal(function(command, term){
    term.echo('Hi')
}, {
    "greetings" : "Node REPL by Aditya",
    "prompt" : "Node>",
    "height" : "300",
    "name" : "js_demo"
})
