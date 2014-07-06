console._log = console.log;

console._info = console.info;

console._warn = console.warn;

console._error = console.error;

console.log = function(obj, title, breakPoint) {
  if (title == null) {
    title = false;
  }
  if (breakPoint == null) {
    breakPoint = false;
  }
  return console._out(obj, title, breakPoint, '_log');
};

console.info = function(obj, title, breakPoint) {
  if (title == null) {
    title = false;
  }
  if (breakPoint == null) {
    breakPoint = false;
  }
  return console._out(obj, title, breakPoint, '_info');
};

console.warn = function(obj, title, breakPoint) {
  if (title == null) {
    title = false;
  }
  if (breakPoint == null) {
    breakPoint = false;
  }
  return console._out(obj, title, breakPoint, '_warn');
};

console.error = function(obj, title, breakPoint) {
  if (title == null) {
    title = false;
  }
  if (breakPoint == null) {
    breakPoint = false;
  }
  return console._out(obj, title, breakPoint, '_error');
};

console._out = function(obj, title, breakPoint, type) {
  console.group(title ? title : obj);
  console[type](obj);
  console.groupEnd();
  if (breakPoint) {
    debugger;
  }
};
