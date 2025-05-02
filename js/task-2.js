'use strict';

// Напиши функцію calcAverageCalories(days), яка повертає середньодобове значення кількості калорій, які спортсмен споживав протягом тижня. Функція очікує один параметр: days — масив об’єктів. Кожен об’єкт описує день тижня та кількість калорій calories, спожитих спортсменом, у цей день. Візьми код нижче і встав після оголошення своєї функції для перевірки коректності її роботи. У консоль будуть виведені результати її викликів.
// значення властивості "калорій" скласти та розділити на їх кількість, або кількість днів
// зробити з масива  - об'єкти - ???

//У 2 завданні не забудьте про перевірку довжини масива - якщо масив пустий, то і рахувати нічого не треба, повертайте одразу з функції 0. І перевірте, щоб у вас не поверталось NaN в такому випадку.

function calcAverageCalories(days) {
  let totalCalories = 0;
  //console.log(days.length);
  for (const day of days) {
    totalCalories += day.calories;
  }
  if (days.length === 0) {
    return 0;
  }
  //console.log('c', totalCalories / 7);
  //console.log('b', totalCalories);
  //console.log('c', totalCalories / days.length); /// працює!!!!
  return totalCalories / days.length;
}

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 3010 },
    { day: 'tuesday', calories: 3200 },
    { day: 'wednesday', calories: 3120 },
    { day: 'thursday', calories: 2900 },
    { day: 'friday', calories: 3450 },
    { day: 'saturday', calories: 3280 },
    { day: 'sunday', calories: 3300 },
  ])
); // 3180

console.log(
  calcAverageCalories([
    { day: 'monday', calories: 2040 },
    { day: 'tuesday', calories: 2270 },
    { day: 'wednesday', calories: 2420 },
    { day: 'thursday', calories: 1900 },
    { day: 'friday', calories: 2370 },
    { day: 'saturday', calories: 2280 },
    { day: 'sunday', calories: 2610 },
  ])
); // 2270

console.log(calcAverageCalories([])); // 0
