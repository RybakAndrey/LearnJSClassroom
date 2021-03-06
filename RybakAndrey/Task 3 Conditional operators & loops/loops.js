/*Выведите чётные числа
При помощи цикла for выведите чётные числа от 2 до 10.-->
*/
function displayEvenNumbers () {
    for(var i=2;i<=10;i++){
        if(i%2!=0) continue;
        alert(i);
    }
}

/*Повторять цикл, пока ввод неверен
Напишите цикл, который предлагает prompt ввести число, большее 100. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.
    Цикл должен спрашивать число пока либо посетитель не введёт число, большее 100, либо не нажмёт кнопку Cancel (ESC).
    Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.
*/
function checkNumber () {
    var input;
    do{
        input = prompt("Input value > 100", "");
    }while(input <=100 && input!=null)
}

/*Вывести простые числа
Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
    Создайте код, который выводит все простые числа из интервала от 2 до 10. Результат должен быть: 2,3,5,7.
P.S. Код также должен легко модифицироваться для любых других интервалов.
*/
function displayPrimeNumbers () {
    var a=2, b=10;
    for(;a<=b;a++){
        var flag=true;
        for(var i=2;i<a;i++){
            if(a%i==0){
                flag=false;
                break;
            }
        }
        if(flag){
            alert(a);
        }
    }
}