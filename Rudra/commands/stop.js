module.exports.config = {
    name: "stop",
    version: "1.0",
    role: 0,
    author: "Custom",
    shortDescription: "Stop all repeaters",
    category: "box",
    guide: "{p}stop"
};
module.exports.run = function({ api, event }) {
    if (global.repeatIntervals) {
        for (let key in global.repeatIntervals) clearInterval(global.repeatIntervals[key]);
        global.repeatIntervals = {};
    }
    return api.sendMessage("Stopped all repeat actions", event.threadID);
};