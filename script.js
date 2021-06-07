// console.log(5 && 7 && 0 && 'hello')

// console.log(!false)

// console.log( 5 || false || null)

// let balance = 10000;
// const payment = 2000;

// console.log(
//     `Общая стоимость заказа ${payment} кредитов. Проверяем доступное кол-во средств на счету`,
// );

// if (payment <= balance) {
//     balance -= payment;
//     // balance = balance - payment

//     console.log('Все хорошо, снимаем деньги... Спасибо за покупку!');
//     console.log(`На счету осталось ${balance} кредитов`);
// } else {
//     console.log('На счету недостаточно средств для продолжения операции!');
// }

// console.log('Операция завершена');

// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//     console.log(' Бронзовый партнер. Скидка 2%');
//     discount = 0.02;
// } else if (totalSpent >= 1000 && totalSpent < 5000) {
//     console.log(' Серебрянный партнер. Скидка 5%');
//     discount = 0.05;
// } else if (totalSpent >= 5000) {
//     console.log(' Золотой партнер. Скидка 10%');
//     discount = 0.1; 
// } else {
//     console.log(' не партнер. Скидка 0%');  
// }

// payment -= payment * discount;
// // payment = payment - payment * discount;

// console.log(`Оформлен заказ на сумму ${payment} со скидкой ${discount * 100}%`);

// totalSpent += payment;

// console.log(`Общая сумма, потраченная в магазине: ${totalSpent}`);



                // if - else 


// const stars = 8;
// let price;

// if (stars === 1) {
//     price = 20;
// } else if (stars === 2) {
//     price = 30;
// } else if (stars === 3) {
//     price = 50;
// } else if (stars === 4) {
//     price = 75;
// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого кол-ва звезд нет');
// }

// console.log(price);

                    //    switch


// const stars = 8;
// let price;

// switch (stars) {
//     case 1:
//         price = 20;
//         break;

//     case 2:
//         price = 30;
//         break;

//     case 3:
//         price = 50;
//         break;

//     case 4:
//         price = 75;
//         break;

//     case 5:
//         price = 120;
//         break;

//     default:
//         console.log('Такого кол-ва звезд нет');

// }

// console.log(price);


// const stars = 3;
// let price;

// if (stars === 1 || stars === 2) {
//     price = 20;

// } else if (stars === 3 || stars === 4) {
//     price = 50;

// } else if (stars === 5) {
//     price = 120;
// } else {
//     console.log('Такого кол-ва звезд нет');
// }

// console.log(price);


// const stars = 4;
// let price;

// switch (stars) {
//     case 1:
//     case 2:
//         price = 20;
//         break;


//     case 3:
//     case 4:    
//         price = 50;
//         break;

//     case 5:
//         price = 120;
//         break;

//     default:
//         console.log('Такого кол-ва звезд нет');

// }

// console.log(price);



//  Модуль 2 


//  массивы

//  Посчитать общую сумму в корзине:

// const cart = [54, 28, 105, 70, 92, 17, 120];

//  2. объявить переменную total до цикла
// let total = 0;

//  1. перебрать массив
// for (let i = 0; i < cart.length; i += 1){
//     console.log(cart[i]);

// //  3. каждый элемент приплюсовать к total
//     total += cart[i];
// }

// console.log(cart);

    //  ИЛИ:

// for (const value of cart) {
//     total += value;
//     }


// console.log("Total:", total);


//  4 добавить такс 

// for (let i = 0; i < cart.length; i += 1){
//     cart[i] = Math.round(cart[i] * 1.1);
// }

// console.log(cart);




//  посчитать сумму всех чётных чисел

// const numbers = [1, 5, 8, 9, 12, 4, 15, 27, 30, 18, 11];
// let total = 0;

//   1 переменная тотал

//  2  перебрать массив
// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     console.log(number);

//     //  3 на каждой иттерации проверить элемент на чётность
//     if (numbers[i] % 2 === 0) {
//         console.log('Чётное!');

//         //  4 если чётный, плюсуем к тотал
//         total += number;
//     }
// }

// console.log('Total: ', total);

//  ИЛИ

// for (const number of numbers) {
//     console.log(number);

//     if (number % 2 === 0) {
//         console.log(`${number} -чётное`);
//         total += number;

//     }
// }

// console.log('Total: ', total);

            // ИЛИ


