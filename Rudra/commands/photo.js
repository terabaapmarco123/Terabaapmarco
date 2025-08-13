module.exports.config = {
    name: "photo",
    version: "1.0",
    role: 0,
    author: "Custom",
    shortDescription: "Repeat photo/video every 30s",
    category: "fun",
    guide: "{p}photo (reply to a photo/video)"
};
module.exports.run = function({ api, event }) {
    if (!event.messageReply || !event.messageReply.attachments || event.messageReply.attachments.length === 0) {
        return api.sendMessage("Reply to a photo/video to repeat.", event.threadID, event.messageID);
    }
    const attachment = event.messageReply.attachments[0].url;
    if (!global.repeatIntervals) global.repeatIntervals = {};
    if (global.repeatIntervals["photo"]) clearInterval(global.repeatIntervals["photo"]);
    global.repeatIntervals["photo"] = setInterval(() => {
        api.sendMessage({ body: "", attachment: [api.sendMessage({ url: attachment })] }, event.threadID);
    }, 30000);
    api.sendMessage("Repeating photo/video every 30 seconds.", event.threadID);
};