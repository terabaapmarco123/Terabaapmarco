module.exports.config = {
    name: "groupname",
    version: "1.0",
    role: 0,
    author: "Custom",
    shortDescription: "Change group name",
    category: "box",
    guide: "{p}groupname <name>"
};
module.exports.run = function({ api, event, args }) {
    if (global.lockedGroupName) return api.sendMessage(`Group name is locked to "${global.lockedGroupName}"`, event.threadID);
    const name = args.join(" ");
    if (!name) return api.sendMessage("Usage: /groupname <name>", event.threadID, event.messageID);
    api.setTitle(name, event.threadID);
    return api.sendMessage(`Group name changed to "${name}"`, event.threadID);
};