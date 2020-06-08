"use strict";

{
  const timer = document.getElementById("timer");
  const start = document.getElementById("start");
  const stop = document.getElementById("stop");
  const reset = document.getElementById("reset");

  let startTime;
  //変数宣言 startした時の実装
  let timeoutId;
  //変数宣言 stopした時の実装
  let elapsedTime = 0;
  //変数宣言 タイマーが走っていた時の維持 初期値は0にする

  function countUp() {
    const d = new Date(Date.now() - startTime + elapsedTime);
    //定数定義してメソッド追加 date経過ミリ秒 - startime現在時間
    //経過時間も含めてelapsedTimeをたしてあげる
    const m = String(d.getMinutes()).padStart(2, "0");
    //定数定義してメソッド追加 分を表すmにdのgetMinutesを返してあげる
    const s = String(d.getSeconds()).padStart(2, "0");
    //定数定義してメソッド追加 秒を表すsにdのgetMinutesをかえしてあげる
    const ms = String(d.getMilliseconds()).padStart(3, "0");
    //定数定義してメソッド追加 ミリ秒を表すmsにdのgetMinutesをかえしてあげる
    timer.textContent = `${m}:${s}.${ms}`;
    //timerIdを指定してtextContentで表示させる

    timeoutId = setTimeout(() => {
      //timeoutidとsettimeoutを同じ動きにする
      countUp();
      //countUpの実装
    }, 10);
    //10ミリ秒ずつ
  }

  function setButtonStateInitial() {
    //関数宣言 セットボタンの初期値
    start.classList.remove("inactive");
    stop.classList.add("inactive");
    reset.classList.add("inactive");
    //disabled 無効属性
  }

  function setButtonStateRunning() {
    //関数宣言 セットボタンの開始
    start.classList.add("inactive");
    stop.classList.remove("inactive");
    reset.classList.add("inactive");
  }

  function setButtonStateStopped() {
    //関数宣言 セットボタンのストップ
    start.classList.remove("inactive");
    stop.classList.add("inactive");
    reset.classList.remove("inactive");
  }

  setButtonStateInitial();

  start.addEventListener("click", () => {
    //startIDにイベントを追加
    if (start.classList.contains("inactive") === true) {
      return;
    }
    setButtonStateRunning();
    //ボタンの開始の状態を表す
    startTime = Date.now();
    // console.log(startTime);
    countUp();
    //
  });

  stop.addEventListener("click", () => {
    //stopIdを指定してイベントを追加
    if (stop.classList.contains("inactive") === true) {
      return;
    }
    setButtonStateStopped();
    //ボタンの開始の状態を表す
    clearTimeout(timeoutId);
    //押すとストップする
    elapsedTime += Date.now() - startTime;
    //ストップした時にdate.nowで現在時刻を保持する
  });

  reset.addEventListener("click", () => {
    //resetIdを指定してイベントを追加
    if (reset.classList.contains("inactive") === true) {
      return;
    }
    setButtonStateInitial();
    //ボタンの開始の状態を表す
    timer.textContent = "00.00.000";
    //押すとリセット時に上記指定になる
    elapsedTime = 0;
    //リセットした際に全てを0にする
  });
}
