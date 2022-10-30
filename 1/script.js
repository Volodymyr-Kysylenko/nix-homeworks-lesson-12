let div = document.body.firstElementChild;
alert(div);
//aбо
div = document.body.children[0];
alert(div);


let ul = document.body.lastElementChild;
alert(ul);
//aбо
ul = document.body.children[1];
alert(ul);


let li = document.body.lastElementChild.lastElementChild;
alert(li);
alert(li.innerHTML);
//aбо
li = document.body.lastElementChild.children[1];
alert(li);
alert(li.innerHTML);
