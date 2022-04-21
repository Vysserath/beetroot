/* Створи масив «Список покупок». Кожен елемент масиву є об'єктом, який містить назву продукту, кількість і куплений він чи ні, ціну за одиницю товару, сума. Написати кілька функцій для роботи з таким масивом:
    1 Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.
    2 Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.
    3 Створення списку (не) придбаних продуктів. */ 

let buyList = [
    {
        name: 'milk',
        amount: 1,
        isBought: true,
        price: 30,
        sum: this.price * this.amount
    },
    {
        name: 'bread',
        amount: 3,
        isBought: false,
        price: 20,
        sum: this.price * this.amount
    },
    {
        name: 'pizza',
        amount: 1,
        isBought: false,
        price: 150,
        sum: this.price * this.amount
    },
    {
        name: 'water',
        amount: 5,
        isBought: true,
        price: 10,
        sum: this.price * this.amount
    }
];

//Виводити весь список на екран таким чином, щоб спочатку йшли продукти, що ще не придбані, а потім - ті, що вже придбали.

function displayUnbought(arr) {
    arr.sort(function (a, b) {
        if (a.isBought > b.isBought) {
            return 1;
        };
        if (a.isBought < b.isBought) {
            return -1;
        };
        return 0;
    });
    console.log(arr);
};

displayUnbought(buyList);

// Покупка продукту. Функція приймає назву продукту і відзначає його як придбаний.

function buy(name, arr) {
    for(let i = 0; i < arr.length; i++) {
        if (arr[i].name == name) {
            arr[i].isBought = true;
        }
    }
};

buy('pizza', buyList);
console.log(buyList);

// Створення списку (не) придбаних продуктів.

let newList = [];

function  createUnboughtList(arr) {
    for(i in arr) {
        if (arr[i].isBought == false) {
            newList.push(arr[i]);
        }
    }
}

createUnboughtList(buyList);
console.log(newList);
