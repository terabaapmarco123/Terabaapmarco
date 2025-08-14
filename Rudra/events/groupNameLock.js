module.exports.config = {
    name: "groupname",
    version: "1.0",
    role: 0,
    author: "Custom",
    shortDescription: "Change group name",
    category: "box",
    guide: "{p}groupname <new name>"
};

module.exports.run = function({ api, event, args }) {
    const name = args.join(" ");
    if (!name) return api.sendMessage("Usage: /groupname <new name>", event.threadID, event.messageID);

    api.setTitle(name, event.threadID, (err) => {
        if (err) return api.sendMessage("❌ Failed to change group name. Make sure the bot account is an admin.", event.threadID);
        return api.sendMessage(`✅ Group name changed to "${name}"`, event.threadID);
    });
};
