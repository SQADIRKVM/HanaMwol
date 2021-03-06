/* Copyright (C)  2020  SQADIR.
 */

const SQADIR = require('../events');
const config = require('../config');
const Heroku = require('heroku-client');
const heroku = new Heroku({
  token: config.HEROKU.API_KEY
});
let baseURI = '/apps/' + config.HEROKU.APP_NAME;

var sqadir_desc = ''
var GIF = ''
var PP = ''

if (config.LANG == 'EN') {

  sqadir_desc = 'change greeting mode'
  GIF = '๐๐ซ๐๐๐ญ๐ข๐ง๐  ๐ญ๐ฒ๐ฉ๐ ๐๐ก๐ฎ๐ง๐ ๐๐ ๐ญ๐จ ๐๐๐ ๐ฆ๐จ๐๐โป๏ธ'
  PP = '๐๐ซ๐๐๐ญ๐ข๐ง๐  ๐ญ๐ฒ๐ฉ๐ ๐๐ก๐ฎ๐ง๐ ๐๐ ๐ญ๐จ ๐๐๐๐๐๐๐ ๐๐๐ ๐ฆ๐จ๐๐โป๏ธ'
}

if (config.LANG == 'ML') {

  sqadir_desc = 'greeting mode เดฎเดพเดฑเตเดฑเดพเตป'
  GIF = 'GREETING *GIF* เดฎเตเดกเดฟเดฒเตเดเตเดเต เดฎเดพเดฑเตเดฑเดฟ'
  PP = 'GREETING *PROFILE PIC* เดฎเตเดกเดฟเดฒเตเดเตเดเต เดฎเดพเดฑเตเดฑเดฟ'
}

SQADIR.addCommand({ pattern: 'greet ?(.*)', fromMe: true, desc: sqadir_desc, usage: '.greet pp / gif' }, (async (message, match) => {
  if (match[1] == 'gif') {
    await heroku.patch(baseURI + '/config-vars', {
      body: {
                        ['GREETING_TYPE']: 'GIF'
      }
    });
    await message.sendMessage(GIF)
  } else if (match[1] == 'pp') {
    await heroku.patch(baseURI + '/config-vars', {
      body: {
                        ['GREETING_TYPE']: 'PP'
      }
    });
    await message.sendMessage(PP)
  }
}));
