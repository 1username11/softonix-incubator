// Реалізуйте функцію дизайн паттерну memoize яка кешує виконання виклику з одинаковими аргументами
// та при повторному виклику лише повертає вже закешований результат.

function sum (a, b) { return a + b } // for test

// eslint-disable-next-line
function memoize (fn) {
  const cache = new Map()
  return (a, b) => {
    if ([a, b] in cache) {
      console.log('Taking from cache')
      console.log('result', cache[[a, b]])
      return cache[[a, b]]
    } else {
      console.log('Calculating result')
      const result = fn(a, b)
      cache[[a, b]] = result
      console.log('result', result)
      return result
    }
  }
}

// приклад виконання вашого коду
const sumMemoized = memoize(sum)

sumMemoized(1, 3) // результат 4
sumMemoized(3, 3) // результат 6
sumMemoized(1, 3) // результат 4, відбулось повторне виконання, результат повернуто з кешу без виклику додавання
