// Написать цикл, который создает множество параграфов с каждым десятым числом 
//в промежутке от 100 до 50
//  (т.е. 100, 90, 80, 70, 60, 50). 
//Добавить созданные параграфы в div с классом numbers.

// const numbers =[100, 90, 80, 70, 60, 50]
// const div = document.querySelector("div")



//1) with for
// for (let i = 0; i < numbers.length; i++) {
//     const paragraph = document.createElement("p");
//     paragraph.textContent = numbers[i];
//     div.appendChild(paragraph);
// }

//2) with forEach
// numbers.forEach(function(number) {
//     const paragraph = document.createElement("p"); // Создаем новый элемент <p>
//     paragraph.textContent = number; // Устанавливаем текстовое содержимое параграфа как текущее число
//     div.appendChild(paragraph); // Добавляем параграф внутрь div с классом "numbers"
// });



// Написать цикл, который проходится по массиву строк, для каждой строки 
// создает параграф и добавляет его в div с классом strings_container.
//  Строки взять произвольные.
// const strings = ["JavaScript", "HTML", "CSS", "React", "Node.js"];
// const stringsContainer = document.querySelector(".strings_container");

// for (let i = 0; i < strings.length; i++) {
//     const paragraph = document.createElement("p");
//     paragraph.textContent = strings[i];
//     stringsContainer.appendChild(paragraph);
// }




// Написать цикл, который проходится по массиву с объектами - у объектов свойства 
// first_name, last_name и  age (данные взять произвольные) - 
// и создает карточки только для совершеннолетних пользователей. 
// Карточка должна содержать информацию об имени, фамилии и возрасте пользователя. 
// Добавить все карточки в div с классом users_container.

const users = [
    { first_name: 'Inna', 
    last_name: 'Degt', 
    age: 18 },
    { first_name: 'Anna', 
    last_name: 'Kalin', 
    age: 16 },
    { first_name: 'Eugen', 
    last_name: 'Prys', 
    age: 31 },
    { first_name: 'Diana', 
    last_name: 'Skubn', 
    age: 21 }
];

const usersContainer = document.querySelector('.users_cont');


users.forEach(function(user){
    if (user.age >= 18) {
        usersContainer.innerHTML +=`
    <div class="user">
            <h5>${user.first_name}</h5>
            <h5>${user.last_name}</h5>
            <p>${user.age}</p>
        </div>
        `
}})

