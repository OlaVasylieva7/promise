// task 1
//   Напишіть функцію, яка повертає проміс, який виконується через певний час (наприклад, 2 секунди)
//   і повертає повідомлення "Проміс виконано".

// function promise() {
//     return new Promise(() => {
//         setTimeout(() => {
//             resolve("hello")
//         })
//     })
// }

// task 2
// Вбудована функція setTimeout використовує колбек-функції.
// Створіть альтернативу яка базується на промісах.
// Функція delay(ms) повинна повертати проміс, який перейде в стан resolved через ms мілісекунд, так щоб ми могли додати до нього .then:
// function delay(ms) {
//     return new Promise((resolve) => {
//         setTimeout(resolve, ms)
//     });
//   }

//   delay(3000).then(() => alert('виконалось через 3 секунди'));

// task 3
// Напишіть функцію, яка отримує масив чисел і повертає проміс, який виконується, якщо всі числа в масиві є парними.
// Якщо ж принаймні одне число непарне, проміс повинен бути відхилено з повідомленням "Є непарні числа".

// function checkEvenNumbers(arr) {
//     return new Promise((resolve, reject) => {
//         for (let num of arr) {
//         if (num % 2 !== 0) {
//             reject("there are odd numbers");
//             return
//         }
//     }
//     resolve("all numbers are even")
//     } );
// }

// checkEvenNumbers([2, 4, 6])
// .then(result => console.log(result))
// .catch(error => console.log(error));

// checkEvenNumbers([2, 5, 7])
// .then(result => console.log(result))
// .catch(error => console.log(error));

// task 4
// Напишіть функцію, яка приймає URL зображення і повертає проміс, який завантажує це зображення.
// Якщо завантаження успішне, проміс виконується з завантаженим зображенням, а в разі помилки — відхиляється з повідомленням про помилку.

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();

    img.onload = () => resolve(img);
    img.onerror = () => reject("error loading image");

    img.src = url;
  });
}

loadImage(
  "https://cdn.pixabay.com/photo/2015/10/05/17/09/minion-972908_1280.jpg"
)
  .then((img) => document.body.appendChild(img))
  .catch((error) => console.error(error));

// task 5
// Напишіть функцію, яка приймає два числа і повертає проміс, який виконується з результатом їхнього додавання.
// Якщо хоча б одне з чисел не є числом, проміс повинен бути відхилено з повідомленням "Неправильні аргументи".

function addNumbers(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a === "number" && typeof b === "number") {
      resolve(a + b);
    } else reject("wrong arguments");
  });
}

addNumbers("i", 5)
.then(result => console.log(result))
.catch(error => console.log(error));