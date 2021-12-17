
const SARHAN = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../config');
const need = "*add link after command💌*"

if (Config.WORKTYPE == 'private') {

  SARHAN.addCommand({ pattern: 'spdf ?(.*)', fromMe: true, desc: 'Get screenshot of links in pdf'}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var sqadir = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`, { responseType: 'arraybuffer' })
    
    await message.sendMessage(Buffer.from(sqadir.data), MessageType.document, { filename: 'sarhan.pdf', mimetype: Mimetype.pdf});

  }));
}

else if (Config.WORKTYPE == 'public') {

  SARHAN.addCommand({ pattern: 'spdf ?(.*)', fromMe: false, desc: 'Get screenshot of links in pdf'}, (async (message, match) => {

    if (match[1] === '') return await message.sendMessage(need);

    var sqadir = await axios.get(`https://api.html2pdf.app/v1/generate?url=${match[1]}&apiKey=begC4dFAup1b8LyRXxAfjetfqDg2uYx8PWmh9YJ59tTZXiUyh2Vs72HdYQB68vyc`, { responseType: 'arraybuffer' })

    await message.sendMessage(Buffer.from(sqadir.data), MessageType.document, {quoted: message.data, filename: 'sspdf.pdf', mimetype: Mimetype.pdf});

  }));

}
