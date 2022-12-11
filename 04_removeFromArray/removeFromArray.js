// const removeFromArray = function() {

// };
function removeFromArray(arr, ...item) {
    let newArr = [];
    let eliminateArr = [];
    if (item.length == 1) {
        for(let j = 0; j < arr.length; j++) {
            if (arr[j] === item[0]) {
                continue;
            } else {
                newArr.push(arr[j]);
            }
        }
    } else {
        // eliminateArr = item.split('');
        for(let i = 0; i < arr.length; i++) {
            if(item.includes(arr[i])) {
                continue;
            } else {
                newArr.push(arr[i]);
            }
        }
    }
    
    return newArr;
}

// Do not edit below this line
module.exports = removeFromArray;
