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
  var current = node;
  var next = node.children[0];
  var returnNode;
  
  while (next !== undefined) {
    current = current.children[0];
    next = current.children[0];
  }
  returnNode = current;
  return returnNode;
  
}