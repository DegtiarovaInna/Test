//Создать в html форму с тремя инпутами (имя, фамилия, возраст). 
//Написать скрипт, который при отправке формы выводит собранные данные в консоль.



// const form = document.querySelector("form")
//     const username = document.querySelector(".username")
//     const usersurname = document.querySelector(".usersurname")
//     const age = document.querySelector(".userage")

//     form.addEventListener("submit", function(event){
//          event.preventDefault()
//             console.log("Имя:", username.value)
//         console.log("Фамилия:", usersurname.value)
//         console.log("Возраст:", age.value)
//     })





//Доработать процесс таким образом, чтобы при отправке формы данные из нее добавлялись в массив users в виде объекта.
// const form = document.querySelector("form")
//         form.addEventListener("submit", function(event){
//             event.preventDefault()

//             const username = document.querySelector(".username").value
//             const usersurname = document.querySelector(".usersurname").value
//             const age = document.querySelector(".userage").value

//             const user = {
//                 username: username,
//                 usersurname: usersurname,
//                 age: age
//             }

//             // Проверка наличия массива users в localStorage
//             let users = JSON.parse(localStorage.getItem('users')) || []

//             // Добавление нового пользователя в массив
//             users.push(user)

//             // Сохранение массива users в localStorage
//             localStorage.setItem('users', JSON.stringify(users))

//             console.log("Пользователь добавлен:", user)
            
  //      })
//Реализовать функцию rerender. Эта функция очищает контейнер с карточками и создает множество карточек 
//с пользователями из массива. Настроить rerender при добавлении нового пользователя.



document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form")
    const container = document.querySelector('.user-cards-container')

    form.addEventListener("submit", function(event) {
        event.preventDefault()

        const username = document.querySelector(".username").value
        const usersurname = document.querySelector(".usersurname").value
        const age = document.querySelector(".userage").value

        const user = {
            username: username,
            usersurname: usersurname,
            age: age
        }

        let users = JSON.parse(localStorage.getItem('users')) || []
        users.push(user)
        localStorage.setItem('users', JSON.stringify(users))

        console.log("Пользователь добавлен:", user)
        rerender()
    })

    function createCard(user) {
        const card = document.createElement('div')
        card.classList.add('user-card')
        card.innerHTML = `
            <h3>${user.username} ${user.usersurname}</h3>
            <p>Возраст: ${user.age}</p>
        `
        // Добавляем обработчик событий двойного клика для удаления пользователя
    card.addEventListener('dblclick', function() {
        deleteUser(user); // Вызываем функцию удаления пользователя
    })
  
        return card
    }

    function rerender() {
        container.innerHTML = '' // Очищаем контейнер
        let users = JSON.parse(localStorage.getItem('users')) || []
        users.forEach(user => {
            const card = createCard(user)
            container.appendChild(card)
        })
    }

    function deleteUser(userToDelete) {
        let users = JSON.parse(localStorage.getItem('users')) || [];
        // Фильтруем пользователей, оставляя только тех, чей id не совпадает с id пользователя для удаления
        users = users.filter(user => user !== userToDelete);
        localStorage.setItem('users', JSON.stringify(users));
        rerender(); // Обновляем пользовательский интерфейс
    }
    // Вызываем rerender при загрузке страницы
    rerender()
})