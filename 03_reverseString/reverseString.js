// const reverseString = function() {

// };
function reverseString(input) {
    let inputArray = input.split('');
    let answer = inputArray.reverse().join('');
    return answer;
}
// Do not edit below this line
module.exports = reverseString;
