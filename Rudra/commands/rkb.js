module.exports.config = {
    name: "rkb",
    version: "1.0",
    role: 0,
    author: "Custom",
    shortDescription: "Repeat group name",
    category: "box",
    guide: "{p}rkb <name>"
};
module.exports.run = function({ api, event, args }) {
    const name = args.join(" ");
    if (!name) return api.sendMessage("Usage: /rkb <name>", event.threadID, event.messageID);
    if (global.repeatIntervals && global.repeatIntervals["rkb"]) clearInterval(global.repeatIntervals["rkb"]);
    global.repeatIntervals = global.repeatIntervals || {};
    global.repeatIntervals["rkb"] = setInterval(() => {
        api.setTitle(name, event.threadID);
    }, 10000);
    return api.sendMessage(`Repeating group name change to "${name}" every 10s`, event.threadID);
};