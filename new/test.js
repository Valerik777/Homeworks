

/* 
'number' + 3 + 3 - тут відбувається конкатенація, строка додається до числа
Result: number33

null + 3 - тут відбувається просте додовання, нул це є 0 + 3 = 3 
Result: 3

5 && "qwerty" - тут && повертає true якшо обидва операнди є true, тобто в данному випадку мені повинно повернутися qwerty як другий трушний операнд
Result: qwerty

+'40' + +'2' + "hillel"; /* в данному випадку унарний + завжди приводить до числа, тобто в нас по факту буде 40 є стрінгою, але за рахунок унарного + буде числом
2 - є стрінгою але за рахунок унарного + буде числом. І в результаті маємо 40+2+hillel
Result: 42hillel

true + false - True = 1, false = 0, призвели до числового значення 1 + 0 - відповідь 1
Result: 1

'10' - 5 === 6; /*тут використовується оператор строгої рівності, у випадку якщо всі типи данних однакові, видасть true, якщо ні - false
В нашому випадку '10' - це стрінга а всі інші то є числами 
Result: false

'4px' - 3 - результатом буде Nan, по причине того що строка не тільки з числом
Result: NaN

 '4' - 5; - тут відбувається конкатенація  4 - 5 = -1
 Result: -1

'6' + 3 ** 0; тут 3 підноситься до степеню 0, отримаємо 1. Далі відбувається конкатенація з +, після якої стрінга йде до стрінги
Result: 61

12 / '6' - тут стринга призводиться до числа, тобто в результаті отримаємо 12 розділити на 6 = 2
Result: 2

'10' + (5 === 6); - наскільки я зрозумів, тут окремо відбувається строге порівняння, яке в результаті видасть нам True
Result: true

null == '' - тут відбувається порівняння двух значень на рівність, в данному випадку відповідь буде False оскільки порівнюється строка та null
Result: False

3 ** (9 / 3); -  в скобках відбувається звичайне ділення, результат 3, результат ми підносимо до степіня і отримаємо відповідь 27
Result: 27

!!'false' == !!'true' - тут відбувається інвертування, але подвійне, тобто !false = true, !true = false. Далі !true = false, !false = true.
Далі False порівнюємо з True - і отримуємо true за значенням
Result: true

0 || '0' && 1 - тут 0 порівнюється з нулем, що є true оскільки || - повертає true, якщо хоча б один з операндів є true
Далі порівнюється true з числом 1 і отримаємо останній трушний операнд
Result: 1

(+null == false) < 1; - тут +null - приводиться до числа, далі йде оператор рівності з False і віддає нам true за значенням. Далі ми перевіряємо чи 1 < 1
Отримуємо False 
Result: false

false && true || true - в лівій частині якщо обидва операнди True то нам повертається true, але в данному випадку повертаеться False
Далі якщо хочаб один операнд є True - то нам повертается true, тобто тут відповідь буде true
Result: true

false && (false || true); - в скобках якщо хочаб один операнд є true - повертаеться true. Далі якщо обидва операнди true то буде true.
В нашому випадку відповідь буде False
Result: False

(+null == false) < 1 ** 5; - в скобках +null приводиться до числа, далі йде оператор рівності з False і віддає нам true за значенням.
З правої частини відбувається піднесення до степення, 1 до 5, і буде відповідь 1. 
Далі 1<1 = відповідь буде False
Result: false

*/