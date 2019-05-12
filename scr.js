let coin = 10;

window.onload = function(){
  document.getElementByClassName('coin').innerHTML = coin;
}


function add(addcoin) {
  coin = coin + addcoin
  
};
