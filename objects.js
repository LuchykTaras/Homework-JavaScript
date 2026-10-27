//task 1

const car = {
  manufacturer: "BMW",
  model: "M5",
  year: 2022,
  averageSpeed: 90
};

// 1. Виведення інформації про авто
function printCarInfo(carObj) {
  console.log(`--- Інформація про авто ---`);
  console.log(`Виробник: ${carObj.manufacturer}`);
  console.log(`Модель: ${carObj.model}`);
  console.log(`Рік випуску: ${carObj.year}`);
  console.log(`Середня швидкість: ${carObj.averageSpeed} км/год\n`);
}

// 2. Розрахунок часу в дорозі з урахуванням відпочинку
function calculateTravelTime(distance, carObj) {
  const pureDrivingTime = distance / carObj.averageSpeed;
  // Кожні 4 години водіння потрібна 1 година перерви.
  const restHours = pureDrivingTime > 4 
    ? Math.floor((pureDrivingTime - 0.001) / 4) 
    : 0;
  
  const totalTime = pureDrivingTime + restHours;
  return totalTime.toFixed(2);
}

// Перевірка
printCarInfo(car);
const dist = 850;
console.log(`Час для подолання ${dist} км: ${calculateTravelTime(dist, car)} год.`);

//Tsak 2

const fraction1 = { numerator: 3, denominator: 4 };
const fraction2 = { numerator: 5, denominator: 6 };

// Найбільший спільний дільник (НСД) для скорочення
function getGCD(a, b) {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) {
    const t = b;
    b = a % b;
    a = t;
  }
  return a;
}

// 5. Скорочення дробу
function reduceFraction(frac) {
  const gcd = getGCD(frac.numerator, frac.denominator);
  return {
    numerator: frac.numerator / gcd,
    denominator: frac.denominator / gcd
  };
}

// 1. Додавання
function addFractions(f1, f2) {
  const result = {
    numerator: f1.numerator * f2.denominator + f2.numerator * f1.denominator,
    denominator: f1.denominator * f2.denominator
  };
  return reduceFraction(result);
}

// 2. Віднімання
function subtractFractions(f1, f2) {
  const result = {
    numerator: f1.numerator * f2.denominator - f2.numerator * f1.denominator,
    denominator: f1.denominator * f2.denominator
  };
  return reduceFraction(result);
}

// 3. Множення
function multiplyFractions(f1, f2) {
  const result = {
    numerator: f1.numerator * f2.numerator,
    denominator: f1.denominator * f2.denominator
  };
  return reduceFraction(result);
}

// 4. Ділення
function divideFractions(f1, f2) {
  const result = {
    numerator: f1.numerator * f2.denominator,
    denominator: f1.denominator * f2.numerator
  };
  return reduceFraction(result);
}

// Перевірка
console.log("Додавання:", addFractions(fraction1, fraction2));       // 3/4 + 5/6 = 19/12
console.log("Віднімання:", subtractFractions(fraction1, fraction2)); // 3/4 - 5/6 = -1/12
console.log("Множення:", multiplyFractions(fraction1, fraction2));   // 3/4 * 5/6 = 5/8
console.log("Ділення:", divideFractions(fraction1, fraction2));     // 3/4 / 5/6 = 9/10


// Task 3

const time = {
  hours: 20,
  minutes: 45,
  seconds: 50
};

// Допоміжна функція форматування двозначних чисел (наприклад, 05)
const padZero = (num) => String(num).padStart(2, '0');

// 1. Виведення часу
function printTime(t) {
  console.log(`${padZero(t.hours)}:${padZero(t.minutes)}:${padZero(t.seconds)}`);
}

// 2. Зміна часу на секунди
function addSeconds(t, seconds) {
  let totalSeconds = t.hours * 3600 + t.minutes * 60 + t.seconds + seconds;
  // Нормалізація в межах 24 годин (86400 сек)
  totalSeconds = (totalSeconds % 86400 + 86400) % 86400;

  t.hours = Math.floor(totalSeconds / 3600);
  t.minutes = Math.floor((totalSeconds % 3600) / 60);
  t.seconds = totalSeconds % 60;
}

// 3. Зміна часу на хвилини
function addMinutes(t, minutes) {
  addSeconds(t, minutes * 60);
}

// 4. Зміна часу на години
function addHours(t, hours) {
  addSeconds(t, hours * 3600);
}

// Перевірка
printTime(time); // 20:45:50
addSeconds(time, 30);
printTime(time); // 20:46:20
addMinutes(time, 20);
printTime(time); // 21:06:20
addHours(time, 5);
printTime(time); // 02:06:20 (наступний день)

