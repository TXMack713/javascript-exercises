const fibonacci = function(index) {
    let sequence = [1];
    let next = 0;
    if (index < 0) {
        return 'OOPS';
    }
    for (let i = 0; i <= index; i++) {
        if (i == 0) {
            sequence.push(1);
        } else {
            next = sequence[i] + sequence[i-1];
            sequence.push(next);
        }
    }
    return sequence[index-1];
};

// Do not edit below this line
module.exports = fibonacci;
