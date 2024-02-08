//Напишите функцию, которая принимает два числовых аргумента и возвращает наименьшее из них.

// function Num (a, b) {
//     if (a < b) {
//                console.log( a)
//              } else if (a === b) {
//                 console.log(`Число ${a} = ${b}`)
//              } else {
//                console.log(b)
//           } 
//       }
//         let a = +prompt("Введите число 1")
//         let b = +prompt("Введите число 2")
       
//      Num (a, b)




//Напишите функцию, которая принимает два числовых аргумента и выводит в консоль все четные числа от большего к меньшему.

// function Num (a, b) {
//          if (a < b ) {
//             for (i= b; i>=a; i--){
//                 if (i%2===0) {
//                     console.log(i)
//                 }
//             }
//                   } else if (a === b) {
//                     if (a%2 ===0) {
//                      console.log(`Числа равны ${a} =  ${b} - и четные`)
//                     }
//                     else { console.log(`Четных чисел нет`) }
//                   } else { 
//                     for (i= a; i>=b; i--){
//                     if (i%2===0) {
//                         console.log(i)
//                     }
//                 }
//                } 
//            }
//              let a = +prompt("Введите число 1")
//              let b = +prompt("Введите число 2")
           
//           Num (a, b)


//Напишите функцию power, которая принимает два числовых аргумента (основание степени и саму степень) и возвращает число в указанной степени.
// Значение степени должно быть указано по умолчанию 2.

// function power (a, n = 2) {
//          const result = a ** n
//          console.log (result)
// }
// let a = +prompt("Введите число ")
// let n = +prompt("Введите степень")

// power (a, n)
// power (3, 5)
// power (3)


//Напишите функцию, которая принимает числовой аргумент n и считает сумму чисел от 1 до n.

// function Num (n) {
//     let sum = 0
//     for (let i= 1; i<= n; i++){
//         sum += i}
//               console.log (sum)
// }
// let n = +prompt("Введите число")
// Num (n)


//Напишите функцию, которая принимает два числовых аргумента n и m и считает сумму четных чисел и нечетных чисел от n до m. 
//Суммы выведите в консоль (в начале сумму четных чисел, а затем сумму нечетных).

// function Num (a, b) {
//     let sumChet = 0
//     let sumNechet = 0
//               if (a < b ) {
//                  for (i= a; i<=b; i++){
//                      if (i%2===0) {
//                         sumChet +=i
//                      }                   
//                      else {
//                         sumNechet +=i
//                      }                 
//                  }  console.log(sumChet)
//                     console.log(sumNechet)
//                         } 
//                  else if (a === b){
//                     if (a%2 ===0) {
//                     console.log(`Числа равны ${a} =  ${b} - и четные`)
//                           }
//                          else { console.log(`Числа равны ${a} =  ${b} - и нечетные`) }                        
//                          }
//               else{ for (i= b; i<=a; i++){
//                 if (i%2===0) {
//                    sumChet +=i
//                 }      
//                 else {
//                    sumNechet +=i
//                 }        
//         }  console.log(sumChet)
//                console.log(sumNechet)
//               }         
//                 }
//  let a = +prompt("Введите число 1")
//  let b = +prompt("Введите число 2")            
//  Num (a, b)


//Напишите функцию, которая принимает в качестве аргументов массив строк, а возвращает первый самый длинный элемент массива. 
//Если входной массив пуст, функция возвращает null. Если есть несколько одинаковых по длине элементов - функция возвращает 
//первый из этих элементов. 
//Пример: [ 'one', 'two', 'three' ] => 'three'



function Dlinn(arr) {
    let longest = null; // Предполагаем, что массив пустой
   
    if (arr.length > 0) {
        longest = arr[0]; 

        
        for (let i = 1; i < arr.length; i++) {
            
            if (arr[i].length > longest.length) {
                longest = arr[i]; 
            }
        }
    }
  
    console.log(longest);
}
const arr = ['one', 'two', 'three'];
Dlinn(arr); 


  