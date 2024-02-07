// Dynamic Object Keys
const favoriteFood = 'sushi'

// const goodFoods = {
//   favoriteFood: true
// }

// 如加上[]，則會尋找 favoriteFood 裡的值
const goodFoods = {
  [favoriteFood]: true
}

console.log(goodFoods)
