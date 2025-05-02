'use strict';

// Напиши функцію isEnoughCapacity(products, containerSize), яка обчислює, чи помістяться всі товари в контейнер при пакуванні.

// Функція оголошує два параметри:

// products — об’єкт, у якому ключі містять назви товарів, а їхні значення — кількість цих товарів. Наприклад, { apples: 2, grapes: 4 }.
// containerSize — число, максимальна кількість одиниць товарів, яку в себе може вмістити контейнер.
// Функція має повернути результат перевірки, чи помістяться всі товари в контейнер. Тобто порахувати загальну кількість товарів в об’єкті products і повернути true, якщо вона менше або дорівнює containerSize, і false, якщо ні.

function isEnoughCapacity(products, containerSize) {
  // console.log('p', products);
  // console.log('cont', containerSize);
  //console.log('arr', Object.values(products)); //           це масив
  let totalFruits = 0;
  const quantityFruits = Object.values(products); //  створити з об'єкта масив значень властивостей

  //перебрати масив та скласти значення
  for (const values of quantityFruits) {
    totalFruits += values;
  }
  //console.log('t', totalFruits);
  // if (totalFruits <= containerSize) {
  //   //console.log('t', totalFruits);
  //   return true;
  // } else {
  //   return false;
  // }
  // або так
  return totalFruits <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
