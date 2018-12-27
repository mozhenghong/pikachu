!function(){
    let code = document.querySelector('.code')
    let styleTag = document.querySelector('#styleTag')
    let n =0
    let content = `
    /*
    *今天，我要给大家画一个皮卡丘
    *首先，皮卡丘的脸是黄色的
    */

    .preview{
        background: #FEE433;
    }
    .wrapper {
        position: relative;
        height: 165px;
        width: 100%; 
    }

    /*然后画一下皮卡丘的鼻子*/

    .nose {
        border-top: 12px solid black;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 12px solid  transparent;
        width: 0;
        height: 0;
        border-radius: 11px;
        position: absolute;
        top: 28px;
        left: 50%;
        transform: translateX(-50%); 
    }

    /*接下来给皮卡丘加两只眼睛*/

    .eyes {
        width: 50px;
        height: 50px;
        background: #2E2E2E;
        border: 2px solid #000;
        border-radius: 50%;
        position: absolute; 
    }
    .eyes.left {
        right: 50%;
        margin-right: 90px; 
    }
    .eyes.right {
        left: 50%;
        margin-left: 90px; 
    }

    /*眼睛缺少了眼珠，把它加上吧*/

    .eyes::before {
        content: '';
        display: block;
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #fff;
        border: 2px solid #000;
        position: absolute;
        top: -1px;
        left: 5px; 
    }

    /*接下来，给皮卡丘加上点腮红吧*/

    .face {
        width: 68px;
        height: 68px;
        border-radius: 50%;
        background: #FC0D1C;
        border: 2px solid #000;
        position: absolute;
        top: 85px; 
    }
    .face.left {
        right: 50%;
        margin-right: 116px; 
    }
    .face.right {
        left: 50%;
        margin-left: 116px; 
    }

    /*然后，画一下皮卡丘的上嘴唇*/

    .upperLip {
        width: 80px;
        height: 25px;
        background: #FEE433;
        position: absolute;
        margin-top: 50px; 
    }
    .upperLip.left {
        border-left: 2px solid #000;
        border-bottom: 2px solid #000;
        border-bottom-left-radius: 40px 25px;
        transform: rotate(-20deg);
        right: 50%; 
    }
    .upperLip.right {
        border-right: 2px solid #000;
        border-bottom: 2px solid #000;
        border-bottom-right-radius: 40px 25px;
        transform: rotate(20deg);
        left: 50%; 
    }
    
    /*接着，把下嘴唇也画上吧*/

    .lowLipWrapper {
        position: absolute;
        bottom: 0;
        left: 50%;
        margin-left: -150px;
        width: 300px;
        height: 105px;
        overflow: hidden; 
    }
    .lowLip {
        background: #990513;
        width: 300px;
        height: 3500px;
        border: 2px solid #000;
        position: absolute;
        bottom: 0;
        border-radius: 200px/2000px;
        overflow: hidden; 
    }

    /*再给皮卡丘画个舌头*/

    .lowLip::before {
        content: '';
        display: block;
        background: #FC4A62;
        width: 100px;
        height: 100px;
        position: absolute;
        bottom: -20px;
        left: 50%;
        transform: translate(-50%);
        border-radius: 50px; 
    }

    /*好啦，一只可爱的皮卡丘就画完啦！*/
    `
    let duration = 50
    $('.buttons').on('click','button',function(e){
        let $button = $(e.currentTarget)
        $button.addClass('active').siblings().removeClass('active')
        let speed = $button.attr('data-speed')
        console.log(speed)
        switch(speed){
            case 'slow':
                duration = 100
                break;
            case 'middle':
                duration = 50
                break;
            case 'fast':
                duration = 10
                break;
        }
    })
    function writeCode(content){
        let id = setTimeout(function run(){
            n+=1
            code.innerHTML =  Prism.highlight(content.substring(0,n), Prism.languages.css, 'css');
            styleTag.innerHTML = content.substring(0,n)
            code.scrollTop = code.scrollHeight
            if(n<content.length){
                id = setTimeout(run,duration)
            }
        },10)
    }
    writeCode(content)
}.call()