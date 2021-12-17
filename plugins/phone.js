/* # Exclusively from sqadir
 */ 

const SQADIR = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../hana');
const config = require('../config');

if (config.WORKTYPE == 'private') {

SQADIR.addCommand({pattern: 'number', fromMe: true, desc: 'Its send owner number'}, (async (message, match) => {

            const SARHAN = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:' + Config.Z_OWNER + '\n' //created afnanplk, please copy this with credit..
            + 'ORG:Hana fam;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=' + Config.Z_NUMBER + ':' + Config.Z_NUMBER + ' \n'
            + 'END:VCARD'
await message.client.sendMessage(message.jid, {displayname: "Owner", vcard: SARHAN}, MessageType.contact);

  }));
}

else if (config.WORKTYPE == 'public') {

SQADIR.addCommand({pattern: 'number', fromMe: false, desc: 'Its send owner number'}, (async (message, match) => {
         var mode = ''
if (Config.Z_OWNER == 'SQADIR') mode = 'ᴅᴇᴠᴇʟᴏᴘᴇʀ : '

else mode = 'ᴏᴡɴᴇʀ : '
            
            const SARHAN = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:' + mode + Config.Z_OWNER + '\n' //created afnanplk, please copy this with credit..
            + 'ORG:Hana fam;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=' + Config.Z_NUMBER + ':' + Config.Z_NUMBER + ' \n'
            + 'END:VCARD'
await message.client.sendMessage(message.jid, {displayname: "Owner", vcard: SARHAN}, MessageType.contact);

  }));
}
