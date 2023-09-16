class Shape {
    constructor() {
        if (this.constructor === Shape) {
            throw new Error("Abstract class can't be used.");
        }
    }

    area() {
        throw new Error("Method 'area()' implemented in subclasses.");
    }

    perimeter() {
        throw new Error("Method 'perimeter()' implemented in subclasses.");
    }

    toString() {
        return `Area: ${this.area()}, Perimeter: ${this.perimeter()}`;
    }
}


class Rectangle extends Shape {
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

    perimeter() {
        return 2 * (this.width + this.height);
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }

    area() {
        return this.side ** 2;
    }

    perimeter() {
        return 4 * this.side;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }

    area() {
        return Math.PI * (this.radius ** 2);
    }

    perimeter() {
        return 2 * Math.PI * this.radius;
    }
}

exports.modules =  {
    Rectangle,
    Square,
    Circle
}
