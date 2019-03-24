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
    $("#more").click(function(){
        if(i === 0){
            $("#more-content").show();
            i = 1;
        }
        else{
            $("#more-content").hide();         
            i = 0;
        }
    });

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
    $("#mobile-user").click(function(){
        window.location.href = "/admin";
    });
    $("#mobile-diary").click(function(){
        window.location.href = "/admin/diary";
    });
    $("#mobile-edit").click(function(){
        window.location.href = "/admin/test";
    });
});