module.exports.config = {
    name: "allname",
    version: "1.0",
    role: 0,
    author: "Custom",
    shortDescription: "Change all nicknames",
    category: "box",
    guide: "{p}allname <name>"
};
module.exports.run = async function({ api, event, args, Threads }) {
    const name = args.join(" ");
    if (!name) return api.sendMessage("Usage: /allname <name>", event.threadID, event.messageID);
    const info = await Threads.getInfo(event.threadID);
    info.participantIDs.forEach(uid => {
        if (uid != api.getCurrentUserID()) api.changeNickname(name, event.threadID, uid);
    });
    return api.sendMessage(`Changed all nicknames to "${name}"`, event.threadID);
};