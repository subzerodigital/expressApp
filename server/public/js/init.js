//kick off app
$(function(){
    $('#loginForm').on('submit',function(evt){
        evt.preventDefault();
        var url = $(this).attr("data-action-url");
        var data = $(this).serialize();
        $.ajax({
           data:data,
           url:url,
           type:'POST',
           dataType:"json"
        }).done(function(resp){
            console.log(resp);
        });
    })
});