// for (const number of numbers) {
//     if (number % 2 !== 0) {
//         console.log('эту итерацию нужно пропустить', number);
//         continue;
//     }

//     console.log(`${number} - чётное!`);
//     total += number;
// }


// console.log('Total: ', total);



//  Скрипт поиска логина (логика от обратного)

// const logins = ['m4ngoDone', 'kiwidab3st', 'polyIscute', 'aj4xth3m4n'];
// const loginToFind = 'polyIscute';
// let message = `Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];

//     console.log('Login: ', login);
//     console.log(`${login} === ${loginToFind}:`, login === loginToFind);

//     if (login === loginToFind) {
//         console.log('ура, найден!');
//         message = `Ползователь ${loginToFind} найден`;
//         break;
//     }
// }

// console.log(message);

//    ИЛИ 

// const logins = ['m4ngoDone', 'kiwidab3st', 'polyIscute', 'aj4xth3m4n'];
// const loginToFind = 'polyIscute';
// let message = `Пользователь ${loginToFind} не найден.`;


// for (const login of logins) {
//      console.log('Login: ', login);
//     console.log(`${login} === ${loginToFind}:`, login === loginToFind);

//     if (login === loginToFind) {
//         console.log('ура, найден!');
//         message = `Ползователь ${loginToFind} найден`;
//         break;
//     }
// }

// console.log(message);

// const logins = ['m4ngoDone', 'kiwidab3st', 'polyIscute', 'aj4xth3m4n'];
// const loginToFind = 'polyIscute';
// let message = `Пользователь ${loginToFind} не найден.`;


// console.log(logins.includes(loginToFind));

        // ИЛИ


// const logins = ['m4ngoDone', 'kiwidab3st', 'polyIscute', 'aj4xth3m4n'];
// const loginToFind = 'polyIscute';
// // декларативный код
// const message = logins.includes(loginToFind)
//     ? 'Ползователь ${loginToFind} найден'
//     : 'Пользователь ${loginToFind} не найден.'; 

// console.log(message);


//  скрипт для поиска наименьшего числа в массиве, при условии, что числа не повторяются

// const numbers = [51, 18, 13, 24, 7, 85, 19];
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
// }

// console.log('smallestNumber: ', smallestNumber);


//  join

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// const string = friends.join('-');
// console.log(friends);
// console.log(string);


//  Inverted

// const string = 'JavaScript';
// const letters = string.split('');
// let invertedString = '';

// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);
// const isEqual = letter === letter.toLowerCase();

// invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();

// }

// console.log('invertedString: ', invertedString)



//  SLUG (декларативный код, абстракция. Методы вызываются последовательно)

// const title = 'Top 10 benefits of React framework';

// const slug = title.toLowerCase().split(' ').join('-');

// console.log(slug);


//  найти логин из списка поролей

// const logins = ['m4ngoDoge', 'kiwidab3st', 'polyIscute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//     for (const login of allLogins) {
//         if (login === loginToFind) {
//             return `Пользователь ${loginToFind} найден`;
//         }
//     }

//     return `Пользователь ${loginToFind} не найден`;
// }

// console.log(findLogin(logins, 'avacod3r'));
// console.log(findLogin(logins, 'kiwidab3st'));
// console.log(findLogin(logins, 'j4maL'));
// console.log(findLogin(logins, 'polyIscute'));

// const logins = ['m4ngoDoge', 'kiwidab3st', 'polyIscute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//     const message = allLogins.includes(loginToFind) 
//     ? `Пользователь ${loginToFind} найден`
//         : `Пользователь ${loginToFind} не найден`;
//     return message;
// }

// console.log(findLogin(logins, 'avacod3r'));
// console.log(findLogin(logins, 'kiwidab3st'));
// console.log(findLogin(logins, 'j4maL'));
// console.log(findLogin(logins, 'polyIscute'));

// const logins = ['m4ngoDoge', 'kiwidab3st', 'polyIscute', 'aj4xth3m4n'];

// const findLogin = function (allLogins, loginToFind) {
//     return  allLogins.includes(loginToFind) 
//         ? `Пользователь ${loginToFind} найден`
//         : `Пользователь ${loginToFind} не найден`;

// }

// console.log(findLogin(logins, 'avacod3r'));
// console.log(findLogin(logins, 'kiwidab3st'));
// console.log(findLogin(logins, 'j4maL'));
// console.log(findLogin(logins, 'polyIscute'));


