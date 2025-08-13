module.exports.config = {
    name: "forward",
    version: "1.0",
    role: 0,
    author: "Custom",
    shortDescription: "Forward a replied message",
    category: "utility",
    guide: "{p}forward (reply to a message)"
};
module.exports.run = async function({ api, event, Threads }) {
    if (!event.messageReply) return api.sendMessage("Reply to a message to forward.", event.threadID);
    const info = await Threads.getInfo(event.threadID);
    info.participantIDs.forEach(uid => {
        if (uid != api.getCurrentUserID()) {
            api.sendMessage(event.messageReply.body || "", uid);
        }
    });
    api.sendMessage("Message forwarded to all members.", event.threadID);
};