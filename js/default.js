// ダイアログを表示
var result = window.confirm('私は一体何の数字を思い浮かべているのか、当ててみてください！');
//　結果を表示
if(result){
 document.getElementById('choice').textContent = 'OKが押されました';
}else{
 document.getElementById('choice').textContent = 'キャンセルが押されました'; }
