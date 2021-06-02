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