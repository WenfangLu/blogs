const status = {
    currentClickMenu:undefined
}

/*menu click event to section*/
window.smoothScroll = function(target){
    
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);
    
    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);
    
    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
})
/********************************************************** 
 * 事件開始
 *  *******************************************************/
var Event_clickBankVideo = function(){
    //   var dom = document.getElementById("banksinopacvideo");
    //   dom.style.display = "block";
    //   $("#myVideo").get(0).play();
}

var Event_clickcloseVideoBtn= function(){
    var dom = document.getElementsByClassName("closeVideoBtn")[0]
    dom.onclick = function(){
        var dom = document.getElementById("banksinopacvideo");
        var video = document.getElementById("myVideo");
        video.pause();
        video.currentTime = 0;
        dom.style.display = "none";
    }
     

}

var Event_clickWatchBankVideoBtn =function(){
    
    var dom = document.getElementById("watchBankVideoBtn");
    dom.onclick = function(){
        var dom = document.getElementById("banksinopacvideo");
        dom.style.display = "block";
        $("#myVideo").get(0).play();
    }
    
}

/********************************************************** 
 * 事件結束
 *  *******************************************************/
/********************************************************** 
 * 事件註冊開始
 *  *******************************************************/
 Event_clickBankVideo();
 Event_clickcloseVideoBtn();
 Event_clickWatchBankVideoBtn();
 
