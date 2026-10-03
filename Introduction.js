// 1. Сума чисел у діапазоні (FOR - відома кількість ітерацій)
const startRange = Number(prompt("1. Введіть початок діапазону:"));
const endRange = Number(prompt("Введіть кінець діапазону:"));
let rangeSum = 0;
const [minR, maxR] = [Math.min(startRange, endRange), Math.max(startRange, endRange)];

for (let i = minR; i <= maxR; i++) {
  rangeSum += i;
}
alert(`Сума чисел від ${minR} до ${maxR}: ${rangeSum}`);

// 2. Найбільший спільний дільник (WHILE - алгоритм Евкліда)
let gcdA = Math.abs(Number(prompt("2. Введіть перше число для НСД:")));
let gcdB = Math.abs(Number(prompt("Введіть друге число для НСД:")));
const origA = gcdA, origB = gcdB;

while (gcdB !== 0) {
  const temp = gcdB;
  gcdB = gcdA % gcdB;
  gcdA = temp;
}
alert(`НСД(${origA}, ${origB}) = ${gcdA}`);

// 3. Усі дільники числа (FOR)
const numDivisors = Math.abs(Number(prompt("3. Введіть число для пошуку дільників:")));
const divisors = [];

for (let i = 1; i <= numDivisors; i++) {
  if (numDivisors % i === 0) divisors.push(i);
}
alert(`Дільники числа ${numDivisors}: ${divisors.join(", ")}`);

// 4. Кількість цифр у числі (WHILE)
let countTarget = Math.abs(parseInt(prompt("4. Введіть ціле число:"), 10));
let digitsCount = countTarget === 0 ? 1 : 0;

while (countTarget > 0) {
  digitsCount++;
  countTarget = Math.trunc(countTarget / 10);
}
alert(`Кількість цифр: ${digitsCount}`);

// 5. Статистика для 10 чисел (FOR - рівно 10 ітерацій)
let positive = 0, negative = 0, zeros = 0, evens = 0, odds = 0;
let singleInput = 0;

for (let i = 1; i <= 10; i++) {
  singleInput = Number(prompt(`5. Введіть число ${i} з 10:`));
  if (singleInput > 0) positive++;
  else if (singleInput < 0) negative++;
  else zeros++;

  if (singleInput % 2 === 0) evens++;
  else odds++;
}
alert(
  `Статистика 10 чисел:\n` +
  `Додатних: ${positive}\nВід'ємних: ${negative}\nНулів: ${zeros}\n` +
  `Парних: ${evens}\nНепарних: ${odds}`
);

// 6. Зациклений калькулятор (DO WHILE - мінімум 1 запуск)
let continueCalc = false;
do {
  const num1 = Number(prompt("6. Введіть перше число:"));
  const op = prompt("Введіть операцію (+, -, *, /):");
  const num2 = Number(prompt("Введіть друге число:"));
  let calcResult;

  switch (op) {
    case "+": calcResult = num1 + num2; break;
    case "-": calcResult = num1 - num2; break;
    case "*": calcResult = num1 * num2; break;
    case "/": calcResult = num2 !== 0 ? num1 / num2 : "Помилка: ділення на нуль"; break;
    default: calcResult = "Невідома операція";
  }

  alert(`Результат: ${calcResult}`);
  continueCalc = confirm("Бажаєте розв'язати ще один приклад?");
} while (continueCalc);

// 7. Зсув цифр числа (FOR)
let shiftStr = prompt("7. Введіть число:");
const shiftCount = Number(prompt("На скільки цифр змістити вліво?")) % shiftStr.length;

for (let i = 0; i < shiftCount; i++) {
  shiftStr = shiftStr.slice(1) + shiftStr[0];
}
alert(`Результат зсуву: ${shiftStr}`);

// 8. Зациклені дні тижня (DO WHILE)
const days = ["Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота", "Неділя"];
let currentDayIdx = 0;
let seeNext = false;

do {
  seeNext = confirm(`8. ${days[currentDayIdx]}. Бажаєте побачити назву наступного дня тижня?`);
  currentDayIdx = (currentDayIdx + 1) % days.length;
} while (seeNext);

// 9. Таблиця множення (FOR - вкладені лічильники)
let multTable = "";
for (let i = 2; i <= 9; i++) {
  multTable += `--- Множення на ${i} ---\n`;
  for (let j = 1; j <= 10; j++) {
    multTable += `${i} × ${j} = ${i * j}\n`;
  }
}
console.log(multTable);
alert("9. Таблицю множення виведено в консоль (F12) і стисло тут:\n" + multTable.slice(0, 300) + "...\n(перегляньте консоль)");

// 10. Гра «Вгадай число» (WHILE - бінарний пошук)
alert("10. Загадайте число від 0 до 100 у пам'яті.");
let low = 0, high = 100, answer = "";

