var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

var trustedDomainsRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)?@(gmail\.com|yahoo\.com)$/;


var trustedEmails = arr
    .map(obj => obj.email) // Вибираємо лише email
    .filter(email => trustedDomainsRegex.test(email)); // Застосовуємо регулярний вираз

console.log(trustedEmails);