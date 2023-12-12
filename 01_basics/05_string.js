const name = "govind"
const repoCount = 50

// console.log(name + repoCount + " Value");

// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('govind');

// console.log(gameName.length); // to check total length of character
// console.log(gameName.toUpperCase()); // to Uppercase all character
// console.log(gameName.charAt(2)); // The charAt in JavaScript is used to find the character at the specified index value of the String. 
// console.log(gameName.indexOf('d')); // to check character position from index value starting with 0.
// console.log(gameName.indexOf('d')); // to check character position from index value starting with 0.

const gameName2 = new String('govind-Raj');
const substr = gameName2.substring(0,4); //The substring() method extracts characters, between two indices (positions), from a string, and returns the substring. The substring() method extracts characters from start to end (exclusive). The substring() method does not change the original string.
console.log(substr); // to get character between two index value "govind" substring(0,4) get govi means 0 is index and 4 is character.

const anotherString = gameName2.slice(0, 4); //slice() extracts a part of a string and returns the extracted part in a new string. The method takes 2 parameters: start position, and end position (end not included). "and it gives negative value also (-5, 4)"
console.log(anotherString);

const newString1 = "    govind   ";
console.log(newString1);
console.log(newString1.trim()); // remove blank spaces from start and end
console.log(newString1.trimStart()); // remove blank spaces from start
console.log(newString1.trimEnd()); // remove blank spaces from end

const url = "https://govind.com/govind%20raj";
console.log(url.replace('%20', '_'));  // The syntax for the replace() method is string_name. replace(old_string, new_string) with old_string being the substring you'd like to replace and new_string being the substring that will take its place.
console.log(url.includes('rj')); // to check string name if has then return true if not then return false.

const stringToarray = new String('govind-raj-put');
console.log(stringToarray.split('-')); // The split() method of String values takes a pattern and divides this string into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

