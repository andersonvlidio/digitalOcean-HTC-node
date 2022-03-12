const { EventEmitter } = require("events");

const firstEmitter = new EventEmitter();


firstEmitter.emit("My first event");
