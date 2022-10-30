//Відповіді на питання

//1. Об'єктом якого класу є document?
//document є об'єктом класу HTMLDocument.
console.log(`document є об'єктом класу ${document.constructor.name}`);


//2. Яке місце він посідає у DOM-ієрархії?
//Щоб побудувати DOM-ієрархію для document використаємо властивість prototype.constructor.name, яка містить ім'я конструктора класу
//та пройдемось по цепочці прототипів за допомогою властивості __proto__:
console.log(document.constructor.name); //HTMLDocument
console.log(HTMLDocument.__proto__.prototype.constructor.name); //Document
console.log(Document.__proto__.prototype.constructor.name); //Node
console.log(Node.__proto__.prototype.constructor.name); //EventTarget - корінь ієрархії DOM
//Отже, DOM-ієрархія для document має вигляд: HTMLDocument -> Document -> Node -> EventTarget.


//3. Чи успадковується він від Node чи від Element, чи може від HTMLElement?
//Успадкування ми можемо побачити в побудованій вище ієрархії, однак також ми можемо використати оператор instanceof для перевірки:
console.log(document instanceof HTMLDocument);
console.log(document instanceof Document)
console.log(document instanceof Node);
console.log(document instanceof EventTarget);
//Отже document успадковується і від Node, і від Element, і від HTMLElement.