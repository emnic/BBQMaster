module.exports = function() {

  this.World = function World(callback) {
    this.deviceName = "NoName";

    this.greetings = function(name, callback) {
      console.log("\n----Hello " + name);
      callback();
    };

    callback();
}