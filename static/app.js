$(".indeterminate").hide();

var editor = ace.edit("editor");
    editor.setTheme("ace/theme/monokai");
    editor.getSession().setMode("ace/mode/python");
  
    
$("#run-but").on('click', function(e) {
    
    var code = encodeURI(editor.getValue());
    $(".indeterminate").show();
    $.post('/run', {'code': code}, function(data) {
        $("#opwindow pre").text(data);
        $(".indeterminate").hide();
    })
})