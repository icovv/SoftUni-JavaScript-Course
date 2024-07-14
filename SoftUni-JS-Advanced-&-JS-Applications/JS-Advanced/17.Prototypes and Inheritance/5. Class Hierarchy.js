function returnClases(){
    class Figure{
        constructor(units = `cm`){
            this.units = units;
        }

        get area(){

        }
        changeUnits(typeOfUnits){
            this.units = typeOfUnits
        }
        toString(){
            return `Figures units: ${this.units}`
        }
    }

    class Circle extends Figure{
        constructor(radius,units){
            super(units);
            this.radius = radius
        }
        get area(){
            if (this.units == `mm`){
                this._radius = this.radius * 10;
            } else if (this.units == `m`){
                this._radius = this.radius / 100;
            } else if (this.units == `cm`){
                this._radius = this.radius
            }
            return this._radius * this._radius * Math.PI
        }
        toString(){
            return `Figures units: ${this.units} Area: ${this.area} - radius: ${this._radius}`
        }

    }

    class Rectangle extends Figure{
        constructor(width,height,units){
            super(units);
            this.width = width;
            this.height = height;
        }
        get area(){
            if (this.units == `mm`){
                this._width = this.width * 10;
                this._height = this.height * 10;
            } else if (this.units == `m`){
                this._width = this.width / 100;
                this._height = this.height / 100;
            } else if (this.units == `cm`){
                this._width = this.width;
                this._height = this.height
            }
            return this._width * this._height
        }
        toString(){
            return `Figures units: ${this.units} Area: ${this.area} - width: ${this._width}, height: ${this._height}`
        }



    }

    return{
        Figure,
        Circle,
        Rectangle
    }

}

let classes = returnClases();
let Figure = classes.Figure;
let Rectangle = classes.Rectangle;
let Circle = classes.Circle;

let c = new Circle(5);

console.log(c.area); // 78.53981633974483

console.log(c.toString()); // Figures units: cm Area: 78.53981633974483 - radius: 5

let r = new Rectangle(3, 4, 'mm');

console.log(r.area); // 1200

console.log(r.toString()); //Figures units: mm Area: 1200 - width: 30, height: 40

r.changeUnits('cm');

console.log(r.area); // 12
console.log(r.toString()); // Figures units: cm Area: 12 - width: 3, height: 4 
c.changeUnits('mm'); 
console.log(c.area); // 7853.981633974483 
console.log(c.toString()) // Figures units: mm Area: 7853.981633974483 - radius: 50
