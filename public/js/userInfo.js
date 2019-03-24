$(function(){
    $('.submit').click(function(){
        $.ajax({
            url:'/api/user/userInfo',
            type:'POST',
            data:{
                username:$("input[name='username']").val(),
                name:$("input[name='name']").val(),
                birthday:$("input[name='birthday']").val(),
                email:$("input[name='email']").val(),
                describtion:$(".userDes").val()
            },
            dataType:'json',
            success:function(data){
                if(data.code === 20){
                    window.location.href = '/admin'
                }
            },
            error:function(err){
                throw err;
            }   
        });
    });
})