let coin = 0;

function add(addcoin) {
  coin = coin + addcoin;
  return render_template('index.html', result = coin);
};

function getPass(idname){
  var result = document.getElementById(idname).value;
  alert("value値は「" + result + "」です");
}
export {coin};
