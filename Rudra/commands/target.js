module.exports.config = {
    name: "target",
    version: "1.0",
    role: 0,
    author: "Custom",
    shortDescription: "Target a UID with spam",
    category: "fun",
    guide: "{p}target <uid>"
};
module.exports.run = function({ api, event, args }) {
    const uid = args[0];
    if (!uid) return api.sendMessage("Usage: /target <uid>", event.threadID);
    global.targetUID = uid;
    api.sendMessage(`Target set to UID: ${uid}`, event.threadID);
};