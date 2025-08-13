module.exports.config = {
    name: "help",
    version: "1.0",
    role: 0,
    author: "Custom",
    shortDescription: "Show help message",
    category: "utility",
    guide: "{p}help"
};
module.exports.run = function({ api, event }) {
    const msg = `📌 Available Commands:\n
/allname <name> – Change all nicknames\n
/groupname <name> – Change group name\n
/lockgroupname <name> – Lock group name\n
/unlockgroupname – Unlock group name\n
/uid – Show group ID\n
/exit – Leave group\n
/rkb <name> – Repeat group name\n
/stop – Stop repeaters\n
/photo – Repeat photo/video every 30s\n
/stopphoto – Stop repeating photo/video\n
/forward – Forward replied message to all\n
/target <uid> – Spam target UID\n
/cleartarget – Clear target\n
/sticker<seconds> – Sticker spam\n
/stopsticker – Stop sticker spam\n
/help – Show this help message`;
    api.sendMessage(msg, event.threadID);
};