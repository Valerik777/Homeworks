// Створюємо об'єкт
const myObject = {
    name: "Teacher",
    type: "Math",
    launchYear: 2024,
  
    getInfo() {
      let info = "";
      for (let key in this) {
       
        if (this.hasOwnProperty(key) && typeof this[key] !== "function") {
          info += `${key}: ${this[key]}\n`;
        }
      }
      console.log(info.trim());
    }
  };
  

  myObject.getInfo(); 
  

  myObject.mission = "Explore deep space";
  
  
  myObject.getInfo(); 
  