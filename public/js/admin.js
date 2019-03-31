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
    $("#showMore").on('click',function(){
        $("#mobile-more").animate({width:'toggle'});
    })
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

    $("#mobileE-sub").click(function(){
        $.ajax({
            url:"/api/dailyedit",
            type:"POST",
            data:{
                title:$("#mobileE-title").val(),
                content:$("#mobileE-writeContent").val(),
                date:$("#mobileE-date").val(),
                id:$(".mobile-dailyid").val()
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
    $("#mobilep").click(function(){
        $.ajax({
            url:"/api/changePwd",
            type:"POST",
            data:{
                opwd:$("#mobile-opwd").val(),
                npwd:$("#mobile-npwd").val(),
                cpwd:$("#mobile-cpwd").val(),
                user:$(".mobile-username").val()
            },
            dataType:'json',
            success:function(data){
                $('#mobilep').next().html("<font color='red'>"+data.message+"</font>");
                clearTimeout;
                if(data.code === 50){
                    setTimeout(function(){
                        window.location.href = "/admin";
                    },1000);
                }
            },
            error:function(err){
                throw err;
            }
        });
    });
    $("#pwd-sub").click(function(){
        $.ajax({
            url:"/api/changePwd",
            type:"POST",
            data:{
                opwd:$("#opwd").val(),
                npwd:$("#npwd").val(),
                cpwd:$("#cpwd").val(),
                user:$("#pwd-user").val()
            },
            dataType:'json',
            success:function(data){
                $('#mobilep').next().html("<font color='red'>"+data.message+"</font>");
                clearTimeout;
                if(data.code === 50){
                    setTimeout(function(){
                        window.location.href = "/admin";
                    },1000);
                }
            },
            error:function(err){
                throw err;
            }
        });
    });
    $("#choice1").on('click',function(){
        $("#forChoice1").slideToggle();
    });
    $("#choice2").on('click',function(){
        $("#forChoice2").slideToggle();
    });
    $("#choice3").on('click',function(){
        $("#forChoice3").slideToggle();
    });
    $("#choice11").on('click',function(){
        window.location.href="/admin";
    });
    $("#choice12").on('click',function(){
        window.location.href="/admin/userInfo";
    });
    $("#choice13").on('click',function(){
        window.location.href="/admin/pwd";
    });
    $("#choice21").on('click',function(){
        window.location.href="/admin/diary";
    });
    $("#choice22").on('click',function(){
        window.location.href="/admin/write";
    });
    $("#choice31").on('click',function(){
        window.location.href="/admin/test";
    });
    $("#choice32").on('click',function(){
        window.location.href="/admin/habit-write";
    });
    $("#choice4").on('click',function(){
        window.location.href="/admin/about";
    });
    $("#choice5").on('click',function(){
        window.location.href="/";
    });
    $("#mChoice1").on('click',function(){
        window.location.href="/admin/mobile-user";
    });
    $("#mChoice3").on('click',function(){
        window.location.href="/admin/mobile-write";
    });
    $("#mChoice4").on('click',function(){
        window.location.href="/admin/mobile-about";
    });
    $("#addDiary").on('click',function(){
        window.location.href="/admin/mobile-write"
    });
    $("#habit-sub").click(function(){
        $.ajax({
            url:"/api/habitWrite",
            type:"POST",
            data:{
                user:$("#write-id").val(),
                name:$("input[name='habit-title']").val(),
                describe:$("input[name='habit-describe']").val(),
                color:$("input[name='color']:checked").val(),
                startdate:$("input[name='habit-date']").val()
            },
            dataType:'json',
            success:function(data){
                if (data.code === 60){
                    window.location.href = '/admin/status/success';
                }
            },
            error:function(err){
                throw err;
            }
        });
    });
});
