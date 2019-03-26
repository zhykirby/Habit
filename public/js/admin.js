$(function(){
    $("#write-sub").click(function(){
        $.ajax({
            url:"/api/write",
            type:"POST",
            data:{
                title:$("input[name='write-title']").val(),
                content:$(".writeContent").val(),
                date:$("input[name='write-time']").val(),
                user:$("#write-id").val()
            },
            dataType:'json',
            success:function(data){
                if (data.code === 30){
                    window.location.href = '/admin/status/success';
                }
            },
            error:function(err){
                throw err;
            }
        });
    });
    $("#user").click(function(){
        window.location.href = "/admin";
    });
    $("#diary").click(function(){
        window.location.href = "/admin/diary";
    });
    $("#edit").click(function(){
        window.location.href = "/admin/test";
    });
    $("#exit").click(function(){
        window.location.href = "/";
    });
    var i = 0;
    $("#more").on('click',function(){
        $("#more-content").animate({width:'toggle'});
    });
    
   
    $("#dailyEdit-sub").click(function(){
        $.ajax({
            url:"/api/dailyedit",
            type:"POST",
            data:{
                title:$("input[name='dailyEdit-title']").val(),
                content:$(".editContent").val(),
                date:$("input[name='dailyEdit-time']").val(),
                user:$("#write-id").val(),
                id:$("#daily-id").val()
            },
            dataType:'json',
            success:function(data){
                if (data.code === 41){
                    window.location.href = '/admin/status/success';
                }
            },
            error:function(err){
                throw err;
            }
        });
    });
    
    $("#mobile-user").click(function(){
        window.location.href = "/admin";
    });
    $("#mobile-diary").click(function(){
        window.location.href = "/admin/diary";
    });
    $("#mobile-edit").click(function(){
        window.location.href = "/admin/test";
    });
    $("#mobile-userInfo").click(function(){
        window.location.href = "/admin/create";        
    });
    $("#mobile-dailywrite").click(function(){
        window.location.href = "/admin/mobile-write";        
    });
    
    $("#userInfo-sub").click(function(){
        $.ajax({
            url:"/api/user/userInfo",
            type:"POST",
            data:{
                name:$("#mobile-name").val(),
                birthday:$("#mobile-birthday").val(),
                email:$("#mobile-email").val(),
                username:$(".mobile-username").val(),
                describtion:$("#mobile-describe").val()
            },
            dataType:'json',
            success:function(data){
                if (data.code === 20){
                    window.location.href = '/admin/status/success';
                }
            },
            error:function(err){
                throw err;
            }
        });
    });
    $("#back").on('click',function(){
        window.location.href = "/admin";
    });
    $("#mobileWrite-sub").click(function(){
        $.ajax({
            url:"/api/write",
            type:"POST",
            data:{
                title:$("#mobile-title").val(),
                content:$("#mobile-writeContent").val(),
                date:$("#mobile-date").val(),
                user:$(".mobile-username").val()
            },
            dataType:'json',
            success:function(data){
                if (data.code === 30){
                    window.location.href = '/admin/status/success';
                }
            },
            error:function(err){
                throw err;
            }
        });
    });
});




 /*
    $(".edit-more").click(function(){
        $.ajax({
            url:'/api/daily',
            type:"POST",
            data:{
                title:$('#d-t').val(),
                date:$("#d-d").val(),
                user:$("#d-u").val()
            },
            dataType:"json",
            success:function(data){
                if(data.code === 40){
                    window.location.href = '/admin/daily-edit';
                }
            },
            error:function(err){
                throw err;
            }
        });
    });

    $(".deleteDaily").click(function(){
        $.ajax({
            url:"/api/dailydelete",
            type:"POST",
            data:{
                id:$("#d-i").val()
            },
            dataType:'json',
            success:function(data){
                if (data.code === 42){
                    window.location.href = '/admin/status/success';
                }
            },
            error:function(err){
                throw err;
            }
        });
    });
    **/