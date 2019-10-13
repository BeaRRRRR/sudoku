module.exports = function check(str, bracketsConfig) {
    // your solution
    let chars = str.split('');
    let stack = [];
    for (const char of chars) {
        let bracketSet = bracketsConfig.find(brackets => brackets[1] == char);
        if(bracketSet) {
            if(stack[stack.length-1] == bracketSet[0]) {
                stack.pop();
            }
            else {
                stack.push(char);
            }
        }
        else stack.push(char);
    }
    return stack.length == 0;
};

