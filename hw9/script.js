// Создать кнопку и красный квадрат с размерами 200х200px. 
// При клике на кнопку менять у квадрата цвет заднего фона на зеленый и уменьшать 
// его до размеров 100х100px.

const square = document.querySelector(".square")
const button = document.querySelector(".magic")
button.addEventListener("click", function() {
     square.style.backgroundColor = "green"
     square.style.width = "100px"
     square.style.height ="100px"
     })




    //  Создать кнопку и розовый квадрат с размерами 200х200px. 
    //  При клике на кнопку менять цвет на синий и выводить в консоль
    //   обновленный цвет квадрата.
    const square2 = document.querySelector(".square2")
     const button2 = document.querySelector(".magic2")
     button2.addEventListener("click", function() {
          square2.style.backgroundColor = "blue"
          console.log(square2.style.backgroundColor)
          })


//Создать кнопку и квадрат с размерами 150х150px. При клике на кнопку увеличивать высоту и ширину квадрата на 20px.

 const square3 = document.querySelector(".square3")
 const button3 = document.querySelector(".magic3")
 //1)
//      button3.addEventListener("click", function() {
//         square3.style.width = "170px"
//         square3.style.height ="170px"
//           })
//2)
          button3.addEventListener("click", function() {
            // Получаем текущие значения ширины и высоты квадрата
            let currentWidth = square3.offsetWidth
            let currentHeight = square3.offsetHeight
      
            // Увеличиваем ширину и высоту на 20px
            square3.style.width = (currentWidth + 20) + "px"
            square3.style.height = (currentHeight + 20) + "px"
          })
// Свойство offsetWidth предоставляет ширину элемента в пикселях, включая ширину границы и полосы прокрутки (если они есть),
// но исключая отступы. Когда мы получаем доступ к .offsetWidth элемента, мы получаем его ширину в пикселях. 
// (Например, когда нам нужно знать размеры элемента на странице, особенно при динамическом изменении размеров 
// или позиций элементов через JavaScript.



// Создать кнопку и div с классом root. При клике на кнопку в div создается параграф синего цвета. Текст параграфа произвольный.
//1)
const text = document.querySelector(".root")
 const button4 = document.querySelector(".magic4")
 button4.addEventListener("click", function() {
    text.innerHTML += `
    <p> Текст параграфа произвольный</p>
   `
 })



 // Создать кнопку и div с классом root. При клике на кнопку в div создаются по очереди параграфы синего и зеленого цветов. Первый цвет синий.
 const texts = document.querySelector(".root2")
 const button5 = document.querySelector(".magic5")
 let currentColor = "blue"; // Изначально установлен синий цвет

    button5.addEventListener("click", function() {  //Устанавливаем обработчик события "click" на кнопку button5. Когда кнопка будет нажата, выполняется указанная функция.
      // Создаем новый параграф
      const paragraph = document.createElement("p"); //Создаем новый элемент <p> и сохраняем его в переменной paragraph.
      paragraph.textContent = "Текст параграфа произвольный";
      
      // Добавляем класс в зависимости от текущего цвета
      if (currentColor === "blue") {
        paragraph.classList.add("blue-text");
        currentColor = "green"; // Меняем текущий цвет на зеленый
      } else {
        paragraph.classList.add("green-text");
        currentColor = "blue"; // Меняем текущий цвет на синий
      }

      texts.appendChild(paragraph); // Добавляем параграф в корневой элемент texts
    });

