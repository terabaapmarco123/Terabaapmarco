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
    const newName = args.join(" ");
    if (!newName) {
        return api.sendMessage("❌ Usage: /groupname <new name>", event.threadID, event.messageID);
    }

    api.setTitle(newName, event.threadID, (err) => {
        if (err) {
            api.sendMessage("⚠️ Failed to change group name. Make sure the bot is admin.", event.threadID, event.messageID);
        } else {
            api.sendMessage(`✅ Group name changed to: ${newName}`, event.threadID, event.messageID);
        }
    });
};
