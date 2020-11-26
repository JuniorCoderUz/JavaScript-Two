"use strict";
const btns = document.querySelectorAll('button'),
    wrapper = document.querySelector('.btn-block');

console.log(btns[0].classList.length); //Сколько классов в селекторе
console.log(btns[0].classList.item(0)); //вывод значения класса 
console.log(btns[1].classList.add('green')); //добавление нового класса в селектор
console.log(btns[1].classList.remove('green')); //удаление класса с селлектора
console.log(btns[1].classList.toggle('green')); //при присутствие класса в селектора удаляйит 
if (btns[0].classList.contains('blue')) {
    console.log("We have class name red");
}

btns[0].addEventListener('click', () => { //Делигирование сабитей
    if (!btns[1].classList.contains('green')) {  //
        btns[1].classList.add('green');          //
    } else {                                     //  
        btns[1].classList.remove('green');       //
    }                                            

    btns[1].classList.toggle('green');
    for (let b = 0; btns, b++;) {
        btns[b].classList.toggle('green');
    }
});

wrapper.addEventListener('click', (event) => {   //Делигирование сабытей
    if (event.target && event.target.tagName == "BUTTON") {
        console.log('hello');
    }
});

const btn = document.createElement('button'); //Создание нового тега
btn.classList.add('green'); //Добавление класса к новому тегу
wrapper.append(btn); //Добавление нового тега к блоку
