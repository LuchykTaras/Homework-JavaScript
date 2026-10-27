// Task 1

const shoppingList = [
  { name: "Хліб", amount: 1, isBought: true },
  { name: "Молоко", amount: 2, isBought: false },
  { name: "Яблука", amount: 5, isBought: false },
  { name: "Сир", amount: 1, isBought: true }
];

// 1. Виведення: спочатку не куплені, потім куплені
function printShoppingList(list) {
  const sortedList = [...list].sort((a, b) => Number(a.isBought) - Number(b.isBought));
  console.log("--- Список покупок ---");
  sortedList.forEach(item => {
    const status = item.isBought ? "[x] Куплено" : "[ ] Не куплено";
    console.log(`${status} | ${item.name} — ${item.amount} шт.`);
  });
  console.log("");
}

// 2. Додавання покупки до списку
function addItem(list, name, amount) {
  const existingItem = list.find(item => item.name.toLowerCase() === name.toLowerCase());
  if (existingItem) {
    existingItem.amount += amount;
  } else {
    list.push({ name, amount, isBought: false });
  }
}

// 3. Придбання товару
function buyItem(list, name) {
  const item = list.find(item => item.name.toLowerCase() === name.toLowerCase());
  if (item) {
    item.isBought = true;
  } else {
    console.log(`Товар "${name}" не знайдено у списку.`);
  }
}

// Перевірка
printShoppingList(shoppingList);
addItem(shoppingList, "Молоко", 1); // Збільшить кількість до 3
addItem(shoppingList, "Кава", 1);    // Додасть новий товар
buyItem(shoppingList, "Яблука");    // Позначить як куплений
printShoppingList(shoppingList);

// Task 2

const receipt = [
  { name: "Кава", amount: 2, price: 120 },
  { name: "Круасан", amount: 3, price: 45 },
  { name: "Шоколад", amount: 1, price: 90 },
  { name: "Вода", amount: 4, price: 20 }
];

// 1. Виведення чека
function printReceipt(rec) {
  console.log("=== ЧЕК ===");
  rec.forEach(item => {
    const total = item.amount * item.price;
    console.log(`${item.name} x${item.amount} по ${item.price} грн = ${total} грн`);
  });
  console.log("===========");
}

// 2. Загальна сума чека
function getTotalSum(rec) {
  return rec.reduce((acc, item) => acc + item.amount * item.price, 0);
}

// 3. Найдорожча покупка (найбільша загальна вартість позиції)
function getMostExpensiveItem(rec) {
  return rec.reduce((max, item) => 
    (item.amount * item.price > max.amount * max.price) ? item : max
  );
}

// 4. Середня вартість одного товару (одиниці товару) у чеку
function getAverageUnitPrice(rec) {
  const totalItemsCount = rec.reduce((acc, item) => acc + item.amount, 0);
  return totalItemsCount ? (getTotalSum(rec) / totalItemsCount).toFixed(2) : 0;
}

// Перевірка
printReceipt(receipt);
console.log(`Загальна сума: ${getTotalSum(receipt)} грн`);
console.log("Найдорожчий товар у чеку:", getMostExpensiveItem(receipt));
console.log(`Середня ціна 1 од. товару: ${getAverageUnitPrice(receipt)} грн`);

// Task 3 

const styles = [
  { name: "color", value: "darkred" },
  { name: "font-size", value: "24px" },
  { name: "text-align", value: "center" },
  { name: "text-decoration", value: "underline" },
  { name: "font-weight", value: "bold" }
];

function printStyledText(stylesArray, text) {
  const styleString = stylesArray
    .map(style => `${style.name}: ${style.value};`)
    .join(" ");

  const html = `<p style="${styleString}">${text}</p>`;
  
  if (typeof document !== "undefined") {
    document.write(html);
  } else {
    console.log("Сгенерований HTML-код:\n", html);
  }
}

// Перевірка
printStyledText(styles, "Привіт! Це стилізований текст через JS.");

// Task 4

const classrooms = [
  { name: "101-A", seats: 12, faculty: "Комп'ютерних наук" },
  { name: "204-B", seats: 18, faculty: "Інженерний" },
  { name: "305-A", seats: 10, faculty: "Комп'ютерних наук" },
  { name: "102-C", seats: 20, faculty: "Економічний" },
  { name: "401-B", seats: 15, faculty: "Інженерний" }
];

const group = {
  name: "КН-21",
  studentsCount: 14,
  faculty: "Комп'ютерних наук"
};

// 1. Вивести всі аудиторії
function printClassrooms(list) {
  console.log("--- Список аудиторій ---");
  list.forEach(c => console.log(`${c.name} | Місць: ${c.seats} | Кафедра/Факультет: ${c.faculty}`));
  console.log("");
}

// 2. Відобразити аудиторії для вказаного факультету
function filterByFaculty(list, facultyName) {
  return list.filter(c => c.faculty.toLowerCase() === facultyName.toLowerCase());
}

// 3. Відобразити аудиторії, що підходять для переданої групи
function filterForGroup(list, groupObj) {
  return list.filter(c => 
    c.faculty.toLowerCase() === groupObj.faculty.toLowerCase() && 
    c.seats >= groupObj.studentsCount
  );
}

// 4. Сортування аудиторій за кількістю місць (за зростанням)
function sortBySeats(list) {
  return [...list].sort((a, b) => a.seats - b.seats);
}

// 5. Сортування аудиторій за назвою (за алфавітом)
function sortByName(list) {
  return [...list].sort((a, b) => a.name.localeCompare(b.name));
}

// Перевірка
console.log("1. Усі аудиторії:");
printClassrooms(classrooms);

console.log("2. Аудиторії факультету Комп'ютерних наук:");
printClassrooms(filterByFaculty(classrooms, "Комп'ютерних наук"));

console.log(`3. Аудиторії для групи ${group.name} (${group.studentsCount} студ., ${group.faculty}):`);
printClassrooms(filterForGroup(classrooms, group));

console.log("4. Сортування за кількістю місць:");
printClassrooms(sortBySeats(classrooms));

console.log("5. Сортування за назвою:");
printClassrooms(sortByName(classrooms));