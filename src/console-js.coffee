oldConsole = console
console = {}

console.log = (obj, title=false, breakPoint=false) ->
  console._out obj, title, breakPoint, 'log'

console.info = (obj, title=false, breakPoint=false) ->
  console._out obj, title, breakPoint, 'info'

console.warn = (obj, title=false, breakPoint=false) ->
  console._out obj, title, breakPoint, 'warn'

console.error = (obj, title=false, breakPoint=false) ->
  console._out obj, title, breakPoint, 'error'

console._out = (obj, title, breakPoint, type) ->
    oldConsole.group if title then title else obj
    oldConsole[type] obj
    oldConsole.groupEnd()
    if breakPoint
      debugger
