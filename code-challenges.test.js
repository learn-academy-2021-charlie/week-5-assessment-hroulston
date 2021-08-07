// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in a string and returns a coded message. The coded message converts 'a' to 4, 'e' to 3, 'i' to 1, and 'o' to 0.

// a) Create a test with an expect statement using the variables provided.

describe("variableSwitch", () => {
  test("the string is returned with the 'a' converted to '4', the 'e', to '3', the 'i' to '1' and the 'o' to '0'", () => {
    var secretCodeWord1 = "Lackadaisical"
    var secretCodeWord2 = "Gobbledygook"
    var secretCodeWord3 = "Eccentric"
    expect(variableSwitch(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
    expect(variableSwitch(secretCodeWord2)).toEqual("G0bbl3dyg00k")
    expect(variableSwitch(secretCodeWord3)).toEqual("3cc3ntr1c")

  })
})

var secretCodeWord1 = "Lackadaisical"
// Expected output: "L4ck4d41s1c4l"
var secretCodeWord2 = "Gobbledygook"
// Expected output: "G0bbl3dyg00k"
var secretCodeWord3 = "Eccentric"
// Expected output: "3cc3ntr1c"



// b) Create the function that makes the test pass.

// Create a function called variableSwitch
// Takes a parameter of a string
// I will use map to iterate through the string with an argument of value and index
// If the current value at the index is equal to 'a' then then it will be changed to '4'
// If the current value at the index is equal to 'e' then then it will be changed to '3'
// If the current value at the index is equal to 'i' then then it will be changed to '1'
// If the current value at the index is equal to 'o' then then it will be changed to '0'
// return a string of the same length with the afore mentioned changes.

// const variableSwitch = (string) => {
//   string.map(value => {
//   if(value = 'a'){
//       value = '4'
//     }else if (value = 'e') {
//       value = '3'
//     }else if (vlaue = 'i') {
//       value = '1'
//     }else if (value = 'o') {
//       value = '0'
//     }
//   })
// }return string

// So the code above didn't work and off to google I went. I found.replace which replaces a variable with (in this instance the string) that I give as the alternative. It worked but it didn't take away my uppercase vowels.

// const variableSwitch = (string) =>{
//   var stringA = string.replace(/a/g, "4")
//   var stringE = stringA.replace(/e/g, "3")
//   var stringI = stringE.replace(/i/g, "1")
//   var stringO = stringI.replace(/o/g, "0")
//   return stringO
// }

// So initially I just added my uppercase vowels and that didn't work either. But then I remembered replacing vowels with blank spaces so I looked that up again and realized that the 2 vowels needed to be in square brackets. I added the square brackets below and voila! Green.
const variableSwitch = (string) =>{
  var stringA = string.replace(/[aA]/g, "4")
  var stringE = stringA.replace(/[eE]/g, "3")
  var stringI = stringE.replace(/[iI]/g, "1")
  var stringO = stringI.replace(/[oO]/g, "0")
  return stringO
}


// --------------------2) Create a function that takes in an array and returns all the words that contain the letter a.

// a) Create a test with an expect statement using the variable provided.

describe("includeVowel", () => {
  test("return an array with words containing the letter a", () => {
    var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
    var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
    expect(includeVowel(arrayOfWords1)).toEqual(["Apple", "Banana", "Orange"])
    expect(includeVowel(arrayOfWords2)).toEqual(["Mango", "Apricot", "Peach"])
  })
})

var arrayOfWords1 = ["Apple", "Banana", "Plum", "Orange", "Kiwi"]
// Expected output: ["Apple", "Banana", "Orange"]
var arrayOfWords2 = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach"]
// Expected output: ["Mango", "Apricot", "Peach"]



// b) Create the function that makes the test pass.

// First I need to create a function called includeVowel
// It takes the argument of an array
// I am going to iterate over the array and for each value at the index I want to check if it includes the letter a
// If it does that value will get pushed into an empty array called finalArray
// finalArray will get returned


const includeVowel = (array) => {
   lowerArray = array.map(value =>{
    return value.toLowerCase()
  })
  var arrayA = []
lowerArray.map(value =>{
  if(value.includes("a")){
    arrayA.push(value)
}})
  return arrayA.map(value => value.charAt(0).toUpperCase() + value.slice(1))
    }
// So I initially did lines 119-122 basically as my first attempt but I used filter and it worked except for the capital A. I tried to think of/ook up a regex way to account for lowercase and capital letters but it didn't work. So I decided to lower case the whole array, push the a words to an empty array and then put it back to uppercase. I feel like there is an easier way to do this, but this is the path that worked.

// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a “full house”. A full house is exactly one pair and one three of a kind.

// a) Create a test with an expect statement using the variable provided.

describe("fullHouse", () => {
  test("the array will return an output of true if there are 3 of one kind of number and 2 of another kind of number, otherwise the output will be false", () => {
    var hand1 = [5, 5, 5, 3, 3]
    var hand2 = [5, 5, 3, 3, 4]
    var hand3 = [5, 5, 5, 5, 4]
    expect(fullHouse(hand1)).toEqual(true)
    expect(fullHouse(hand2)).toEqual(false)
    expect(fullHouse(hand3)).toEqual(false)
  })
})

var hand1 = [5, 5, 5, 3, 3]
// Expected output: true
var hand2 = [5, 5, 3, 3, 4]
// Expected output: false
var hand3 = [5, 5, 5, 5, 4]
// Expected output: false



// b) Create the function that makes the test pass.

// Create a function fullHouse
// Takes a parameter of an array
// maps throught the array and checks to see if there are 3 of a kind and 2 of a kind
// If the condition is met then return true, if not return false


// const fullHouse = (array) => {
//   array.map(value => {
//   })
// }

// I got stuck here and realized my fucntion would need more umph so off to google I went. I found a way using an object and key value pairs and a trusty for loop. So I am going to try that out
// I am going to see if I can look up how to check the object and if there are more than 3 key value pairs then it will be an automatic false
// If the object has 2 key value pairs and one value = 3 && one value = 2 then return true, otherwise return false.
// I think exploring this route will be more fruitful

const fullHouse = (array) => {
  var counts = {}
for(let i=0; i<array.length; i++){
  if(counts[array[i]]){
    counts[array[i]] +=1
  }else{
    counts[array[i]] = 1
  }
}
  console.log(counts)
  }
// Cool, so this counted how many of each number I have. Now on to the next part of the logic.
