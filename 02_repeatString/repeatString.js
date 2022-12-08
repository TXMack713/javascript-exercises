// const repeatString = function() {

// };

function repeatString(input,num) {
    let answer = '';
    if (num < 0) {
        return 'ERROR';
    } else if (num >= 0) {
        for(let i=0; i < num; i++) {
            answer += input;
        }
    }

    return answer;
}

// Do not edit below this line
module.exports = repeatString;
