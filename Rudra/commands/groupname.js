module.exports.config = {
    name: "groupname",
    version: "1.1",
    role: 0,
    author: "Custom + Fix by ChatGPT",
    shortDescription: "Change group name",
    category: "box",
    guide: "{p}groupname <new name>"
};

module.exports.run = async function ({ api, event, args }) {
    // Agar koi lock flag laga hai to usko ignore karein
    if (global.lockedGroupName) {
        delete global.lockedGroupName;
    }

    const name = args.join(" ");
    if (!name) {
        return api.sendMessage("Usage: /groupname <new name>", event.threadID, event.messageID);
    }

    try {
        await api.setTitle(name, event.threadID);
        api.sendMessage(`✅ Group name changed to "${name}"`, event.threadID);

        // Verify after 2 seconds agar revert hua to warning
        setTimeout(async () => {
            try {
                const info = await api.getThreadInfo(event.threadID);
                if (info.threadName !== name) {
                    api.sendMessage("⚠️ Name change reverted! Maybe group name lock is enabled.", event.threadID);
                }
            } catch (err) {
                console.error("Error verifying group name:", err);
            }
        }, 2000);

    } catch (err) {
        console.error("Error setting group name:", err);
        api.sendMessage(`❌ Failed to change group name.\nError: ${err.message}`, event.threadID);
    }
};