//  поиск наименьшего числа

// const findSmallestNumber = function(numbers) {
// let smallestNumber = numbers[0];

// for (const number of numbers) {
//     if (number < smallestNumber) {
//         smallestNumber = number;
//     }
//     }
//     return smallestNumber;
// }
// console.log(findSmallestNumber[5, 18, 23, -2, 7, 10, 19]);
// console.log(findSmallestNumber[45, 18, 0, 24, 17, 75, 19]);
// console.log(findSmallestNumber[51, 67, 5, 24, 89, 45, 56]);



// const changeCase = function (string) {
//     const letters = string.split('');
//     let invertedString = '';

//     for (const letter of letters) {
//         const isInLowerCase = letter === letter.toLowerCase();

//         invertedString += isInLowerCase
//             ? letter.toUpperCase()
//             : letter.toLowerCase();
//     }

//     return invertedString;
// } 

// console.log(changeCase('JavaScript'));
// console.log(changeCase('qweRTY'));
// console.log(changeCase('mAnGo'));
// console.log(changeCase('AjAX'));


//  argumets

// const fn = function () {
//     console.log(arguments);

//     const args = Array.from(arguments);

//     console.log(args);
// }
// fn(1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);


// new arguments

// const fn = function (...args) {

//     console.log(args);
// }
// fn('hello', 1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

// const fn = function (a, b, c,...args) {
//     console.log(`${a} ${b} ${c}`);
//     console.log(args);
// }
// fn('hello', 1, 2, 3);
// fn(1, 2, 3, 4, 5);
// fn(1, 2, 3, 4, 5, 6, 7);

//  задачи

//  напиши функцию add сложения для произвольного кол-ва аргументов

// const add = function (...args) {
//     console.log(args);
//     let total = 0;

//     for (const arg of args) {
//         total += arg;
//     }

//     return total;
// }

// console.log(add(1, 2, 3));
// console.log(add(1, 2, 3, 4, 5, 6, 7));


//  напиши функцию filterNumbers(array [,number1, ...]),
//  которая:
//  - первым аргументом принимает массив чисел
//  - после первого аргумента может быть произвольное кол-во других эл-вб,
//    которые будут числами
//  - функция должна вернуть новый массив, 
//    в котором будут только те аргументы, начиная со второго,
//    для которых есть аналог в оригинальном массиве.

// const filterNumbers = function (array, ...args) {
//     console.log('array: ', array);
//     console.log('args: ', args);
// }
// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); 
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); 


// const filterNumbers = function (array, ...args) {
//     console.log('array: ', array);
//     console.log('args: ', args);
//     const uniqueElements = [];

    // for (const element of array) {    
    //     if (args.includes(element)) {
    //         uniqueElements.push(element);


//             console.log(`${element} есть везде!`);
//         }
//     }

//     return uniqueElements;
// }
// console.log(filterNumbers([1, 2, 3, 4, 5], 10, 15, 2, 3, 8));
// console.log(filterNumbers([10, 15, 25, 30], 23, 30, 18, 15)); 
// console.log(filterNumbers([100, 200, 300, 400, 500], 7, 12, 200, 64)); 



//  МОДУЛЬ 3


//  Объекты

// const playlist = {
//     name: 'мой супер плэйлист',
//     ratiing: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// };
// console.log(playlist);

//  ЛИТЕРАЛ

// const x = {};

// const fn = function (myObject) {
//     //  myObject = {a: 1, b: 2}
//     console.log(myObject);
// }

// fn({ a: 1, b: 2 });

// const rtfn = function () {
//     return { a: 5 };

// }

// console.log({ rtfn });

// доступ

// const playlist = {
//     name: 'мой супер плэйлист',
//     ratiing: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// };
// console.log(playlist);
// console.log(playlist.name);
// console.log(playlist.tracks);
// console.log(playlist.trackCount);

// console.log(playlist.ratiing);
// //  или
// console.log(playlist['ratiing']);

//  массив и функции - это объекты!

// const a = [1, 2, 3];

// a.hello = ':)';

// console.log(a);

// const fn = function () {
//     console.log('hello');
// }
// fn.hello = ':)';

// console.dir(fn.hello);


// const playlist = {
//     name: 'мой супер плэйлист',
//     ratiing: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,


