js-closures-part1-variantX

Практична робота 9.1: Паттерни замикань

Дисципліна: Основи програмування мовою JavaScript
Тема: Паттерни замикань — module pattern, приватні змінні, інкапсуляція

Мета роботи:
Опанувати основні паттерни використання замикань, створення приватних змінних та module pattern.

Counter Factory

Реалізовані лічильники через замикання. Всі змінні стану приватні та недоступні зовні.

1.1. createCounter

Базовий лічильник з increment/decrement:

Приклад використання:
const counter = createCounter(5)
counter.increment() // 6
counter.decrement() // 5
counter.get() // 5

Методи: increment, decrement, get, reset
Приватна змінна count недоступна зовні.

1.2. createLimitedCounter

Лічильник з обмеженням мінімум/максимум:

Приклад використання:
const limited = createLimitedCounter(0, 3)
limited.increment() // 1
limited.increment() // 2
limited.increment() // 3
limited.increment() // 3 (не більше max)
limited.decrement() // 2
limited.decrement() // 1
limited.decrement() // 0
limited.decrement() // 0 (не менше min)

Приватний стан count недоступний зовні.
Валідація меж для increment/decrement реалізована.

1.3. createStepCounter

Лічильник зі змінним кроком:

Приклад використання:
const stepCounter = createStepCounter(2, 0)
stepCounter.increment() // 2
stepCounter.increment() // 4
stepCounter.decrement() // 2

Крок зміни count задається через аргумент step.

1.4. createNamedCounter

Лічильник з ім’ям та історією змін:

Приклад використання:
const named = createNamedCounter("Counter A")
named.increment() // 1
named.increment() // 2
named.decrement() // 1
named.getHistory() // [0, 1, 2, 1]
named.getName() // "Counter A"

Зберігає історію всіх змін count
Методи: increment, decrement, get, reset, getHistory, getName
Приватний стан count і історія недоступні зовні
Особливості реалізації
Всі лічильники використовують lexical scope + closures для приватності
Module pattern забезпечує ізоляцію стану
Приватні змінні недоступні зовні, немає витоків пам’яті
History tracking реалізовано через масив всередині замикання
Вивід у консолі (приклад)

5
6
5
5
1
2
3
3
2
1
0
0
2
4
2
1
2
1
[0, 1, 2, 1]
Counter A

Demo video
https://drive.google.com/file/d/17x3773_yXIhHge-c9DipX7PiKhKM8Aob/view?usp=sharing
