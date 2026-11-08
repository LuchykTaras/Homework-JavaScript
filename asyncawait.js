// ==========================================
// Task 1: Process Array with Callbacks
// ==========================================

function processArray(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i]));
  }
  return result;
}

function doubleElement(element) {
  return element * 2;
}

function reverseElement(element) {
  return String(element).split('').reverse().join('');
}

console.log('--- Task 1 ---');
console.log(processArray([1, 2, 3, 4, 5], doubleElement)); // [2, 4, 6, 8, 10]
console.log(processArray(["hello", "world"], reverseElement)); // ["olleh", "dlrow"]


// ==========================================
// Task 2: Filter Array with Callbacks
// ==========================================

function filterArray(array, callback) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      result.push(array[i]);
    }
  }
  return result;
}

function isEven(number) {
  return typeof number === 'number' && number % 2 === 0;
}

function isShortWord(word) {
  return typeof word === 'string' && word.length <= 4;
}

console.log('--- Task 2 ---');
console.log(filterArray([1, 2, 3, 4, 5], isEven)); // [2, 4]
console.log(filterArray(["cat", "elephant", "dog", "bird"], isShortWord)); // ["cat", "dog", "bird"]


// ==========================================
// Task 3: Chaining Promises
// ==========================================

function washDishes() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Посуд вимито");
    }, 2000);
  });
}

function cleanRoom() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Кімнату прибрано");
    }, 4000);
  });
}

function makeDinner() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Вечеря приготована");
    }, 7000);
  });
}

// Послідовне виконання завдань (запуститься в загальному потоці)
washDishes()
  .then((result) => {
    console.log('--- Task 3 ---');
    console.log(result);
    return cleanRoom();
  })
  .then((result) => {
    console.log(result);
    return makeDinner();
  })
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error));


// ==========================================
// Task 4: Sort Array with Promise
// ==========================================

function sortArray(array) {
  return new Promise((resolve, reject) => {
    if (!array || array.length === 0) {
      reject("Масив порожній");
    } else {
      setTimeout(() => {
        const sorted = [...array].sort((a, b) => a - b);
        resolve(sorted);
      }, 2000);
    }
  });
}

sortArray([5, 2, 9, 1, 3])
  .then((result) => console.log('--- Task 4 --- \nВідсортований масив:', result))
  .catch((error) => console.error(error));


// ==========================================
// Task 5: Async Multiply with Async/Await
// ==========================================

function multiplyAsync(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== 'number' || typeof b !== 'number' || Number.isNaN(a) || Number.isNaN(b)) {
      reject(new Error("Некоректні значення"));
    } else {
      setTimeout(() => {
        resolve(a * b);
      }, 2000);
    }
  });
}

async function mainTask5() {
  try {
    const result = await multiplyAsync(6, 9);
    console.log('--- Task 5 --- \nРезультат множення:', result); // 54
  } catch (error) {
    console.error(error.message);
  }
}

mainTask5();


// ==========================================
// Task 6: Async Array Sort with Async/Await
// ==========================================

function sortArrayAsync(array) {
  return new Promise((resolve, reject) => {
    if (!array || array.length === 0) {
      reject(new Error("Масив порожній"));
    } else {
      setTimeout(() => {
        const sorted = [...array].sort((a, b) => a - b);
        resolve(sorted);
      }, 2000);
    }
  });
}

async function mainTask6() {
  try {
    const numbers = [42, 10, 5, 23, 1];
    const sortedNumbers = await sortArrayAsync(numbers);
    console.log('--- Task 6 --- \nВідсортований масив (асинхронно):', sortedNumbers);
  } catch (error) {
    console.error(error.message);
  }
}

mainTask6();