$(function(){
    $('.Search').on('click',function(e){
        e.preventDefault();
        $('.search-box').addClass('searching');
        $('.del').addClass('huan');

        $('.menu').css({opacity:0,transform:'scale(0.4)'})
        $('body').addClass('active');
        $('.bannerBox .zhezhao').addClass('active');
    })
    $('.del').on('click',function(){
        $('.del').removeClass('huan');
        $('.search-box').removeClass('searching');
        $('.menu').css({opacity:1,transform:'scale(1)'})
        $('body').removeClass('active');
        $('.bannerBox .zhezhao').removeClass('active');
    })

    a=document.documentElement.clientHeight+'px';

    $('.list-phone').on('click',function(){

        $('.heng').toggleClass('zhuan');
        $('.shu').toggleClass('zhuan');
        $('.itemBox-phone').toggleClass('dong');
        if($('.itemBox-phone').hasClass('dong')){
            $('body').addClass('active');
            $('.nav-phone').css('background','#000');
            $('.itemBox-phone').css('height',a);
            $('.bag-phone').css('transform','translateX(200px)')
        }else{
            $('body').removeClass('active');
            $('.nav-phone').css('background','#333');
            $('.itemBox-phone').css('height',0);
            $('.bag-phone').css('transform','translateX(0)')
        }
    })
 //�ֲ�
    var items=$('.banner li');
    //console.log(items)
    var lis=$('.button li');

    var move=function(n,dir) {
        var active = $('.banner .active');
        active.addClass(dir).delay(600).queue(function(){
            $(this).removeClass(dir).removeClass('active').dequeue();
            return flag=true;
        });


        var op=(dir==='left')?'right':'left';
        $(n).addClass(op);
        $(n).get(0).offsetWidth;
        $(n).addClass('active').removeClass(op)
        $('.button li').removeClass('hot').eq(items.index($(n))).addClass('hot');

    }
    var zuo=$('.bannerBox .btn-left');
    var you=$('.bannerBox .btn-right');
    var flag=true;
    zuo.on('click',function(){

        if(flag){
            flag=false;
            var active = $('.banner .active');
            if(active.next().length){
                var n=active.next();
            }else{
                var n=items.eq(0)
            }
            move(n,'left');

        }else{
            return;
        }

    })
    you.on('click',function(){
        if(flag){
            flag=false;
            var active = $('.banner .active');
            if(active.prev().length){
                var n=active.prev();
            }else{
                var n=items.eq(3)
            }
            move(n,'right');
        }else{
            return;
        }

    })
    $('.button li').on('click',function(){
        if(flag){
            flag=false;
            var n=items.eq($(this).index());

            if($(this).index()>items.index($('.banner .active'))){
                move(n,'left');
            }
            if($(this).index()===items.index($('.banner .active'))){
                return flag=true;
            }
            if($(this).index()<items.index($('.banner .active'))){
                move(n,'right')
            }
            $(lis).removeClass('hot');
            $(this).addClass('hot')
        }else{
            return;
        }

    })
    var t=setInterval(function(){
        zuo.trigger('click')
    },2000);
    $('.bannerBox').on('mouseover',function(){
        clearInterval(t);
        $('.btn-left').addClass('over');
        $('.btn-right').addClass('over');
    });
    $('.bannerBox').on('mouseout',function(){
        t=setInterval(function(){
            zuo.trigger('click')
        },2000);
        $('.btn-left').removeClass('over');
        $('.btn-right').removeClass('over');
    })
    // $('.list-inner p span').on('click',function(){
    //     $(this).
    // })
})