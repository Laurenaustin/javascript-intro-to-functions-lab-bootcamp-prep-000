var uppercase = "HELLO!"
var lowercase = "hello!"
var love = "I love you, Grandma."

function shout(lowercase){
  return lowercase.toUpperCase()
}
function whisper(uppercase){
  return uppercase.toLowerCase()
}
function logShout(lowercase){
  console.log(lowercase.toUpperCase())
}
function logWhisper(uppercase){
  console.log(uppercase.toLowerCase())
}
function sayHiToGrandma(love){
    return `I love you, too.`
}