
/**
 * Return the number of "z" character in a string
 * @param {*} string 
 * @returns String
 */
function search_z(string) {
    arrayString = string.toLowerCase().split('z');
    occurrenceZ = arrayString.length - 1;
    if (occurrenceZ <= 0) {
        return "aucun z à l'horizon";
    }
    return "il y a " + occurrenceZ + " z";
  }
