function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested').querySelector('.target');
}

function increaseRankBy(n) {
  const lis = document.getElementById("app").querySelectorAll('.ranked-list');
  
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (lis[i].parseInt + n).toString()
  }
}

function deepestChild(){
  const node = document.getElementById("grand-node");
  
  
}