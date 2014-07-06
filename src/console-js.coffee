console._log = console.log
console._info = console.info
console._warn = console.warn
console._error = console.error

console.log = (obj, title=false, breakPoint=false) ->
  console._out obj, title, breakPoint, '_log'

console.info = (obj, title=false, breakPoint=false) ->
  console._out obj, title, breakPoint, '_info'

console.warn = (obj, title=false, breakPoint=false) ->
  console._out obj, title, breakPoint, '_warn'

console.error = (obj, title=false, breakPoint=false) ->
  console._out obj, title, breakPoint, '_error'

console._out = (obj, title, breakPoint, type) ->
    console.group if title then title else obj
    console[type] obj
    console.groupEnd()
    if breakPoint
      debugger