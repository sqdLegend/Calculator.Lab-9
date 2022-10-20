// Видаляє всі значеня в строці
function clearScreen() {
    document.getElementById("result").value = "";
}
 
// Показує числа на які ви натиснули
function display(value) {
    document.getElementById("result").value += value;
}
 
// Обчислення та вивід результата
function calculate() {
    var p = document.getElementById("result").value;
    var q = eval(p);
    document.getElementById("result").value = q;
}