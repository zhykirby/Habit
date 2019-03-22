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
})