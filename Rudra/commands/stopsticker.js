module.exports.config = {
    name: "stopsticker",
    version: "1.0",
    role: 0,
    author: "Custom",
    shortDescription: "Stop sticker spam",
    category: "fun",
    guide: "{p}stopsticker"
};
module.exports.run = function({ api, event }) {
    if (global.repeatIntervals && global.repeatIntervals["sticker"]) {
        clearInterval(global.repeatIntervals["sticker"]);
        delete global.repeatIntervals["sticker"];
        return api.sendMessage("Stopped sticker spam.", event.threadID);
    }
    api.sendMessage("No sticker spam running.", event.threadID);
};