moment = require 'moment'

# Normalize a string by removing space
# and setting to lowercase
module.exports.normalizeString = (str) ->
  str.replace(' ', '-').toLowerCase()

# Format a number of seconds to mm:ss
module.exports.formatTime = (seconds) ->
  moment().startOf('day').seconds(seconds).format('mm:ss')

# Remove value in the array
module.exports.deleteValueFromArray = (value, array) ->
  for i in [array.length - 1..0]
    if array[i] is value
      array.splice(i, 1)
  return array
