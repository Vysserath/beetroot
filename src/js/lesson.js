//1 Створити сторінку, що показує нумерований список пісень:

var playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
    author: "QUEEN",
    song:"BOHEMIAN RHAPSODY"
    },
    {
    author: "LYNYRD SKYNYRD",
    song:"FREE BIRD"
    },
    {
    author: "DEEP PURPLE",
    song:"SMOKE ON THE WATER"
    },
    {
    author: "JIMI HENDRIX",
    song:"ALL ALONG THE WATCHTOWER"
    },
    {
    author: "AC/DC",
    song:"BACK IN BLACK"
    },
    {
    author: "QUEEN",
    song:"WE WILL ROCK YOU"
    },
    {
    author: "METALLICA",
    song:"ENTER SANDMAN"
    }];


let list = document.getElementById('list');
let ol = document.createElement('ol');

for (i in playList) {
    ol.innerHTML += '<li>' + playList[i].author + ' - ' + playList[i].song +'</li>';
    list.append(ol);
}

//2 Створити HTML-сторінку з кнопкою "Відкрити" і модальним вікном. На модальном вікні повинен бути текст і кнопка "Закрити". Спочатку модальне вікно не відображається. При кліку на кнопку "Відкрити" з'являється модальне вікно, на кнопку "Закрити" — зникає.

let open = document.querySelector('.btn_open');
let close = document.querySelector('.btn_close');
let modal = document.querySelector('.modal');

open.onclick = function() {
    modal.style.opacity = '1';
}

close.onclick = function() {
    modal.style.opacity = '0';
}

//3 Створити HTML-сторінку зі світлофором і кнопкою, яка перемикає світлофор на наступний колір.

let color = document.querySelector('.btn_color');
let red = document.querySelector('.traffic__color_red');
let green = document.querySelector('.traffic__color_green');
let yellow = document.querySelector('.traffic__color_yellow');
let pastColor;

color.onclick = function() {
    if (red.classList.contains('active')) {
        red.classList.remove('active');
        pastColor = 'red';
        yellow.classList.add('active');
    }
    else if (green.classList.contains('active')) {
        green.classList.remove('active');
        pastColor = 'green';
        yellow.classList.add('active');
    }
    else if (yellow.classList.contains('active') && pastColor == 'green') {
        yellow.classList.remove('active');
        red.classList.add('active');
    }
    else if (yellow.classList.contains('active')  && pastColor == 'red') {
        yellow.classList.remove('active');
        green.classList.add('active');
    }
}