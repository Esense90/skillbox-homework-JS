function someValues(allValues = ["qwe@qwe.ru", "asd@asd.ru", "zxc@zxc.ru", "qaz@qaz.ru", "wsx@wsx.ru", "ewq@ewq.ru"], blackListValues = ["qwe@qwe.ru", "zxc@zxc.ru", "ewq@ewq.ru"]) {
    return allValues.filter(email => !blackListValues.includes(email))
};

export default someValues
