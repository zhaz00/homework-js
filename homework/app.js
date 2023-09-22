const salary = prompt("Какую зарплату вы хотели получать?");
let message = "Ваша зарплата:" + salary;
alert(message);
let responseMessage;
if (salary < 1000) {
  responseMessage = "Вы выбрали низкую зарплату.";
} else if (salary >= 1000 && salary <= 5000) {
  responseMessage = "Вы выбрали среднюю зарплату.";
} else {
  responseMessage = "Вы выбрали высокую зарплату.";
}

console.log(responseMessage);
