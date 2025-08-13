module.exports.config = {
    name: "exit",
    version: "1.0",
    role: 0,
    author: "Custom",
    shortDescription: "Leave the group",
    category: "box",
    guide: "{p}exit"
};
module.exports.run = function({ api, event }) {
    api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
};