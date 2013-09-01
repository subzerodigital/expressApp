//kick off app
$(function(){

    //TODO: remove these on the full build

    //login form validation
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
    });

    //register log in validation

    $('#registerForm').validate({
        rules:{
            emailAddress:{
                required: true,
                email:true
            },
            password:{
                required:true
            },
            firstName:{
                required:true
            },
            lastName:{
                required:true
            }
        }
    });


    $('#registerForm').on('submit',function(evt){
       evt.preventDefault();

        if($(this).valid()){
            var url = $(this).attr("data-action-url");
            var data= $(this).serialize();
            //console.log(data);

            $.ajax({
               data:data,
               url:url,
               type:"POST",
                dataType:"json"
            }).done(function(resp){

                console.log(resp);
                    
            }).fail(function(resp){


                });
        }

    });

});