while (low <= high) {
  const mid = Math.floor((low + high) / 2);
  answer = prompt(`Ваше число > ${mid}, < ${mid} або == ${mid}?`);

  if (answer === "==") {
    alert(`Число відгадано: ${mid}!`);
    break;
  } else if (answer === ">") {
    low = mid + 1;
  } else if (answer === "<") {
    high = mid - 1;
  } else {
    alert("Будь ласка, вводьте тільки '>', '<' або '=='.");
  }
}

// 1. Зведення числа у ступінь (рекурсія)
function power(base, exp) {
  if (exp === 0) return 1;
  if (exp < 0) return 1 / power(base, -exp);
  return base * power(base, exp - 1);
}

// 2. Найбільший спільний дільник (рекурсія за Евклідом)
function gcdRecursive(a, b) {
  return b === 0 ? Math.abs(a) : gcdRecursive(b, a % b);
}

// 3. Пошук максимальної цифри у числі (рекурсія)
function maxDigit(n) {
  n = Math.abs(n);
  if (n < 10) return n;
  return Math.max(n % 10, maxDigit(Math.trunc(n / 10)));
}

// 4. Перевірка на просте число (рекурсія)
function isPrimeRecursive(n, divisor = 2) {
  if (n <= 1) return false;
  if (divisor * divisor > n) return true;
  if (n % divisor === 0) return false;
  return isPrimeRecursive(n, divisor + 1);
}

// 5. Усі прості множники у зростаючому порядку (рекурсія)
function primeFactors(n, divisor = 2, factors = []) {
  if (n <= 1) return factors;
  if (n % divisor === 0) {
    factors.push(divisor);
    return primeFactors(n / divisor, divisor, factors);
  }
  return primeFactors(n, divisor + 1, factors);
}

// 6. Число Фібоначчі за номером (1-indexed: 1->1, 2->1, 3->2, 4->3, 5->5, 6->8)
function fibonacci(n) {
  if (n <= 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Демонстрація роботи блоку рекурсії
console.log("power(2, 5):", power(2, 5));                      // 32
console.log("gcdRecursive(48, 18):", gcdRecursive(48, 18));      // 6
console.log("maxDigit(7392):", maxDigit(7392));                  // 9
console.log("isPrimeRecursive(17):", isPrimeRecursive(17));      // true
console.log("primeFactors(18):", primeFactors(18).join("*"));    // 2*3*3
console.log("fibonacci(6):", fibonacci(6));                      // 8

alert(
  `Результати рекурсивних функцій:\n` +
  `2^5 = ${power(2, 5)}\n` +
  `НСД(48, 18) = ${gcdRecursive(48, 18)}\n` +
  `Макс. цифра в 7392 = ${maxDigit(7392)}\n` +
  `17 — просте? ${isPrimeRecursive(17)}\n` +
  `Множники 18: ${primeFactors(18).join("*")}\n` +
  `6-те число Фібоначчі = ${fibonacci(6)}`
);

// 1. Порівняння двох чисел (-1, 1, 0)
function compare(a, b) {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
}

// 2. Обчислення факторіалу числа
function factorial(n) {
  if (n < 0) return NaN;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

// 3. Об'єднання трьох цифр в одне число
function combineDigits(d1, d2, d3) {
  return d1 * 100 + d2 * 10 + d3;
}

// 4. Площа прямокутника (або квадрата, якщо передано 1 аргумент)
function getArea(length, width = length) {
  return length * width;
}

// 5. Перевірка на досконале число
function isPerfect(n) {
  if (n <= 1) return false;
  let sum = 1;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i;
      if (i !== n / i) sum += n / i;
    }
  }
  return sum === n;
}

// 6. Вивід усіх досконалих чисел у діапазоні
function getPerfectNumbersInRange(min, max) {
  const perfects = [];
  const start = Math.min(min, max);
  const end = Math.max(min, max);

  for (let i = start; i <= end; i++) {
    if (isPerfect(i)) {
      perfects.push(i);
    }
  }
  return perfects;
}

// Демонстрація роботи функцій
console.log("compare(3, 7):", compare(3, 7));                     // -1
console.log("factorial(5):", factorial(5));                       // 120
console.log("combineDigits(1, 4, 9):", combineDigits(1, 4, 9));   // 149
console.log("getArea(5, 10):", getArea(5, 10));                   // 50 (прямокутник)
console.log("getArea(6):", getArea(6));                           // 36 (квадрат)
console.log("isPerfect(28):", isPerfect(28));                     // true
console.log("Досконалі від 1 до 500:", getPerfectNumbersInRange(1, 500)); // [6, 28, 496]

alert(
  `Результати базових функцій:\n` +
  `compare(3, 7) = ${compare(3, 7)}\n` +
  `5! = ${factorial(5)}\n` +
  `Об'єднання (1, 4, 9) = ${combineDigits(1, 4, 9)}\n` +
  `Площа прямокутника (5x10) = ${getArea(5, 10)}\n` +
  `Площа квадрата (6) = ${getArea(6)}\n` +
  `28 — досконале? ${isPerfect(28)}\n` +
  `Досконалі числа [1..500]: ${getPerfectNumbersInRange(1, 500).join(", ")}`
);