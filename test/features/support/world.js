module.exports = function() {

    this.World = function World(callback) {
        this.deviceName = "NoName";
        this.nextResponse = "NA";

        callback();
    }
}