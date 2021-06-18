// console.log(5 && 7 && 0 && 'hello');

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


//  пребор объекта через for in 

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// // Перебор ключей объекта hotel
// for (const key in hotel) {
//   console.log('Key: ', key);
// }

// /*
//  * Key: name
//  * Key: stars
//  * Key: capacity
//  */

// const hotel = {
//   name: 'Resort Hotel',
//   stars: 5,
//   capacity: 100,
// };

// const keys = Object.keys(hotel); // ["name", "stars", "capacity"]
// const values = Object.values(hotel); // ["Resort Hotel", 5, 100]
// const entries = Object.entries(hotel); // [Array(2), Array(2), Array(2)]


// const x = {
//     a: 1,
//     b: 2,
//     c: 50,
//     d: 100,
// }
// console.log(Object.keys(x).length);


// =================================================================

//  МОДУЛЬ 3, занятие 6

//  поиск минимального или максимального значения

// const temps = [18, 14, 12, 13, 21, 17, 29, 24];

// console.log(Math.max(1, 4, 17, 5, 6));
// //  распыление массива через ... 
// // тоже самое = Math.min(18, 14, 12, 13, 21, 17, 29, 24)
// console.log(Math.min(...temps));

//  распыление массивов

// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [...lastWeekTemps, ...currentTemps, ...nextWeekTemps];
// console.log(allTemps);


//  распыление объектов

// const a = { x: 1, y: 2 };
// const b = { x: 0, z: 3 };

// // const c = Object.assign({}, a, b);

// const c = {
//     ...a,
//     x: 10,
//     ...b,
//     y: 20,
// }

// console.log(c);


//  настройки web страницы...

// const defaultSettinds = {
//     theme: 'light',
//     showNotifications: true,
//     hideSidebar: false,
// }

// const userSettings = {
//     showNotifications: false,
//     hideSidebar: true,
// }

// const finalSettings = {
//     ...defaultSettinds,
//     ...userSettings,
// }
// console.log(finalSettings);


// const playlist = {
//     name: 'мой супер плэйлист',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     trackCount: 3,
// };
// //  деструктуризация объекта, или распаковка: (const { } = playlist;)

// const { rating, tracks, name, trackCount, author } = playlist;
// const { rating, tracks, name, trackCount: numberOfTacks = 0, author = 'qwe'} = playlist;


// // console.log(rating);
// // console.log(tracks);
// // console.log(name);
// // console.log(trackCount);
// // console.log(name, rating, tracks, trackCount, author);

// // console.log(author);
// // console.log(numberOfTacks);


//  глубокая деструктуризация

// const profile = {
//     name: 'Jaques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jmaica',
//     avatar: 567,
//     status: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// // const { name, tag, avatar, status } = profile;
// // const { followers, views, likes } = status;

// const {
//     name,
//     tag,
//     avatar,
//     status: { followers, views, likes },
// } = profile;

// // console.log(name, tag, avatar, status);
// console.log(name, tag, avatar, followers, views, likes );


//  деструктуризация массивов

// const rgb = [255, 100, 80];

// // const [a, b, c] = rgb;
// // console.log(a, b, c);
// const [a, , c] = rgb;
// console.log(a, c);

// const authors = {
//     kiwi: 4,
//     poly: 7,
//     ajax: 9,
//     mango: 6,
// }
// const entries = Object.entries(authors);
// // console.log(entries);

// // for (const entry of entries) {
// //     // console.log(entry);
// //     // const name = entry[0];
// //     // const rating = entry[1];

// //     //  ИЛИ
// //     const [name, rating] = entry;

// //     console.log(name, rating);
// // }

// //  ИЛИ
// for (const [name, rating] of entries) {
    
//     console.log(name, rating);
// }


//  Операция rest (сбор):


// const profile = {
//     name: 'Jaques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jmaica',
//     avatar: 567,
//     status: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// const { name, tag, ...restProps } = profile;

// console.log(name, tag );
// console.log(restProps);

// =======================================================

//  Паттерн 'объект настроек'
//  деструктуризация паттерна-объекта в подписи функции
//  rest при деструктуризации в подписи


// const showProfileInfo = function ({
//     name,
//     tag,
//     location,
//     avatar,
//     status: { followers, views, likes }
// }) {
//     console.log(name, tag, location, avatar, followers, views, likes);
// };

// Или
// const showProfileInfo = function (userProfile) {
//     const {
//         name,
//         tag,
//         location,
//         avatar,
//         status: { followers, views, likes }
//     } = userProfile;

