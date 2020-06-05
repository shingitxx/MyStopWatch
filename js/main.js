'use strict';

{

    const timer = document.getElementById('timer');
    const start = document.getElementById('start');
    const stop = document.getElementById('stop');
    const reset = document.getElementById('reset');

    let startTime;
    //変数宣言
    let timeoutId;

    function countUp() {
       const d = new Date(Date.now() - startTime);
       //定数定義してメソッド追加 date経過ミリ秒 - startime現在時間
       const m = String(d.getMinutes()).padStart(2, '0');
       //定数定義してメソッド追加 分を表すmにdのgetMinutesを返してあげる
       const s = String(d.getSeconds()).padStart(2, '0');
       //定数定義してメソッド追加 秒を表すsにdのgetMinutesをかえしてあげる
       const ms = String(d.getMilliseconds()).padStart(3, '0');
       //定数定義してメソッド追加 ミリ秒を表すmsにdのgetMinutesをかえしてあげる
        timer.textContent = `${m}:${s}.${ms}`;
        
        
        timeoutId = setTimeout(() => {
            countUp();
        }, 10);
    }
    
    start.addEventListener('click', () => {
        //startIDにイベントを追加
        startTime = Date.now();
        // console.log(startTime);
            countUp();
            //
    });

    stop.addEventListener('click', () => {
        clearTimeout(timeoutId);
    });

}
