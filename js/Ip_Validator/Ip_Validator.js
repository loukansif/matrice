/**
 * return if IP is valid
 * @param {*} string 
 * @returns string - "not valid" or "valid"
 */

function ip_validator(string) {
    const response = "not valid";
    const stringArray = string.split('.');

    if(stringArray.length !== 4) {
        return response;
    }
    for(let i = 0; i < stringArray.length; i++){
        const item = +stringArray[i];
        if (isNaN(item) || item < 0 || item > 255) {
            return response
        } 
    }
    return "valid";
}