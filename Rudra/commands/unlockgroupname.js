module.exports.config = {
    name: "unlockgroupname",
    version: "1.0",
    role: 0,
    author: "Custom",
    shortDescription: "Unlock group name",
    category: "box",
    guide: "{p}unlockgroupname"
};
module.exports.run = function({ api, event }) {
    global.lockedGroupName = null;
    return api.sendMessage("Group name unlocked", event.threadID);
};