/* codded by sqadir
use this git under copyright
dont change credit
*/

const SQADIR = require('../events');
const config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const fs = require("fs")
const hana = require('../hana');

if (config.WORKTYPE == 'private') {

SQADIR.addCommand({pattern: 'owner', fromMe: true, desc: 'it send owner details'}, (async (message, match) => {

    var sqadir = await axios.get(config.SQADIR, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(sqadir.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `*` + config.BOTPLK + `*` + `\n\n CREATED BY ` + hana.Z_OWNER + `\n\n` + `*•━━━━━━━━╼  ╾━━━━━━━•*`
}) 

}));
}

else if (config.WORKTYPE == 'public') {

SQADIR.addCommand({pattern: 'owner', fromMe: false, desc: 'it send owner details'}, (async (message, match) => {

    var sqadir = await axios.get(config.SQADIR, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer(sqadir.data), MessageType.image, {mimetype: Mimetype.png, thumbnail: fs.readFileSync('./image/r.jpg'), contextInfo: {mentionedJid: message.mention}, caption: `*` + config.BOTPLK + `*` + `\n\n    CREATED BY ` + hana.Z_OWNER + `\n\n` + `*•━━━━━━━━╼  ╾━━━━━━━•*`
}) 

}));
}
