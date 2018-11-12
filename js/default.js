//　答え
var number = Math.floor(Math.random()*2);
var answer = parseInt(window.prompt('0～2の数字を入力してね！'))

var message;
if(answer === number){ message = '大当たり！お見事です！';
}else if(answer < number){ message = '残念！もうちょっと大きいよ！';
}else if(answer > number){ message = '残念！もうちょっと小さいよ！';
}else{ message = '0～2の数字を入力してね！'; }

//　結果を表示
 document.getElementById('choice').textContent = message;
