module.exports.config = {
    name: "stopphoto",
    version: "1.0",
    role: 0,
    author: "Custom",
    shortDescription: "Stop photo/video repeater",
    category: "fun",
    guide: "{p}stopphoto"
};
module.exports.run = function({ api, event }) {
    if (global.repeatIntervals && global.repeatIntervals["photo"]) {
        clearInterval(global.repeatIntervals["photo"]);
        delete global.repeatIntervals["photo"];
        return api.sendMessage("Stopped repeating photo/video.", event.threadID);
    }
    api.sendMessage("No photo/video repeater running.", event.threadID);
};