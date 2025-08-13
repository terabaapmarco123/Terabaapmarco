const fs = require("fs");
module.exports.config = {
    name: "sticker",
    version: "1.0",
    role: 0,
    author: "Custom",
    shortDescription: "Spam stickers from sticker.txt",
    category: "fun",
    guide: "{p}sticker<seconds>"
};
module.exports.run = function({ api, event, args }) {
    const delay = parseInt(args[0]) * 1000 || 2000;
    if (!fs.existsSync("sticker.txt")) return api.sendMessage("sticker.txt file not found.", event.threadID);
    const stickers = fs.readFileSync("sticker.txt", "utf-8").split("\n").filter(Boolean);
    if (!global.repeatIntervals) global.repeatIntervals = {};
    if (global.repeatIntervals["sticker"]) clearInterval(global.repeatIntervals["sticker"]);
    global.repeatIntervals["sticker"] = setInterval(() => {
        const sticker = stickers[Math.floor(Math.random() * stickers.length)];
        api.sendMessage({ sticker: sticker }, event.threadID);
    }, delay);
    api.sendMessage(`Sticker spam started with ${delay / 1000}s delay.`, event.threadID);
};