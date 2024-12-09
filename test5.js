var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",
    
    // Метод для обчислення загальної вартості
    price() {
      return `${this._getPrices().reduce((sum, price) => sum + price, 0)} грн`;
    },
    
    // Метод для пошуку мінімальної ціни
    minPrice() {
      return `${Math.min(...this._getPrices())} грн`;
    },
    
    
    maxPrice() {
      return `${Math.max(...this._getPrices())} грн`;
    },
    
    
    _getPrices() {
      return Object.values(this)
        .filter(value => typeof value === "string" && value.includes("грн"))
        .map(value => parseInt(value));
    }
  };
  
  // Додавання нової послуги
  services['Розбити скло'] = "200 грн";
  
  // Використання методів
  console.log(services.price());    // Загальна вартість
  console.log(services.minPrice()); // Мінімальна ціна
  console.log(services.maxPrice()); // Максимальна ціна