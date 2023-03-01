

// lesson 2 Additional

//4
const KINDERGARDEN__START = 3;
const SCHOOL_START = 6;
const SCHOOL_QUANTITY = 12;
const UNIVERSITY_START = 18;
const UNIVERSITY_QUANTITY = 6;

//5
const TAX = 20;

//8, 14
const YEARS_IN_CENTURY = 100;
const COUNTER = 1;
const FIRST_DAY_OF_WEEK = 1;

//9
const SECONDS_PER_HOUR = 3600;
const MINUTES_PER_HOUR = 60;

//10, 12
const UAH_QUANTITY = 100;

const WEEK_DAYS = 7;

//1

// let screenWidth = Math.abs(prompt('(1): Ширина екрана =', 'число'));
// let elemquantity = Math.abs(prompt('(1): Кількість елементів =', 'число'));


// let elemWidth = Math.abs(parseFloat(screenWidth / elemquantity)).toFixed(2);
// console.log(`(1) Відповідь: Ширина кожного елементу = ${elemWidth}px`);

//2

// let livingWage = prompt('(2) Розмір прожиткового мінімуму', 'число (грн)');
// let salary = (prompt('(2) Розмір зарплатні', 'число (грн) менше за заробітну платню'));

// let livingLoan = livingWage - salary;
// console.log(`(2) Відповідь: Розмір соціальної допомоги = ${livingLoan} грн`);

//3

// Умова
// const priceItemOne = document.querySelector('.page__price1');
// const priceItemTwo = document.querySelector('.page__price2');

// const quantityItemOne = document.querySelector('.page__quantity1');
// const quantityItemTwo = document.querySelector('.page__quantity2');


// const totalCostOne = document.querySelector('.page__total1');
// const totalCostTwo = document.querySelector('.page__total2');

// const checkoutTotal = document.querySelector('.page__total-sum');

// Розв'язання

// let priceOfItemFirst = prompt('(3): ціна товару А =', 'number');
// priceItemOne.textContent = priceOfItemFirst;
// let quantityOfItemFirst = prompt('(3): кількість товару А =', 'number');
// quantityItemOne.textContent = quantityOfItemFirst;

// let priceOfItemSecond = prompt('(3): ціна товару В =', 'number');
// priceItemTwo.textContent = priceOfItemSecond;
// let quantityOfItemSecond = prompt('(3): кількість товару В =', 'number');
// quantityItemTwo.textContent = quantityOfItemSecond;

// let costOfItemFirst = priceOfItemFirst * quantityOfItemFirst;
// totalCostOne.textContent = costOfItemFirst;

// let costOfItemSecond = priceOfItemSecond * quantityOfItemSecond;
// totalCostTwo.textContent = costOfItemSecond;

// let totalCost = (costOfItemFirst + costOfItemSecond).toFixed(2);
// checkoutTotal.textContent = totalCost;

//4
// let kindName = prompt('(4): Ім\'я дитини', 'строка');
// let kindAge = prompt('(4): Вік дитини =', 'число');

// let startInKindergarden = Math.abs(KINDERGARDEN__START - kindAge);
// console.log(`(4) Відповідь: ${kindName}, якому ${kindAge} років, піде у дітсадок / пішов до дитячого садку (через) ${startInKindergarden} років (тому назад)`);

// let startSchool = Math.abs(SCHOOL_START - kindAge);
// console.log(`(4) Відповідь: ${kindName}, якому ${kindAge} років, піде до школи / пішов до школи (через) ${startSchool} років (тому назад)`);

// let startUniversity = Math.abs(SCHOOL_START + SCHOOL_QUANTITY - kindAge);
// console.log(`(4) Відповідь: ${kindName}, якому ${kindAge} років, закінчить школу і вступить у ВУЗ / закінчив школу і вступив у ВУЗ (через) ${startUniversity} років (тому назад)`);

// let graduateFromUniversity = Math.abs(UNIVERSITY_START + UNIVERSITY_QUANTITY - kindAge);
// console.log(`(4) Відповідь: ${kindName}, якому ${kindAge} років, закінчить університет / закінчив університет (через) ${graduateFromUniversity } років (тому назад)`);


//5

// let s = prompt('(5): співробітнику нараховано =', 'грн');
// let quantityOfTax = (s / 100) * TAX;
// console.log(`(5) налог з з/п становить ${quantityOfTax}`);
// let salaryAfterTax = (s - quantityOfTax).toFixed(2);
// console.log(`(5) Відповідь: Чиста заробітна платня = ${salaryAfterTax} грн`);

//6
// let a = parseFloat(prompt('(6): a =', 'number'));
// console.log(`(7) Ви ввели a = ${a}`);
// let b = parseFloat(prompt('(6): b =', 'number'));
// console.log(`(7) Ви ввели b = ${b}`);
// let c = parseFloat(prompt('(6): c =', 'number'));
// console.log(`(7) Ви ввели c = ${c}`);
// let d = a;
// let e = b;
// let f = c;
// a = e;
// b = f;
// c = d;
// console.log(`(6) Відповідь: a = ${a}; b = ${b}; c = ${c};`);

//7
// let fraction = (Math.abs(parseFloat(prompt('(7): Введіть дріб', 'number')))).toFixed(2);
// console.log(`(7) Ви ввели ${fraction}`);
// let wholeNumber = parseInt(fraction);
// let afterDot = (fraction - wholeNumber).toFixed(2);
// console.log(`(7) Відповідь: ціла частина = ${wholeNumber}, а дробова = ${afterDot}`);

//8
// let y = Math.abs(prompt('(8): Введіть рік (з 901 до 9900)', 'число'));
// let c =((y + YEARS_IN_CENTURY - COUNTER).toString()).slice(0,2);

