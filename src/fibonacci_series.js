'use strict';

function fibonacci_series(n) {
    var result = [0, 1];

    if (isInt(n)) {
        if (n >= 2) {
            result = addNum(result, n);
        }
    } else {
        return;
    }

    return result;
}

function addNum(result, n) {
    for (var i = 2; i <= n; i++) {
        result.push(result[i - 2] + result[i - 1]);
    }

    return result;
}

function isInt(num) {
    if (parseInt(num) === num) {
        return true;
    } else {
        return false;
    }
}

module.exports = fibonacci_series;
