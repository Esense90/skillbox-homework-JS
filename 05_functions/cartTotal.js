function calculate(summBasket, countProductBasket, promo) {
    let totalAmount = summBasket;

    if (promo = 'ДАРИМ300' && summBasket < 300) {
        totalAmount = 0;

    } else if (promo = 'ДАРИМ300') {
        totalAmount -= 300;

    }

    if (countProductBasket >= 10) {
        let countFiveProcent = summBasket / 100 * 5;
        totalAmount -= countFiveProcent;
    }

    if (summBasket > 50000) {
        let countTwentyProcent = totalAmount / 100 * 5;
        let countDifference = totalAmount - countFiveProcent;
        totalAmount = countDifference - countTwentyProcent;
    }

    if (promo = 'СКИДА15' && summBasket >= 20000) {
        let countFifteenProcent = totalAmount / 100 * 15;
        totalAmount -= countFifteenProcent;
    }
}

calculate(50000, 14, 'ДАРИМ300');

export default calculate;
