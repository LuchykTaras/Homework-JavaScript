const CURRENT_YEAR = 2026;
const USD_TO_EUR_RATE = 0.92;
const FILE_SIZE_MB = 820;

// 1.Привітання
var name="Taras ";
const name = prompt("What is your name");
alert(`Радий знайомству, ${name}!`);

// 2. Розрахунок віку
const birthYear = Number(prompt("2. Введіть ваш рік народження:"));
alert(`Вам приблизно ${CURRENT_YEAR - birthYear} p.`);

// 3. Периметр квадрата
const side = Number (prompt("3. Введіть довжину сторони квадрата:"));
alert (`Периметр квадрата: ${side * 4}`);

// 4. Площа кола 
const radius = Number(prompt("4. Введіть радіус кола:"));
alert (`Площа кола: ${(Math.PI * radius ** 2)}).toFixed(2)}`);

// 5. Розрахунок швидкості 
const distance = Number(prompt("5. Введіть відстань  між містами (км):"));
const hours = Number(prompt("За скільки годин потрібно дістатися?"));
alert(`Необхідна швидкість: ${(distance / hours).toFixed(2)} км/год`);

// 6. Конвертер USD -> EUR
const usd = Number(prompt("6. Введіть суму в USD:"));
alert(`${usd} USD = ${(usd * USD_TO_EUR_RATE).toFixed(2)} EUR`);

// 7. Місткість флешки
const flashGb = Number(prompt("7. Введіть обсяг флешки (ГБ):"));
const filesCount = Math.trunc((flashGb * 1024) / FILE_SIZE_MB);
alert(`На флешку поміститься: ${filesCount} файл(ів) по 820 МБ`);

// 8. Шоколадки та здача
const wallet = Number(prompt("8. Скільки у вас грошей у гаманці?"));
const price = Number(prompt("Скільки коштує одна шоколадка?"));
const chocoCount = Math.trunc(wallet / price);
const change = (wallet % price).toFixed(2);
alert(`Куплено шоколадок: ${chocoCount}, здача: ${change} грн`);

// 9. Перевертень тризначного числа через %
const num3 = Number(prompt("9. Введіть тризначне число:"));
const units = num3 % 10;
const tens = Math.trunc((num3 / 10) % 10);
const hundreds = Math.trunc(num3 / 100);
const reversed = units * 100 + tens * 10 + hundreds;
alert(`Число-перевертень: ${reversed}`);

// 10. Парне/непарне без if/switch (тернарний / логічний вираз)
const intNum = parseInt(prompt("10. Введіть ціле число:"), 10);
const parity = (intNum % 2 === 0) ? "парне" : "непарне";
alert(`Число ${intNum} — ${parity}`);