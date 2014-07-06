console._log = console.log
console._info = console.info
console._warn = console.warn
console._error = console.error
console._logs = []

console.log = (obj, title=false, breakPoint=false) ->
  console._out obj, title, breakPoint, '_log'

console.info = (obj, title=false, breakPoint=false) ->
  console._out obj, title, breakPoint, '_info'

console.warn = (obj, title=false, breakPoint=false) ->
  console._out obj, title, breakPoint, '_warn'

console.error = (obj, title=false, breakPoint=false) ->
  console._out obj, title, breakPoint, '_error'

console.all = () ->
  console.group 'All logs:'
  for log in console._logs
    console[log.type] log.obj, log.header
  console.groupEnd()

console._out = (obj, title, breakPoint, type) ->
  header = if title then title else obj
  console._logs.push {
    obj: obj,
    header: header,
    breakPoint: breakPoint,
    type: type
  }
  console.group header
  console[type] obj
  console.groupEnd()
  if breakPoint
    debugger
