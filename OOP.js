//Task 1

class Circle {
  #radius;

  constructor(radius) {
    this.radius = radius;
  }

  // get-властивість для радіуса
  get radius() {
    return this.#radius;
  }

  // set-властивість для радіуса
  set radius(value) {
    if (value <= 0) {
      console.error("Радіус повинен бути більшим за 0");
      return;
    }
    this.#radius = value;
  }

  // get-властивість для діаметра
  get diameter() {
    return this.#radius * 2;
  }

  // Метод обчислення площі кола
  getArea() {
    return Math.PI * Math.pow(this.#radius, 2);
  }

  // Метод обчислення довжини кола
  getCircumference() {
    return 2 * Math.PI * this.#radius;
  }
}

// Демонстрація роботи
const circle = new Circle(5);
console.log(`Початковий радіус: ${circle.radius}`); console.log(`Діаметр: ${circle.diameter}`);
console.log(`Площа кола: ${circle.getArea().toFixed(2)}`); console.log(`Довжина кола: ${circle.getCircumference().toFixed(2)}`);

circle.radius = 10;
console.log(`Оновлений радіус: ${circle.radius}`); console.log(`Новий діаметр: ${circle.diameter}`);

// Task 2


class HtmlElement {
    constructor(tagName, selfClosing = false, text = "") {
        this.tagName = tagName;
        this.selfClosing = selfClosing;
        this.text = text;
        this.attributes = [];
        this.styles = [];
        this.children = [];
    }

    setAttribute(name, value) {
        const attr = this.attributes.find(a => a.name === name);

        if (attr) {
            attr.value = value;
        } else {
            this.attributes.push({ name, value });
        }

        return this;
    }

    setStyle(name, value) {
        const style = this.styles.find(s => s.name === name);

        if (style) {
            style.value = value;
        } else {
            this.styles.push({ name, value });
        }

        return this;
    }

    appendChild(element) {
        this.children.push(element);
        return this;
    }

    prependChild(element) {
        this.children.unshift(element);
        return this;
    }

    getHtml() {
        const attrs = this.attributes.map(
            a => `${a.name}="${a.value}"`
        );

        if (this.styles.length) {
            attrs.push(
                `style="${this.styles
                    .map(s => `${s.name}: ${s.value};`)
                    .join(" ")}"`
            );
        }

        const attributes = attrs.length
            ? " " + attrs.join(" ")
            : "";

        const openingTag = `<${this.tagName}${attributes}`;

        if (this.selfClosing) {
            return `${openingTag} />`;
        }

        const childrenHtml = this.children
            .map(child => child.getHtml())
            .join("");

        return `${openingTag}>${this.text}${childrenHtml}</${this.tagName}>`;
    }
}

// Перевірка роботи
const div = new HtmlElement("div");
const paragraph = new HtmlElement("p", false, "Привіт, світ!");

div.setAttribute("id", "wrapper");
div.setStyle("color", "blue");
div.appendChild(paragraph);

console.log(div.getHtml());


// Task 3

class CssClass {
    constructor(className) {
        this.className = className;
        this.styles = [];
    }

    setStyle(name, value) {
        const style = this.styles.find(s => s.name === name);

        if (style) {
            style.value = value;
        } else {
            this.styles.push({ name, value });
        }

        return this;
    }

    removeStyle(name) {
        this.styles = this.styles.filter(s => s.name !== name);
        return this;
    }

    getCss() {
        const styles = this.styles
            .map(s => `${s.name}: ${s.value};`)
            .join(" ");

        return `.${this.className} { ${styles} }`;
    }
}

// Перевірка роботи
const css = new CssClass("box");

css.setStyle("color", "red");
css.setStyle("font-size", "20px");

console.log(css.getCss());

css.removeStyle("color");

console.log("Після видалення стилю:");
console.log(css.getCss());


// Task 4


class HtmlElement {
    constructor(tagName, selfClosing = false, text = "") {
        this.tagName = tagName;
        this.selfClosing = selfClosing;
        this.text = text;
        this.attributes = [];
        this.styles = [];
        this.children = [];
    }

