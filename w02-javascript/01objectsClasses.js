// classes are a way to define blueprints for creating objects

let rectangleObject = {
    length : 20, 
    breadth : 30, 
    color: "Red",
    area: (l, b) => {
        return l * b;
    },
    paint: (c) => {
        console.log(`Painting with color ${rectangleObject.color}.`)
    }
}

console.log(rectangleObject.length);
console.log(rectangleObject.area(rectangleObject.length, rectangleObject.breadth));
rectangleObject.paint();

// class for above object

class rectangle {
    constructor(width, length, color) {
        this.width = width;
        this.length = length;
        this.color = color;
    }

    area() {
        const area = this.width * this.length;
        return area;
    }

    paint () {
        console.log(`Painting with color ${this.color}.`);
    }
}

const rect = new rectangle(2, 4, "Green");
console.log(rect.area());
rect.paint();