// Create a simple logger function that logs a message in the console (message is a parameter).
// Example of execution: log("Hello World!");
// Example of output: Hello World!  

// Create another logger function that uses the previous one, and logs table-view row in console (column values are parameters).
// Example of execution: log("Hello", "World", "!");
// Example of output: Hello | World | !
// Create another logger function that uses the previous one, and logs table-view row in the console (the first column is the current date and time by default, another column values are parameters).
// Example of execution: log("Hello", "World", "!");
// Example of output: 12/16/2016, 2:35:02 PM | Hello | World | !
// Make 3 previous methods as method "log" of objects BaseLogger, TableLogger, and TableTimeLogger. Implement inheritance of objects using all known JS Inheritance patterns.

const log = function (message) {
  console.log(message);
}

log('Hello world!');

const tableLog = function (...args) {
  let message = args.join(' | ');
  log(message);
}

tableLog("Hello", "World", "!", 'check');

const tableTimeLog = function (...args) {
  let date = new Date().toLocaleString("en-US");
  tableLog(date, ...args);
}

tableTimeLog("Hello", "World", "!", 'check');

//prototype, call, apply, object create

const BaseLogger = function (message) {
  this.message = message;
}

BaseLogger.prototype.log = function () {
  console.log(this.message);
}

const baseLogger = new BaseLogger('hello world!');
baseLogger.log();

const TableLogger = function (...args) {
  let message = args.join(' | ');
  BaseLogger.call(this, message);
}

TableLogger.prototype = Object.create(BaseLogger.prototype);
TableLogger.prototype.constructor = TableLogger;

const tableLogger = new TableLogger('hello', 'world');
tableLogger.log();

const TableTimeLogger = function (...args) {
  let date = new Date().toLocaleString("en-US");
  TableLogger.apply(this, [date, ...args]);
}

TableTimeLogger.prototype = Object.create(TableLogger.prototype);
TableTimeLogger.prototype.constructor = TableTimeLogger;

const tableTimeLogger = new TableTimeLogger('hello', 'world', 'check');

tableTimeLogger.log();

// es6 classes

class BaseLogger {
  constructor(message) {
    this.message = message;
  }

  log() {
    console.log(this.message);
  }
}

const baseLogger = new BaseLogger('Hello world!');
baseLogger.log();

class TableLogger extends BaseLogger {
  constructor(...message) {
    super(message);

    this.message = message.join(' | ');
  }
}

const tableLogger = new TableLogger('hello', 'world', '!');
tableLogger.log()

class TableTimeLogger extends TableLogger {
  constructor(...message) {
    super(message);
    this.date = new Date().toLocaleString("en-US");
    this.message = `${this.date} | ${message.join(' | ')}`;
  }
}

const tableTimeLogger = new TableTimeLogger('hello', 'world', '!');
tableTimeLogger.log();