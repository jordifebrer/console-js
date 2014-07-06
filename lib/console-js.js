var console, oldConsole;

oldConsole = console;

console = {};

console.log = function(obj, title, breakPoint) {
  if (title == null) {
    title = false;
  }
  if (breakPoint == null) {
    breakPoint = false;
  }
  return console._out(obj, title, breakPoint, 'log');
};

console.info = function(obj, title, breakPoint) {
  if (title == null) {
    title = false;
  }
  if (breakPoint == null) {
    breakPoint = false;
  }
  return console._out(obj, title, breakPoint, 'info');
};

console.warn = function(obj, title, breakPoint) {
  if (title == null) {
    title = false;
  }
  if (breakPoint == null) {
    breakPoint = false;
  }
  return console._out(obj, title, breakPoint, 'warn');
};

console.error = function(obj, title, breakPoint) {
  if (title == null) {
    title = false;
  }
  if (breakPoint == null) {
    breakPoint = false;
  }
  return console._out(obj, title, breakPoint, 'error');
};

console._out = function(obj, title, breakPoint, type) {
  oldConsole.group(title ? title : obj);
  oldConsole[type](obj);
  oldConsole.groupEnd();
  if (breakPoint) {
    debugger;
  }
};
