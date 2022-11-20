console.log('Hello')

// Создание массива с помощью функции

const getSumOfSequence = function getSumOfSequence(name) {
  const arr = []
  for (let i = 1; i <= name; i++) {
    arr.push(i)
    arr
  }
  return arr[0] + arr[arr.length - 1]
}

console.log(getSumOfSequence(5))
