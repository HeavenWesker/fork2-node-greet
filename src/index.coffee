greet = (name, drunk) ->
  result = "Hello "
  if name
    result += name
  else
    result += "World"
  if drunk
    result += ", you are so sexy"

  return result
module.exports = greet
