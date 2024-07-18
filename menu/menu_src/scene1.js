// 初期状態を描画
DrawStart();

function DrawWin() {
	// #gameContainerを変更する
	document.getElementById("gameContainer").innerHTML = '<div id="win"><div id="winMessage"></div></div>';
	// #winmessageに表示させる
	document.getElementById("winMessage").innerHTML = "You get a maguro!";
	// Escapeキーを押すと、DrawStartが呼ばれる
	document.addEventListener("keydown", function(event) {
		if(event.key === "Escape") {
			// windowをリロード
			window.location.reload();
		}
	});
}

function DrawLose() {
	// #gameContainerを変更する
	document.getElementById("gameContainer").innerHTML = '<div id="lose"><div id="loseMessage"></div></div>';
	// #losemessageに表示させる
	document.getElementById("loseMessage").innerHTML = "Game Over...";
	// Escapeキーを押すと、何も起こっていない初期状態に戻す
	document.addEventListener("keydown", function(event) {
		if(event.key === "Escape") {
			// windowをリロード
			window.location.reload();
		}
	});
}

function ResetGame() {
	// windowをリロード
    window.location.reload();
}

function DrawStart() {
	// #startmessageに表示させる
	document.getElementById("startMessage").innerHTML = "Click the button to start the game!";
}

function DrawBattle(){
    // アニメーションを適用する要素を作成
    var battleDiv = document.createElement('div');
    battleDiv.id = 'battle';
    battleDiv.className = 'battleAnimation'; // アニメーションのクラスを適用
    document.body.appendChild(battleDiv); // bodyに追加

    // アニメーションが完了したらDrawGameを呼び出す
    battleDiv.addEventListener('animationend', function() {
        DrawGame();
    });
}

function DrawGame() {
	// #gameContainerを変更する
	document.getElementById("start").innerHTML = `
	<div id="gameContainer">
		<div id="parameterView"></div>
    	<div id="imageContainer">
        	<div id="ImageView" style="position: relative">
            	<div id="herolife-frame">
                	<div id="herolife-bar"></div>
                	<div id="herolife-mark"></div>
            	</div>
            	<div id="enemylife-frame">
                	<div id="enemylife-bar"></div>
                	<div id="enemylife-mark"></div>
            	</div>
        	</div>
    	</div>
    	<div id="CMContainer">
        	<div id="commandView"></div>
        	<div id="messageView"></div>
    	</div>
    	<div>
			<input type="range" min="0" max="100" value="20"id="inputSlider" />
    	</div>
    	<div>
        	<p id="inputSliderResult"></p>
    	</div>
	</div>`;
	// lib1.jsを読み込む
	var scriptLib1 = document.createElement('script');
	scriptLib1.type = 'text/javascript';
	scriptLib1.src = 'lib1.js';
	document.body.appendChild(scriptLib1);

	// game1.jsを読み込む
	var scriptGame1 = document.createElement('script');
	scriptGame1.type = 'text/javascript';
	scriptGame1.src = 'game1.js';
	document.body.appendChild(scriptGame1);

	// hpbar1.jsを読み込む
	var scriptHpbar1 = document.createElement('script');
	scriptHpbar1.type = 'text/javascript';
	scriptHpbar1.src = 'hpbar1.js';
	document.body.appendChild(scriptHpbar1);
	// battleDiv要素を検索
    var battleDiv = document.getElementById('battle');
    // 1秒後にbattleDivが存在する場合、それを削除
	setTimeout(function(){
		if (battleDiv) {
			battleDiv.remove();
		}
	}, 100);
}

function DrawTetro1(){
    // アニメーションを適用する要素を作成
    var battleDiv = document.createElement('div');
    battleDiv.id = 'battle';
    battleDiv.className = 'battleAnimation'; // アニメーションのクラスを適用
    document.body.appendChild(battleDiv); // bodyに追加

    // アニメーションが完了したらDrawGameを呼び出す
    battleDiv.addEventListener('animationend', function() {
        DrawTetro();
    });
}

function DrawTetro(){    
    window.location.href = 'sushimaker.html'; // 'sushimaker.html'に遷移
}