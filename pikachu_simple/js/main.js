!function(){
    let duration = 50;
    function writeCode(prefix, code, fn) {
        let codeShow = document.querySelector('#code');
        let styleTag = document.querySelector('#styleTag');
        let n = 0;
        let id = setTimeout(function run(){
            n += 1;
            codeShow.innerHTML = code.substring(0, n);
            styleTag.innerHTML = code.substring(0, n);
            codeShow.scrollTop = codeShow.scrollHeight;
            if(n < code.length) {
                setTimeout(run, duration)
            } else {
                clearTimeout(id);
            }
        }, duration);
    }

    $('.actions').on('click', 'button', function(mouseEvent){
        let $button = $(mouseEvent.currentTarget);
        let playSpeed = $button.attr('data-speed');
        $button.addClass('active').siblings().removeClass('active');
        switch(playSpeed) {
            case 'slow':
            duration = 100;
            break;
            case 'normal':
            duration = 50;
            break;
            case 'fast':
            duration = 10;
        }
    });

    let code = `
    /*首先，准备皮卡丘的皮*/
    .pikachu-preview{
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FFE433;
    }
    .pikachu-board{
        width: 100%;
        height: 165px;
        position: relative;
    }
    /*接下来，准备皮卡丘的鼻子*/
    .pikachu-nose{
        width: 0px;
        height: 0px;
        border: 11px solid;
        border-width: 10px 12px;
        border-color: black transparent transparent; 
        position: absolute;
        left: 50%;
        top: 28px;
        transform: translateX(-50%);
        border-radius: 50%;
    }
    /*接下来，画两只皮卡丘的眼睛*/
    .pikachu-eye{
        width: 49px;
        height: 49px;
        background-color: #2E2E2E;
        position: absolute;
        border-radius: 50%;
        border: 2px solid #000;
    }
    /* 眼睛里面有眼神光 */
    .pikachu-eye::before{
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        position: absolute;
        border-radius: 50%;
        background-color: white;
        left: 6px;
        top: 1px;
        border: 1px solid black;
    }
    /*左眼在左边*/
    .pikachu-eye.left{
        right: 50%;
        transform: translateX(-100%);
    }
    /*右眼在右边*/
    .pikachu-eye.right{
        left: 50%;
        transform: translateX(100%);
    }
    /*制作皮卡丘萌萌的腮红*/
    .pikachu-face-flush{
        width: 80px;
        height: 80px;
        background-color: #FC0D1C;
        border-radius: 50%;
        border: 2px solid black;
        position: absolute;
    }
    /*左边的腮红*/
    .pikachu-face-flush.left{
        right: 50%;
        top: 50%;
        transform: translateX(-100%);
    }
    /*右边的腮红*/
    .pikachu-face-flush.right{
        left: 50%;
        top: 50%;
        transform: translateX(100%);
    }
    /*制作皮卡丘微微上扬的上嘴唇*/
    .pikachu-upper-lip{
        height: 25px;
        width: 80px;
        border: 3px solid black;
        position: absolute;
        top: 38%;
        background-color: #FFE433;
    }
    /*左上嘴唇*/
    .pikachu-upper-lip.left{
        right: 50%;
        border-bottom-left-radius: 40px 25px;
        border-top: none;
        border-right: none;
        transform: rotate(-21deg);
    }
    /*右上嘴唇*/
    .pikachu-upper-lip.right{
        left: 50%;
        border-bottom-right-radius: 40px 25px;
        border-top: none;
        border-left: none;
        transform: rotate(21deg);
    }
    /*制作皮卡丘的嘴巴*/
    .pikachu-mouse-cover{
        height: 120px;
        width: 200px;
        position: absolute;
        left: 50%;
        bottom: -15%;
        transform: translateX(-50%);
        overflow: hidden;
    }
    .pikachu-mouse{
        width: 120px;
        height: 200px;
        background-color: #d34251;
        border-bottom-left-radius: 100px 300px;
        border-bottom-right-radius: 100px 300px;
        border: 2px solid black;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        overflow: hidden;
    }
    
    /*嘴巴里面舌头部分的高光*/
    .pikachu-mouse::after {
        content:'';
        display: block;
        position: absolute;
        bottom: 0;
        height: 150px;
        width: 150px;
        background-color: pink;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 50%;
        top: 55%;
    }
    /* 好啦， 皮卡丘画完了~ */
    `
    writeCode('', code);
}.call();