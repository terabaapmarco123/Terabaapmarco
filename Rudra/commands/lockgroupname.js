module.exports.config = {
    name: "lockgroupname",
    version: "1.0",
    role: 0,
    author: "Custom",
    shortDescription: "Lock group name",
    category: "box",
    guide: "{p}lockgroupname <name>"
};
module.exports.run = function({ api, event, args }) {
    const name = args.join(" ");
    if (!name) return api.sendMessage("Usage: /lockgroupname <name>", event.threadID, event.messageID);
    global.lockedGroupName = name;
    api.setTitle(name, event.threadID);
    return api.sendMessage(`Group name locked to "${name}"`, event.threadID);
};