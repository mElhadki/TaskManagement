$(document).ready(function(){
    $("#btn").click(function(){
        var username = $("#name").val();
        var password = $("#pass").val();
            if( username != "" && password != "" ){
                $.ajax({
                   url:'/login',
                   type:'post',
                   data:{username,password},
                   success:function(response){
                       if(response.request){
                                       // password correct
                                       console.log(response)
                                       localStorage.setItem("username", response.data[0].username);
                                       window.location.href="Home.html"; 
                                      

                       }else{
                           //password incorrect
                           $("#alert").css('display', 'block');

                       }


                   },
                   error:function(){
                       $("#alert").css('display', 'block');
                   }
               });
           }else{
               $("#alert").css('display', 'block');
           }
       });   
     }); 