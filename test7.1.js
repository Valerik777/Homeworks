const text = "Wonderful Joyful Happiness Time Task Apple";
const words = text.split(" "); 

const result = words.filter(word => {
    // Перевіряємо довжину слова і чи воно не містить "A" або "a"
    return word.length >= 6 && !word.toLowerCase().includes('a');
});

console.log(result); // ["Wonderful", "Joyful"]