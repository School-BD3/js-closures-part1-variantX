// Практична робота 9.1: Counter Factory

// 1. Базовий лічильник
function createCounter(initial = 0) {
  let count = initial; // приватний стан
  return {
    increment: () => count++,
    decrement: () => count--,
    get: () => count,
    reset: () => { count = initial; }
  };
}

// 2. Лічильник з обмеженням
function createLimitedCounter(min = 0, max = 10, initial = min) {
  let count = initial;
  return {
    increment: () => {
      if (count < max) count++;
      return count;
    },
    decrement: () => {
      if (count > min) count--;
      return count;
    },
    get: () => count,
    reset: () => { count = initial; }
  };
}

// 3. Лічильник зі змінним кроком
function createStepCounter(step = 1, initial = 0) {
  let count = initial;
  return {
    increment: () => { count += step; return count; },
    decrement: () => { count -= step; return count; },
    get: () => count,
    reset: () => { count = initial; }
  };
}

// 4. Лічильник з ім'ям та історією змін
function createNamedCounter(name = "Counter", initial = 0) {
  let count = initial;
  let history = [count]; // масив історії змін
  return {
    increment: () => { count++; history.push(count); return count; },
    decrement: () => { count--; history.push(count); return count; },
    get: () => count,
    reset: () => { count = initial; history.push(count); },
    getHistory: () => [...history], // повертає копію масиву
    getName: () => name
  };
}

// Демонстрація роботи
console.log("=== Counter Examples ===");

// Базовий лічильник
const counter = createCounter(5);
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.get());
console.log(counter.get());

// Limited counter
const limited = createLimitedCounter(0, 3);
console.log(limited.increment());
console.log(limited.increment());
console.log(limited.increment());
console.log(limited.increment());
console.log(limited.decrement());
console.log(limited.decrement());
console.log(limited.decrement());
console.log(limited.decrement());

// Step counter
const stepCounter = createStepCounter(2, 0);
console.log(stepCounter.increment());
console.log(stepCounter.increment());
console.log(stepCounter.decrement());

// Named counter
const named = createNamedCounter("Counter A");
console.log(named.increment());
console.log(named.increment());
console.log(named.decrement());
console.log(named.getHistory()); 
console.log(named.getName());