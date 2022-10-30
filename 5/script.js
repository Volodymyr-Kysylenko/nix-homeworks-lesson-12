//Для тестування в розмітку додано багаторівневий список з Вікіпедії

for (let listItem of document.querySelectorAll('li')) {
    let listItemText = listItem.firstChild.data.replace(/\s/g, ''); //вибираємо вмість текстового вузла (який є першим дочірнім елементом li,
    //тобто firstChild) елементу li через властивість data; додатково видаляємо зайві пробіли
    if (listItemText) console.log(`Текст в li без піддерева: ${listItemText}`); //якщо такий вміст існує - виводимо його

    let nestedlistItemsCount = listItem.querySelectorAll('li').length;//рахуємо кількість всіх вкладених нащадків li в кожному li
    console.log(`Кількість нащадків в ${listItemText}: ${nestedlistItemsCount}`); //виводимо цю кількість до кожного li
}