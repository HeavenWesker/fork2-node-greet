module.exports = function greet(name, drunk){
  var result = "Hello ";
  if(name){
    result += name;
  }else{
    result += "World";
  }
  if(drunk){
    result += ", you are so sexy";
  }
  return result
}
