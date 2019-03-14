$(function(){
    //隐藏注册页面
    $('#dl').click(function(){
        $('#register').fadeOut(1000);
        clearTimeout;
        setTimeout(function(){
            $('#login').fadeIn(1000);
        },1000);
    })
    $('#zc').click(function(){
        $('#login').fadeOut(1000);
        clearTimeout;
        setTimeout(function(){
            $('#register').fadeIn(1000);
        },1000);   
    })
    //注册
    $("#reg-but").click(function(){
        $.ajax({
            url:'/api/user/register',
            type:'POST',
            data:{
                username:$("input[name='username']").val(),
                password:$("input[name='password']").val(),
                confirm:$("input[name='confirm']").val()
            },
            dataType:'json',
            success:function(data){
                $('#reg-but').next().html("<font color='red'>"+data.message+"</font>");
                if(data.code === 0){
                    $('#register').fadeOut(1000);
                    clearTimeout;
                    setTimeout(function(){
                        $('#login').fadeIn(1000);
                    },1000);
                }
            },
            error:function(err){
                throw err;
            }
        });
    });
    //登录
    $("#log-but").click(function(){
        $.ajax({
            url:'/api/user/login',
            type:'POST',
            data:{
                userName:$("input[name='userName']").val(),
                passWord:$("input[name='passWord']").val()
            },
            dataType:'json',
            success:function(data){
                $('#log-but').next().html("<font color='red'>"+data.message+"</font>");
                if(data.code === 10){
                    clearTimeout;
                    setTimeout(function(){
                        window.location.href='/admin';
                    },4900)
                }
            },
            error:function(err){
                throw err;
            }
        });
    });
});