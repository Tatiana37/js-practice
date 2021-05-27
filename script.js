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