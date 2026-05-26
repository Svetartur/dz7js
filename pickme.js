//dz1
// class Button {
//     constructor(width, height, text) {
//         this.width = width;
//         this.height = height;
//         this.text = text;
//     }

//     showBtn() {
//         document.write(`<button style="width: ${this.width}px; height: ${this.height}px;">${this.text}</button>`);
//     }
// }

// class BootstrapButton extends Button {
//     constructor(width, height, text, color) {
//         super(width, height, text);
//         this.color = color;
//     }

//     showBtn() {
//         document.write(`<button style="width: ${this.width}px; height: ${this.height}px; background-color: ${this.color}; color: white; border: none; border-radius: 4px;">${this.text}</button>`);
//     }
// }

// const defaultBtn = new Button(120, 40, 'Відправити');
// defaultBtn.showBtn();

// const primaryBtn = new BootstrapButton(150, 45, 'Успішно', 'green');
// primaryBtn.showBtn();

//dz2
// class GeometricFigure {
//     constructor(name) {
//         this._name = name;
//     }

//     get name() {
//         return this._name;
//     }

//     showInfo() {
//         console.log(`Фігура: ${this.name}`);
//     }

//     getArea() {
//         return 0;
//     }

//     getPerimeter() {
//         return 0;
//     }
// }

// class Square extends GeometricFigure {
//     constructor(side) {
//         super('Квадрат');
//         this.side = side;
//     }

//     showInfo() {
//         console.log(`Фігура: ${this.name}, Сторона = ${this.side}`);
//     }

//     getArea() {
//         return this.side * this.side;
//     }

//     getPerimeter() {
//         return this.side * 4;
//     }
// }

// class Rectangle extends GeometricFigure {
//     constructor(width, height) {
//         super('Прямокутник');
//         this.width = width;
//         this.height = height;
//     }

//     showInfo() {
//         console.log(`Фігура: ${this.name}, Ширина = ${this.width}, Висота = ${this.height}`);
//     }

//     getArea() {
//         return this.width * this.height;
//     }

//     getPerimeter() {
//         return (this.width + this.height) * 2;
//     }
// }

// class Triangle extends GeometricFigure {
//     constructor(a, b, c) {
//         super('Трикутник');
//         this.a = a;
//         this.b = b;
//         this.c = c;
//     }

//     showInfo() {
//         console.log(`Фігура: ${this.name}, Сторони = ${this.a}, ${this.b}, ${this.c}`);
//     }

//     getPerimeter() {
//         return this.a + this.b + this.c;
//     }

//     getArea() {
//         const p = this.getPerimeter() / 2;
//         return Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
//     }
// }

// // const figures = [
// //     new Square(6),
// //     new Rectangle(5, 8),
// //     new Triangle(3, 4, 5)
// // ];

// // figures.forEach(figure => {
// //     figure.showInfo();
// //     console.log(`Площа: ${figure.getArea()}`);
// //     console.log(`Периметр: ${figure.getPerimeter()}`);
// //     console.log('-----------------------------');
// // });

//dz3
class ExtentedArray extends Array {
    getString(separator) {
        return this.join(separator);
    }

    getHtml(tagName) {
        let htmlElements = this.map(item => `<${tagName}>${item}</${tagName}>`).join('');
        if (tagName === 'li') {
            htmlElements = `<ul>${htmlElements}</ul>`;
        }
        return htmlElements;
    }
}

const myData = new ExtentedArray('Елемент 1', 'Елемент 2', 'Елемент 3');

console.log(myData.getString(' — '));

document.write(myData.getHtml('li'));
document.write(myData.getHtml('p'));