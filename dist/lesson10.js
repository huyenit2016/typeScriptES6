var getBonus = function (value, tax, salary) {
    if (value === void 0) { value = 11; }
    if (tax === void 0) { tax = value * 0.1; }
    if (salary === void 0) { salary = 1; }
    console.log(value + tax);
    console.log(arguments.length);
};
getBonus();
getBonus(60);
getBonus(20, 40);
getBonus(40, 40, 10);
//# sourceMappingURL=lesson10.js.map