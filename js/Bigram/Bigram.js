/**
 * return print a sentence in rolling sequences of three words
 * @param {*} string 
 * @returns string
 */
function bigram(string) {
    const stringArray = string.split(' ');
    let responseArray = [];
    let index = 0;

    if (stringArray.length <= 3) {
        return string;
    }

    for (let i = 0; i <= stringArray.length -3; i++) {
        for (let j = i; j <= i+2; j++){
            responseArray[index] = stringArray[j];
            index++;
        }
    } 
    return responseArray.join(' ');
}