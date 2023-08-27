
//  1. Rectangle - מלבן

// class Rectangle {
//     width: number;
//     height: number;

//     constructor(width: number, height: number) {
//         this.width = width,
//         this.height = height
//     }

//     area() {
//         return this.width * this.height
//     }
// }

// const myRec = new Rectangle(10, 20);
// console.log(myRec.area());


//  2. Square - ריבוע

// class Square extends Rectangle {
//     lengthSide: number;

//     constructor(lengthSide: number) {
//         super(lengthSide, lengthSide);
//         this.lengthSide = lengthSide;
//     }

//     area(): number {
//         return this.lengthSide ** 2
//     }
// }

// const mySquare = new Square(15);
// console.log(mySquare.area());


// 3. Shape - צורה


// class Shape {
//     info() {
//         return 'This is a shape'
//     }
// }

// class Rectangle extends Shape {
//     width: number;
//     height: number;

//     constructor(width: number, height: number) {
//         super();
//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         return this.width * this.height
//     }

//     info(): string {
//         return 'This is a Rectangle'
//     }
// }


// class ColoredRectangle extends Rectangle {
//     color: string

//     constructor(width: number, height: number, color: string) {
//         super(width, height);
//         this.color = color;
//     }

//     info(): string {
//         return `It is a ${this.color} rectangle`
//     }
// }


// 4. Method Chaining


// class Shape {
//     info() {
//         return 'This is a shape'
//     }
// }

// class Rectangle extends Shape {
//     width: number;
//     height: number;

//     constructor(width: number, height: number) {
//         super();
//         this.width = width;
//         this.height = height;
//     }

//     area() {
//         return this.width * this.height
//     }

//     info(): string {
//         return 'This is a Rectangle'
//     }
 
//     scale(coefficient: number) {
//         this.height *= coefficient;
//         this.width *= coefficient;
//     }

//     static mergeRectangle(rec1: Rectangle, rec2: Rectangle) {
//         return new Rectangle(rec1.width + rec2.width, rec1.height + rec2.height)
//     }
// }

// 5. Shape with draw method

class Shape {
    constructor() {}

    draw() {
        return 'Drawing a shape'
    }
}

class Triangle extends Shape {
    constructor() {
        super()
    }

    draw() {
        return 'Drawing a Triangle'
    }
}

class Circle extends Shape {
    constructor() {
        super()
    }

    draw() {
        return 'Drawing a Circle'
    }
}

class Square extends Shape {
    constructor() {
        super()
    }

    draw() {
        return 'Drawing a Square'
    }
}

function renderShapes(items: Array<Triangle | Circle | Square | Shape>) {
    items.forEach((shape => {
        console.log(shape.draw());
        
    }))
}

// const tr = new Triangle()
// const cr = new Square()
// const sh = new Shape()

// renderShapes([tr, cr, sh])

