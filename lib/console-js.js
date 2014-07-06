console._log = console.log;

console._info = console.info;

console._warn = console.warn;

console._error = console.error;

console._logs = [];

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

console.all = function() {
  var log, _i, _len, _ref;
  console.group('All logs:');
  _ref = console._logs;
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    log = _ref[_i];
    console[log.type](log.obj, log.header);
  }
  return console.groupEnd();
};

console._out = function(obj, title, breakPoint, type) {
  var header;
  header = title ? title : obj;
  console._logs.push({
    obj: obj,
    header: header,
    breakPoint: breakPoint,
    type: type
  });
  console.group(header);
  console[type](obj);
  console.groupEnd();
  if (breakPoint) {
    debugger;
  }
};