    setAttribute(name, value) {
        const attr = this.attributes.find(a => a.name === name);

        if (attr) {
            attr.value = value;
        } else {
            this.attributes.push({ name, value });
        }

        return this;
    }

    setStyle(name, value) {
        const style = this.styles.find(s => s.name === name);

        if (style) {
            style.value = value;
        } else {
            this.styles.push({ name, value });
        }

        return this;
    }

    appendChild(element) {
        this.children.push(element);
        return this;
    }

    prependChild(element) {
        this.children.unshift(element);
        return this;
    }

    getHtml() {
        const attrs = this.attributes.map(
            a => `${a.name}="${a.value}"`
        );

        if (this.styles.length) {
            attrs.push(
                `style="${this.styles
                    .map(s => `${s.name}: ${s.value};`)
                    .join(" ")}"`
            );
        }

        const attributes = attrs.length
            ? " " + attrs.join(" ")
            : "";

        const openingTag = `<${this.tagName}${attributes}`;

        if (this.selfClosing) {
            return `${openingTag} />`;
        }

        const childrenHtml = this.children
            .map(child => child.getHtml())
            .join("");

        return `${openingTag}>${this.text}${childrenHtml}</${this.tagName}>`;
    }
}

class CssClass {
    constructor(className) {
        this.className = className;
        this.styles = [];
    }

    setStyle(name, value) {
        const style = this.styles.find(s => s.name === name);

        if (style) {
            style.value = value;
        } else {
            this.styles.push({ name, value });
        }

        return this;
    }

    removeStyle(name) {
        this.styles = this.styles.filter(s => s.name !== name);
        return this;
    }

    getCss() {
        const styles = this.styles
            .map(s => `${s.name}: ${s.value};`)
            .join(" ");

        return `.${this.className} { ${styles} }`;
    }
}

class HtmlBlock {
    constructor() {
        this.cssClasses = [];
        this.rootElement = null;
    }

    addCssClass(cssClass) {
        this.cssClasses.push(cssClass);
        return this;
    }

    setRootElement(element) {
        this.rootElement = element;
        return this;
    }

    getCode() {
        const css = this.cssClasses
            .map(c => c.getCss())
            .join("\n");

        const html = this.rootElement
            ? this.rootElement.getHtml()
            : "";

        return `<style>\n${css}\n</style>\n${html}`;
    }
}

// Створення CSS-класів
const wrap = new CssClass("wrap")
    .setStyle("display", "flex");

const block = new CssClass("block")
    .setStyle("width", "300px")
    .setStyle("margin", "10px");

const img = new CssClass("img")
    .setStyle("width", "100%");

const text = new CssClass("text")
    .setStyle("text-align", "justify");

// Створення одного інформаційного блоку
function createBlock() {
    const heading = new HtmlElement(
        "h3", false, "What is Lorem Ipsum?"
    );

    const image = new HtmlElement("img", true)
        .setAttribute("src", "lipsum.jpg")
        .setAttribute("alt", "Lorem Ipsum")
        .setAttribute("class", "img");

    const paragraph = new HtmlElement(
        "p",
        false,
        "Lorem Ipsum is simply dummy text of the printing and typesetting " +
        "industry. Lorem Ipsum has been the industry's standard dummy text " +
        "ever since the 1500s, when an unknown printer took a galley of type " +
        "and scrambled it to make a type specimen book."
    ).setAttribute("class", "text");

    const link = new HtmlElement("a", false, "More...")
        .setAttribute("href", "https://www.lipsum.com/")
        .setAttribute("target", "_blank");

    paragraph.appendChild(link);

    return new HtmlElement("div")
        .setAttribute("class", "block")
        .appendChild(heading)
        .appendChild(image)
        .appendChild(paragraph);
}

// Кореневий елемент
const wrapper = new HtmlElement("div")
    .setAttribute("id", "wrapper")
    .setAttribute("class", "wrap")
    .appendChild(createBlock())
    .appendChild(createBlock());

// Створення HTML-блоку
const htmlBlock = new HtmlBlock();

htmlBlock
    .addCssClass(wrap)
    .addCssClass(block)
    .addCssClass(img)
    .addCssClass(text)
    .setRootElement(wrapper);

// Виведення на сторінку
document.write(htmlBlock.getCode());
