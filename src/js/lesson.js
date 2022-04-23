class Circle {
    constructor(rad){
        this.rad = rad;
    }

    get rad() {
        return this._rad;
    }

    get diam() {
        return this.rad * 2;
    }

    set rad(value) {
        if (value > 0) {
            this._rad = value;
        }
    }

    squareCircle() {
        console.log(Math.PI * this._rad**2);
    }

    lengthCircle() {
        console.log(Math.PI**2 * this.rad);
    }
}

let crug = new Circle(5);

console.log(crug.diam);

crug.squareCircle();
crug.lengthCircle();

