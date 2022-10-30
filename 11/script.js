let list = document.createElement('ul');
document.body.append(list);
let input;
while (input !== null) {
    input = prompt('Уведіть елемент списка:');
    if (input !== null) {
        let listItem = document.createElement('li');
        listItem.innerText = input;
        list.append(listItem);
    }
}