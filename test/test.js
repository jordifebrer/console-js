(function() {
  var simpleList, simpleObject, simpleTable, simpleVar;

  simpleVar = 'variable 1';

  console.log(simpleVar, 'var1');

  simpleList = ['alpha', 'beta', 'gamma', 'delta'];

  console.info(simpleList, 'var2', false);

  simpleObject = {
    partA: 'A',
    partB: 'B',
    partC: 'C',
    partD: 'D'
  };

  console.log(simpleObject, 'var3');

  simpleTable = [
    {
      category: 'alpha',
      level: '1'
    }, {
      category: 'beta',
      level: '2'
    }, {
      category: 'gamma',
      level: '3'
    }, {
      category: 'delta',
      level: '4'
    }
  ];

  console.table(simpleTable, 'myTable');

  console.all();

}).call(this);