// console.log(`(8) Відповідь: ${y} рік належить до ${c} століття`);

//9
// let n = prompt('(9): Введіть кiлькiсть секунд від 1 до 86400', 'число');
//console.log(`(10) Ви ввели ${n} секунд`);
// let hours = Math.floor((n-1) / SECONDS_PER_HOUR);
// let minutes = Math.floor((n-1) % MINUTES_PER_HOUR);
// console.log(`(9) Відповідь: пройшло ${hours}:${minutes}`);

//10
// let quantityOfCents = prompt('(10): Введіть кiлькiсть копійок', 'число');
// console.log(`(10) Ви ввели ${quantityOfCents} коп.`);

// let uah = Math.floor(quantityOfCents / UAH_QUANTITY);
// let cents = quantityOfCents % UAH_QUANTITY;
// console.log(`(10) Відповідь: кількість грошей ${uah} грн. ${cents} коп.`);

//11
// let hoursForNow = parseFloat(prompt('(11): Введіть кiлькiсть годин', 'число'));
// console.log(`(11) Ви ввели ${hoursForNow} годин`);
// let minutesForNow = parseFloat(prompt('(11): Введіть кiлькiсть хвилин', 'число'));
// console.log(`(11) Ви ввели ${minutesForNow} хвилин`);
// let secondsForNow = parseFloat(prompt('(11): Введіть кiлькiсть секунд', 'число'));
// console.log(`(11) Ви ввели ${secondsForNow} секунд`);
// let secondsAfter = parseFloat(prompt('(11): Введіть кiлькiсть секунд', 'число'));
// console.log(`(11) секунд пройшло ${secondsAfter}`);
// let minutesAfter = parseFloat(prompt('(11): Введіть кiлькiсть хвилин', 'число'));
// console.log(`(11) хвилин пройшло ${minutesAfter}`);

// let totalSeconds = (secondsForNow + secondsAfter) % 60;
// console.log(totalSeconds);
// let totalMinutes = (minutesForNow + minutesAfter) % 60;
// console.log(totalMinutes);

// console.log(`(11) Відповідь: після того як пройшло ${secondsAfter} секунд і ${minutesAfter} годинник показав ${hoursForNow}:${totalMinutes}:${totalSeconds}`);

//12
// let quantityOfCoinsOne = parseFloat(prompt('(12): Введіть номінал копійок', '2'));
// let quantityOfCoinsTwo = parseFloat(prompt('(12): Введіть номінал копійок', '5'));
// let quantityOfCoinsThree = parseFloat(prompt('(12): Введіть номінал копійок', '25'));
// let quantityOfCoinsFour = parseFloat(prompt('(12): Введіть номінал копійок', '50'));

// let sumOfCoinsInUah = parseFloat(((quantityOfCoinsOne + quantityOfCoinsTwo + quantityOfCoinsThree + quantityOfCoinsFour) / UAH_QUANTITY).toFixed(0));

// let sumOfCoinsInCents = (quantityOfCoinsOne + quantityOfCoinsTwo + quantityOfCoinsThree + quantityOfCoinsFour) % UAH_QUANTITY;

// console.log(`(12) Відповідь: Ви ввели суму коштів ${sumOfCoinsInUah} грн. ${sumOfCoinsInCents}`);

//13
// let dayQuantity = parseFloat(prompt('(13): Введіть кількість днів', 'число днів'));

// let weekQuantity = parseFloat((dayQuantity / WEEK_DAYS).toFixed(0));
// let restOfDays = parseFloat((dayQuantity % WEEK_DAYS).toFixed(0));
// console.log(`(13) Відповідь: Ви ввели ${weekQuantity} тижнів і ${restOfDays} днів`);

//14
// let dayOfWeek = parseFloat(prompt('(14): Введіть номер дня тижня (від 1 до 7)', 'число'));
// console.log(`(14) Ви ввели ${dayOfWeek} день`);

// let daysAfter = parseFloat(prompt('(14): Введіть кількість днів, що пройшла після цього дня', 'число'));
// console.log(`Ви ввели ${daysAfter} днів`);

// let weekOfDaysAfter = ((dayOfWeek - FIRST_DAY_OF_WEEK + daysAfter) % (WEEK_DAYS - FIRST_DAY_OF_WEEK + COUNTER)) + FIRST_DAY_OF_WEEK;
// console.log(`(14) Відповідь: Через ${daysAfter} днів буде ${weekOfDaysAfter} день`);

// Alternative coditional

/*33. Вычислите x−y√−−−−−−√, если x и y вводит пользователь. Перед вычислением выполнить проверку на существование квадратных корней.*/

// let x = parseInt(prompt('Введіть число X', 'number'));
// let y = parseInt(prompt('Введіть число Y', 'number'));
// let a, b, c;
// if((Math.sqrt(x) % 1) === 0)
  
//   console.log(Math.ceil(Math.sqrt(x)));

//     else if ((Math.sqrt(y) % 1) === 0)
        
//         console.log(Math.ceil(Math.sqrt(y)));

//           else {
//            console.log(Math.ceil(Math.sqrt(x)));
//            console.log(Math.ceil(Math.sqrt(y)));
//           }

//(1)
// let D = b * b - 4 * a * c;

//  if (D < 0) {
//    console.log (`Корней нет`);
//  } else
//  if (D === 0) {
//    x = -b / (2 * a);
//    console.log (`Корень равен ${x}`);
//  } else
//  if (D > 0) {
//    x = (-b + Math.sqrt(D)) / (2 * a);
//    y = (-b - Math.sqrt(D)) / (2 * a);
//    console.log (`Первый корень равен ${x}, второй корень равен ${x2}`);
//  }

