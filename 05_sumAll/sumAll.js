function sumAll(num1, num2) {
    let check1 = typeof(num1);
    let check2 = typeof(num2);
    
    // if ((check1 !== "number") || (check2 !== "number") || (check1 !== 'bigint') || (check2 !== 'bigint')) {
    //     return 'ERROR';
    // }

    if ((num1 < 0) || (num2 < 0)) {
        return 'ERROR';
    }

    if (((check1 == 'number') || (check1 == 'bigint')) && ((check2 == 'number') || (check2 == 'bigint'))) {
        if (num1 >= num2) {
            let total = 0;
    
            for (let i = num2; i <= num1; i++) {
                total += i;
            }
            return total;
        } else if (num2 >= num1) {
            let total = 0;
    
            for (let j = num1; j <= num2; j++) {
                total += j;
            }
            return total;
        }
    } else {
        return 'ERROR';
    }
}

// Do not edit below this line
module.exports = sumAll;
