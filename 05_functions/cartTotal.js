function calculate(summBasket, countProductBasket, promo = null) {
  let totalAmount = summBasket

  if (promo === 'ДАРИМ300') {
    totalAmount -= 300

    if (totalAmount < 0) {
      totalAmount = 0
    }
  }

  if (countProductBasket >= 10) {
    totalAmount -= calcPercent(totalAmount, 5)
  }

  if (totalAmount > 50000) {
    const difference = totalAmount - 50000
    totalAmount -= calcPercent(difference, 20)
  }

  if (promo === 'СКИДКА15' && totalAmount >= 20000) {
    totalAmount -= calcPercent(totalAmount, 15)
  }

  return totalAmount
}

function calcPercent(value, percent) {
  return value * (percent / 100)
}


export default calculate;