//     console.log(name, tag, location, avatar, followers, views, likes);
// };

// ИЛИ

// const profile = {
//     name: 'Jaques Gluke',
//     tag: 'jgluke',
//     location: 'Ocho Rios, Jmaica',
//     avatar: 567,
//     status: {
//         followers: 5603,
//         views: 4827,
//         likes: 1308,
//     },
// };

// showProfileInfo(profile);


// const cart = {
//     items: [],
//     getItems() {
//         return this.items;
//     },
//     add(product) {
//         console.table(this.items);

//         for (const item of this.items) {
//             if (item.name === product.name) {
//                 item.quantity += 1;
//                 return;
//             }
//         }
//         const newProduct = {
//             ...product,
//             quantity: 1,
//         };

//         this.items.push(newProduct);
//     },
//     remove(productName) {
//         const { items } = this;
//         for (let i = 0; i < items.length; i+= 1) {
//             // const item = this.items[i];
//             const { name } = items[i];
//         // for (let i = 0; i < this.items.length; i+= 1) {
//         //     // const item = this.items[i];
//         //     const { name } = this.items[i];
//             if (productName === name) {
//                 console.log('нашли такой продукт: ', productName);
//                 console.log('индекс: ', i);

//                 items.splice(i, 1);
//             }  
//         }
//         // for (const item of this.items) {
//         //     console.log(item);

//         //     if (productName === item.name) {
//         //         console.log('нашли такой продукт ', productName);
//         //     }
//         // }
//     },
//     clear() {
//         this.items = [];
//     },
//     countTotalPrice() {
//         // console.log(this.items);
//         const { items } = this;

//         let total = 0;

//         for (const { price, quantity } of items) {
//             total += price * quantity;
//         }
//         return total;
//     },
//     increaseQuantity(productName) { },
//     decreaseQuantity(productName) { },
//     getProductTotalPrice(product) { },
// };

// console.log(cart.getItems);

// cart.add({ name: 'apples', price: 50 });
// cart.add({ name: 'peach', price: 60 });
// cart.add({ name: 'lemons', price: 60 });
// cart.add({ name: 'lemons', price: 60 });
// cart.add({ name: 'plums', price: 110 });
// cart.add({ name: 'plums', price: 110 });
// cart.add({ name: 'plums', price: 110 });



// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());


// // cart.remove('peach');
// // console.table(cart.getItems());

// // cart.clear();
// // console.log(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());


// const getProductTotalPrice = function ({ price, quantity }) {
//     return price * quantity;
// };

// console.log(getProductTotalPrice(cart.items[3]));


// ===============================================================


//  4 МОДУЛЬ

//  фильтраци функции

// const filter = function (array, test) {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }
//     return filteredArray;
// }

// // 1 надо написать ф-цию
// // 2 ф-ция получает элемент массива
// // 3 если эл-т массива удовлетворяет условию, то ф-ция вернет true
// // 4 если эл-т массива НЕ удовлетворяет условию, то ф-ция вернет false

// const callback1 = function (value) {
//     return value >= 3;
// };

// const r1 = filter([1, 2, 3, 4, 5], callback1);
// console.log(r1); // (3) [3, 4, 5]

// const callback2 = function (value) {
//     return value <= 4;
// };

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(r2); // (4) [1, 2, 3, 4]

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
    
// ];

// const getFruitsWithQuantity = function (fruit) {
//     return fruit.quantity >= 120;
// };

// const r3 = filter(fruits, getFruitsWithQuantity);
// console.log(r3); // (2) [{...}, {...}]


//  ЗАМЫКАНИЯ

//  ф-ция результатом своей работы может возвращать другую ф-цию

//  возвращаемая функция во время работы будет иметь доступ
//  ко всем локаоьным переменным (области видимости)
// родительской ф-ции, той из которой ее вернули
//  это называется - ЗАМЫКАНИЕ


// const fnA = function (parameter) {
//     const innerVariable = 'значение внутренней переменной fnA';

//     const innerFunction = function () {
//         console.log(parameter);
//         console.log(innerVariable);
//         console.log('это вызов innerFunction');
//     };
//     return innerFunction;
// };

// const fnB = fnA(555);

// fnB();

// console.log(fnB);


//  поваренок

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish('Mango', 'apple pie'); // Mango is cooking apple pie
// makeDish('Mango', 'fish'); // Mango is cooking fish
// makeDish('Mango', 'beef stew'); // Mango is cooking beef stew

