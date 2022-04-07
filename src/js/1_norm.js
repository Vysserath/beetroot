let tag = prompt('Як Вас звати?');
alert("Привіт, " + tag);

const year = 2022;
let birth = prompt('Введіть Ваш рік народження');
alert("Ваш приблизний вік - " + (year - birth));

let squareSide = prompt('Введіть сторону квадрата');
let perimeter = squareSide * 4;
alert("Периметр квадрата зі стороною " + squareSide + " складає " + perimeter);

let rad = prompt("Введіть радіус кола")
let circleArea = rad**2 * Math.PI
alert("Площа круга з  радіусом " + rad + " складає " + circleArea);