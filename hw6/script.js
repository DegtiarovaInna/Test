//Напишите цикл for, который выводит консоль каждое второе число от 0 до 10


//1) т.к. они нечетные, то

// for (let i=0; i<=10; i++)
// {if (i % 2) {
//      console.log(i);
//     }
// }


//  Напишите цикл for, который выводит в консоль  все числа от 55 до 20
// for (let i=55; i>=20; i--)
// {
//       console.log(i);    
//  }



// Дан массив numbers. Вывести в консоль все числа из массива
// const numbers = [3, 5, 11, 2, 8, 1, 6];
// Сформировать новый массив numbers_squared и передать в него все элементы из массива numbers, возведенные в квадрат
//Создать переменную last_elem и передать в нее последний элемент из сформированного массива numbers_squared 
//(обратиться к элементу массива по индексу)

//  const numbers = [3, 5, 11, 2, 8, 1, 6];
//  console.log(numbers)
//  for (let i = 0; i <numbers.length; i++) {
//             console.log(numbers[i])
//      }
//  let numbers_squared =[]
//  for (let i = 0; i <numbers.length; i++) {
//     numbers_squared.push(numbers[i]**2)
// }
// console.log(numbers_squared)
//  let last_elem = numbers_squared[numbers.length-1]

//  // т.к. мы можем посчитать кол-во элементов и знаем индекс, то можно let last_elem = numbers_squared[6]
// console.log(last_elem)


// Дан объект user. Используя данные из объекта, сформировать строку в формате: ‘User’s name is <FIRST_NAME> <LAST_NAME>. He is <AGE> years old’

 const user = {
 first_name: 'Ivan', 
 last_name: 'Ivanov', 
 age: 20, 
 salary: 500
 }
 console.log(`User’s name is ${user.first_name} ${user.last_name}. He is ${user.age} years old`)



