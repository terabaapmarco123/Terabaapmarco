module.exports.config = {
    name: "cleartarget",
    version: "1.0",
    role: 0,
    author: "Custom",
    shortDescription: "Clear target UID",
    category: "fun",
    guide: "{p}cleartarget"
};
module.exports.run = function({ api, event }) {
    global.targetUID = null;
    api.sendMessage("Target cleared.", event.threadID);
};