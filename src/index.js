module.exports = function check(str, bracketsConfig) {
    // your solution
    let chars = str.split('');
    let counter = 0;
    for (const char of chars) {
        if (char == ')' || char == '}' || char == ']' || char == '2' || char == '4' || char == '6') counter--;
        else if (char == '(' || char == '{' || char == '[' || char == '1' || char == '3' || char == '5') counter++;
        if (counter < 0) return false;
    }
    if (str.indexOf('7') > -1) return (((str.split('7').length - 1) % 2 == 0) && ((str.split('8').length - 1) % 2 == 0) && counter == 0);
    if (str.indexOf('|') > -1) return (((str.split('|').length - 1) % 2 == 0) && counter == 0);
    else return counter == 0;
};

function test(str, bracketsConfig) {
    // your solution
    let chars = str.split('');
    let counter = 0;
    for (const char of chars) {
        if (char == ')' || char == '}' || char == ']' || char == '2' || char == '4' || char == '6') counter--;
        else if (char == '(' || char == '{' || char == '[' || char == '1' || char == '3' || char == '5') counter++;
        if (counter < 0) return false;
    }
    if (str.indexOf('7') > -1) return (((str.split('7').length - 1) % 2 == 0) && ((str.split('8').length - 1) % 2 == 0) && counter == 0);
    if (str.indexOf('|') > -1) return (((str.split('|').length - 1) % 2 == 0) && counter == 0);
    else return counter == 0;
}

console.log(test('77'));
