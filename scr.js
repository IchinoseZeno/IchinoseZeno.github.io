let coin = 100000;

window.onload = function(){
  document.getElementByClassName('coin').innerHTML = coin;
}


function add(addcoin) {
  coin = coin + addcoin
  document.getElementByClassName('coin').innerHTML = coin;
};
