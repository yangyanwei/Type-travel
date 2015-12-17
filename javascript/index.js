window.onload = function(){



    var hezi = document.getElementById('hezi');

    for(var i=0;i<5;i++){
        for(var j=0;j<11;j++){
            var x = Math.random() * 4000 - 2000,
                y = Math.random() * 4000 - 2000,
                z = Math.random() * 4000 - 2000;
            var element = document.createElement( 'div' );
            element.setAttribute('class','element');
            element.style.backgroundColor = 'rgba(0,127,127,' + ( Math.random() * 0.5 + 0.25 ) + ')';
            element.style.position= 'absolute';
            element.style.top = 15+i*55+'px';
            element.style.left = 15+j*70+'px';
            hezi.appendChild(element);
            element.style.webkitTransform = 'translate3d('+x+'px,'+y+'px,'+z+'px)';
        }

    }
    var els = document.getElementsByClassName('element');
    setTimeout(function(){
        for(var i=0;i<els.length;i++){
            els[i].style.webkitTransform = 'translate3d(0,0,0)';
        }
    },200);

    for(i=0;i<els.length;i++){
        var aa =65+Math.floor(Math.random()*57);
        if(aa>=65 && aa<=90 || aa>=97 && aa<=122) {
            els[0].innerHTML = String.fromCharCode(aa);
            els[i].innerHTML = String.fromCharCode(aa);
        }else if(els[i].innerHTML=='' && i>0){i--;}
    }
    var test=0;
    var fenshu = document.getElementById('fenshu');
    var kaishi=false;
    document.onkeydown = function(e){
        var index = hezi.firstChild;
        if(e.shiftKey){
            if(e.keyCode !== index.innerHTML.charCodeAt(0))return;
            test +=1;
        }else{
            if(e.keyCode+32 !== index.innerHTML.charCodeAt(0))return;
            test +=1;
        }
        hezi.removeChild(index);
        fenshu.innerHTML=test;
        kaishi=true;
    };
    var content = document.getElementById('content');
    var texiao = document.getElementById('texiao');

    var miao = 0;
    var time = document.getElementById('shijian');
    var timeId = setInterval(function(){
        if(kaishi){
            miao++;
            time.innerHTML=miao;
        }
        if(hezi.children.length==0){
            clearInterval(timeId);
            if(time.innerHTML<=30){
                texiao.style.webkitTransform='rotateX(360deg)';
                content.innerHTML = '你很优秀';
            }
            if(time.innerHTML>=30 && time.innerHTML<= 60){
                texiao.style.webkitTransform='rotateX(360deg)';
                content.innerHTML = '你很一般';
            }
            if(time.innerHTML>60){
                texiao.style.webkitTransform='rotateX(360deg)';
                content.innerHTML = '你太差了';
            }
        }
    },1000);
    var chongzhi = document.getElementById('chongzhi');
    chongzhi.onclick = function(){
        location.reload();
    }












};
