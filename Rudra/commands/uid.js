module.exports.config = {
    name: "uid",
    version: "1.0",
    role: 0,
    author: "Custom",
    shortDescription: "Show group ID",
    category: "box",
    guide: "{p}uid"
};
module.exports.run = function({ event, api }) {
    return api.sendMessage(`Group ID: ${event.threadID}`, event.threadID);
};