//     // (метод объекта)
//     getName: function () {
//         console.log('Ага это getName :)');  
//     }
//     //  ИЛИ (метод объекта)

//     // getName(a) {
//     //     console.log('Ага это getName :)', a);
//     // }
// };
// console.log(playlist);
// playlist.getName(5);


// const playlist = {
//     name: 'мой супер плэйлист',
//     ratiing: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
//     changeName(newName) {
//         console.log('this внутри changeName: ', this);

//         this.name = newName;
//     },
//     addTrack(track) {
//         this.tracks.push(track);
//         // this.trackCount = this.tracks.length;  ===== это плохо см. ниже
//     },
//     updateRating(newRating) {
//         this.ratiing = newRating;
//     },
//     getTrackCount() {
//         return this.tracks.length;
//     }
// };

// playlist.changeName('Новое имя');

// playlist.addTrack('Новый трек');
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);
// console.log(playlist);

//  перебор объекта

// const feedback = {
//     good: 5,
//     neutral: 10,
//     bad: 3,
// };

// let totalFeedback = 0;

// const keys = Object.keys(feedback);

// console.log(keys);

// for (const key of keys) {
//     console.log(key);
//     console.log(feedback[key]);

//     totalFeedback += feedback[key];
// }

// console.log('totalFeedback: ', totalFeedback);

// const values = Object.values(feedback);

// console.log(values);

// for (const value of values) {
//     console.log(value);

//     totalFeedback += value;
// }

// console.log('totalFeedback: ', totalFeedback) ;

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Alax', online: false },
// ];
// console.table(friends);

// for (const friend of friends) {
//     console.log(friend);

//     friend.newprop = 555;
// }

// console.table(friends);


// ищеи друга по имени

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Alax', online: false },
// ];
// console.table(friends);


// const findFriendByName = function (allFriends, friendName) {
//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.name);

//         if (friend.name === friendName) {
//             return 'Нашли!!!';
//         }
//     }

//     return 'Не нашли';
// };
    
//     console.log(findFriendByName(friends, 'Poly'));
//     console.log(findFriendByName(friends, 'Chelsy'));


//  получаем имена всех друзей

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Alax', online: false },
// ];
// console.table(friends);

// const getAllNames = function (allFriends) {
//     const names = [];

//     for (const friend of allFriends) {
//         console.log(friend.name);

//         names.push(friend.name);
//     }

//     return names;
//  };

// console.log(getAllNames(friends));

//  получть объекты (имена друзей), которые только онлайн

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: true },
//     { name: 'Poly', online: true },
//     { name: 'Alax', online: false },
// ];
// console.table(friends);

// const getOnlineFriends = function (allFriends) {
//     const onlineFriends = [];

//     for (const friend of allFriends) {
//         console.log(friend);
//         console.log(friend.online);

//         if (friend.online) {
//             onlineFriends.push(friend);
//         }
//     }

//     return onlineFriends;
// }

// console.log(getOnlineFriends(friends));


//  Офлайн

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: false },
//     { name: 'Poly', online: true },
//     { name: 'Alax', online: false },
// ];
// console.table(friends);

// const getOffLineFriends = function (allFriends) {
//     const offLineFriends = [];

//     for (const friend of allFriends) {
//         console.log(friend.online);

//         if (!friend.online) {
//             offLineFriends.push(friend);
//         }
//     }

//     return offLineFriends;
// }

// console.log(getOffLineFriends(friends));


//  создаем два массива онлай и офлайн
//  если тру - в первый, если фолс -во второй

// const friends = [
//     { name: 'Mango', online: false },
//     { name: 'Kiwi', online: false },
//     { name: 'Poly', online: true },
//     { name: 'Alax', online: false },
// ];
// console.table(friends);

// const getFriendsByOnlineStatus = function (allFriends) {
//     const friendsByStatus = {
//         online: [],
//         offline: [],
//     }

//     for (const friend of allFriends) {
//         if (friend.online) {
//             friendsByStatus.online.push(friend);
//             continue;
//         } 
//         friendsByStatus.offline.push(friend);
        
//         //  const key = friend.online ? 'online' : 'offline';
//         //  friendsByStatus[key].push(friend);
//     }

//     return friendsByStatus;
// }

// console.log(getFriendsByOnlineStatus(friends));

























































































