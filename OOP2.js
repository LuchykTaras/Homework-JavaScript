// Task 1   
// Простий маркер
class Marker {
  constructor(color, inkPercentage) {
    this.color = color;
    // Обмежуємо значення від 0 до 100
    this.inkPercentage = Math.min(100, Math.max(0, inkPercentage));
  }

  print(text) {
    let output = "";
    
    for (let char of text) {
      if (this.inkPercentage <= 0) {
        console.log("Чорнила закінчилися!");
        break;
      }

      output += char;

      // Символи пробілів не витрачають чорнило
      if (char !== " ") {
        this.inkPercentage -= 0.5;
      }
    }

    // Вивід кольорового тексту в консоль
    console.log(`%c${output}`, `color: ${this.color}; font-weight: bold;`);
    console.log(`Залишок чорнил: ${this.inkPercentage.toFixed(1)}%`);
  }
}

// Заправляється від маркера
class RefillableMarker extends Marker {
  refill(amount) {
    if (amount <= 0) return;
    this.inkPercentage = Math.min(100, this.inkPercentage + amount);
    console.log(`Маркер заправлено. Поточний рівень чорнил: ${this.inkPercentage}%`);
  }
}

// --- Демонстрація Завдання 1 ---
console.log("=== Завдання 1 ===");
const simpleMarker = new Marker("blue", 3); // 3% чорнила = 6 непорожніх символів
simpleMarker.print("Hello World!"); // Виведе "Hello W" і повідомить, що чорнила закінчилися

const refillable = new RefillableMarker("red", 1);
refillable.print("Test");
refillable.refill(50);
refillable.print("Це довгий текст після успішного заправлення маркера!");

// Task 2

class ExtendedDate extends Date {
  // Метод для виведення дати (число та місяць) текстом українською мовою
  getDateInWords() {
    const months = [
      "січня", "лютого", "березня", "квітня", "травня", "червня",
      "липня", "серпня", "вересня", "жовтня", "листопада", "грудня"
    ];
    return `${this.getDate()} ${months[this.getMonth()]}`;
  }

  // Перевірка минулої або майбутньої/поточної дати
  isFutureOrCurrent() {
    const today = new Date();
    // Очищаємо час для точного порівняння лише дат
    today.setHours(0, 0, 0, 0);
    
    const targetDate = new Date(this.getTime());
    targetDate.setHours(0, 0, 0, 0);

    return targetDate >= today;
  }

  // Перевірка на високосний рік
  isLeapYear() {
    const year = this.getFullYear();
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
  }

  // Метод, який повертає об'єкт наступної дати
  getNextDate() {
    const nextDate = new ExtendedDate(this.getTime());
    nextDate.setDate(this.getDate() + 1);
    return nextDate;
  }
}

// --- Демонстрація Завдання 2 ---
console.log("\n=== Завдання 2 ===");
const myDate = new ExtendedDate(2024, 1, 28); // 28 лютого 2024 (високосний)

console.log("Дата текстом:", myDate.getDateInWords());
console.log("Чи майбутня/поточна дата?:", myDate.isFutureOrCurrent());
console.log("Чи високосний рік?:", myDate.isLeapYear());

const nextDay = myDate.getNextDate();
console.log("Наступна дата текстом:", nextDay.getDateInWords());

// Task 3
class Employee {
  constructor(name, position, department, salary) {
    this.name = name;
    this.position = position;
    this.department = department;
    this.salary = salary;
  }
}

class EmpTable {
  constructor(employees) {
    this.employees = employees;
  }

  getHtml() {
    let html = '<table border="1" style="border-collapse: collapse; width: 100%;">\n';
    html += '  <thead>\n';
    html += '    <tr><th>ПІБ</th><th>Посада</th><th>Відділ</th><th>Зарплата ($)</th></tr>\n';
    html += '  </thead>\n';
    html += '  <tbody>\n';

    for (let emp of this.employees) {
      html += `    <tr>
      <td>${emp.name}</td>
      <td>${emp.position}</td>
      <td>${emp.department}</td>
      <td>${emp.salary}</td>
    </tr>\n`;
    }

    html += '  </tbody>\n';
    html += '</table>';
    return html;
  }
}

// --- Демонстрація Завдання 3 ---
console.log("\n=== Завдання 3 ===");
const bankEmployees = [
  new Employee("Олександр Іваненко", "Касир", "Обслуговування клієнтів", 1200),
  new Employee("Марія Коваленко", "Менеджер з кредитування", "Кредитний відділ", 2100),
  new Employee("Дмитро Сидоренко", "Аналітик", "Фінансовий відділ", 2800)
];

const empTable = new EmpTable(bankEmployees);
console.log(empTable.getHtml());

// task 4

class StyledEmpTable extends EmpTable {
  getStyles() {
    return `
<style>
  .styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    min-width: 400px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
  }
  .styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
  }
  .styled-table th,
  .styled-table td {
    padding: 12px 15px;
    border: 1px solid #dddddd;
  }
  .styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
  }
  .styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
  }
</style>`;
  }

  getHtml() {
    // Отримуємо HTML з батьківського класу
    let parentHtml = super.getHtml();
    
    // Замінюємо базовий тег <table> на варіант із класом для стилів
    parentHtml = parentHtml.replace(
      '<table border="1" style="border-collapse: collapse; width: 100%;">', 
      '<table class="styled-table">'
    );

    // Додаємо стилі на початок
    return `${this.getStyles()}\n${parentHtml}`;
  }
}

// --- Демонстрація Завдання 4 ---
console.log("\n=== Завдання 4 ===");
const styledEmpTable = new StyledEmpTable(bankEmployees);
console.log(styledEmpTable.getHtml());