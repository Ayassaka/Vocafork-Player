(function() {
    $("#content").before( `
<div>
<audio
id="audioPlayer"
controls
style="margin: 15px">
Your browser does not support the
<code>audio</code> element.
</audio>
</div>
` );
    var path = window.location.pathname;
    $.post(path,'{"password":"null"}', function(data,status){
        var obj = $.parseJSON(data);
        if(typeof obj != 'null'){
            var item = obj.files[0];
            $("#audioPlayer")[0].src = document.URL + item.name;
        }
    });
})();