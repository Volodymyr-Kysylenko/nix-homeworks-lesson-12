//Таблицю з id="age-table".
let ageTable = document.querySelector('#age-table');
console.log(ageTable);
//або
ageTable = document.getElementById('age-table');
console.log(ageTable);
//або
ageTable = ageTable;
console.log(ageTable);


//Всі елементи label всередині цієї таблиці (їх три).
let labels = document.querySelectorAll('#age-table label');
console.log(labels);//колекція вузлів
//або
labels = ageTable.querySelectorAll('label');
console.log(labels);//колекція вузлів
//або
labels = ageTable.getElementsByTagName('label');
console.log(labels);//колекція HTML-елементів


//Перший td у цій таблиці (зі словом "Age").
let td = document.querySelector('#age-table td');
console.log(td);
//або
td = ageTable.rows[0].cells[0];
console.log(td);
//або
td = ageTable.getElementsByTagName('td')[0];
console.log(td);


//Форму form з ім'ям name = "search".
let searchForm = document.querySelector('form[name = "search"]');
console.log(searchForm);


//Перший input у цій формі.
let searchFormFirstInput = document.querySelector('form[name = "search"] input');
console.log(searchFormFirstInput);
//або
searchFormFirstInput = searchForm.querySelector('input');
console.log(searchFormFirstInput);
//або
searchFormFirstInput = searchForm.getElementsByTagName('input')[0];
console.log(searchFormFirstInput);


//Останній input у цій формі.
let allInputs = document.querySelectorAll('form[name = "search"] input');
let searchFormLastInput = allInputs[allInputs.length - 1];
console.log(searchFormLastInput);
//або
allInputs = searchForm.querySelectorAll('input');
searchFormLastInput = allInputs[allInputs.length - 1];
console.log(searchFormLastInput);
//або
allInputs = searchForm.getElementsByTagName('input');
searchFormLastInput = allInputs[allInputs.length - 1];
console.log(searchFormLastInput);