// makeDish('Poly', 'muffins'); // Poly is cooking muffins
// makeDish('Poly', 'pork chops'); // Poly is cooking pork chops
// makeDish('Poly', 'roast beef'); // Poly is cooking roast beef

// const makeShef = function (name) {
//   /*
//    * Параметр name это локальная переменная для функции makeShef.
//    * Это значит что она будет доступна функции makeDish через замыкание.
//    */
//   return function makeDish(dish) {
//     console.log(`${name} is cooking ${dish}`);
//   };
// };

// const mango = makeShef('Mango');

// console.dir(mango);

// mango('apple pie'); // Mango is cooking apple pie
// mango('beef stew'); // Mango is cooking beef stew

// const poly = makeShef('Poly');

// console.dir(poly);

// poly('pancakes'); // Poly is cooking pancakes
// poly('eggs and bacon'); // Poly is cooking eggs and bacon


//  округлятор

// const rounder = function (places) {
//     return function (number) {
//         return Number(number.toFixed(places));
//     };
// };

// const rounder2 = rounder(2);
// const rounder3 = rounder(3);

// console.dir(rounder2);
// console.dir(rounder3);

// console.log(rounder2(3.567));
// console.log(rounder3(5.5267));
// console.log(rounder2(6.1637));
// console.log(rounder3(7.117));


//  приватные данные и функции - скрытие реализации , интерфейс

// const salaryManagerFactory = function (employeeName, baseSalary = 0) {
//     let salary = baseSalary;

//     return {
//         raise(amount) {
//             salary += amount;
//         },
//         lower(amount) {
//             salary -= amount;
//         },
//         current() {
//             return `Текущая зарплата ${employeeName} - ${salary}`;
//         },
//     };
// };

// const salaryManager = salaryManagerFactory('Mango', 5000);

// console.log(salaryManager.current());



//  стрелочные функции

// const add = function (a, b, c) {
//     console.log(arguments);
//     return a + b + c;
// };

// const addArrow = (a, b, c) => {
//     return a + b + c;           // неявный возврат
// };

// console.log(add(5, 10, 15));
// console.log(addArrow(5, 10, 15));


// const fnA = function () {
//     return {
//         a: 5,
//     };
// };

// console.log(fnA());

// const arrowFnA = () => ({ arrowA: 5 });

// console.log(arrowFnA());


//  переписываем фильтр на стреку

//  const filter = (array, test) => {
//     const filteredArray = [];

//     for (const el of array) {
//         console.log(el);
//         const passed = test(el);

//         if (passed) {
//             filteredArray.push(el);
//         }
//     }
//     return filteredArray;
// }

// // 1 надо написать ф-цию
// // 2 ф-ция получает элемент массива
// // 3 если эл-т массива удовлетворяет условию, то ф-ция вернет true
// // 4 если эл-т массива НЕ удовлетворяет условию, то ф-ция вернет false

// // const callback1 = value => value >= 3;

// const r1 = filter([1, 2, 3, 4, 5], value => value >= 3);
// console.log(r1); // (3) [3, 4, 5]

// // const callback2 = value => value <= 4;

// const r2 = filter([1, 2, 3, 4, 5, 6, 7, 8], value => value <= 4);
// console.log(r2); // (4) [1, 2, 3, 4]

// const fruits = [
//     { name: 'apples', quantity: 200, isFresh: true },
//     { name: 'grapes', quantity: 150, isFresh: false },
//     { name: 'bananas', quantity: 100, isFresh: true },
    
// ];

// // const getFruitsWithQuantity = fruit => fruit.quantity >= 120; 

// const r3 = filter(fruits, fruit => fruit.quantity >= 120);
// console.log(r3); // (2) [{...}, {...}]

// ===========================================================

"use strict";
//  this
//  при передаче метода объекта как колбэка 
// контекст не сохраняется (но с bind мы получаем ссылку на объект)
// const counter = {
//     value: 0,
//     increment(value) {
//         console.log('increment -> this', this);
//         this.value += value;
//     },
//     decrement(value) {
//         console.log('decrement -> this', this);
//         this.value -= value;
        
//     },
// };

// const updateCounter = function (value, operation) {
//     operation(value);
// };
// updateCounter(10, counter.increment.bind(counter));
// updateCounter(5, counter.decrement.bind(counter));

// console.log(counter);