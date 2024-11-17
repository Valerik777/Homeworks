function checkTheory(count) {
  let parCount = 0;  // Парні числа
  let neparCount = 0;   // непарні числа

  // Генерація випадкових чисел (парних та непарних)
  for (let i = 0; i < count; i++) {
    let randomNum = Math.floor(Math.random() * (1000 - 100 + 1)) + 100; // Генерація числа від 100 до 1000

    if (randomNum % 2 === 0) {
      parCount++;  // Якщо число парне
    } else {
      neparCount++;   // Якщо число непарне
    }
  }

  // Обчислюємо відсотки
  let parCountPercentage = (parCount / count) * 100;
  let neparPercentage = (neparCount / count) * 100;

  // Виводимо результат
  console.log(`Кількість згенерованих чисел: ${count}`);
  console.log(`Парних чисел: ${parCount}`);
  console.log(`Непарних чисел: ${neparCount}`);
  console.log(`Відсоток парних до непарних:`);
  console.log(`Парні: ${parCountPercentage.toFixed(2)}%`);
  console.log(`Непарні: ${neparPercentage.toFixed(2)}%`);
}


checkTheory(1000);