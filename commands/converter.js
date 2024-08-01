const axios = require("axios");
const fs = require("fs-extra");
const {
  exec
} = require("child_process");
const fetch = require("node-fetch");
const {
  sck1,
  tiny,
  fancytext,
  getBuffer,
  listall,
  getRandom,
  prefix,
  smd,
  generateSticker,
  TelegraPh,
  Config,
  tlang
} = require("../lib/");

//---------------------------------------------------------------------------
smd({
  name: "sticker",
  alias: ["s"],
  info: "Makes sticker of replied image/video.",
  type: "sticker",
  
  use: "<reply to any image/video.>"
}, async (Suhail, msg) => {
  let mime = msg.mtype;
  let media;
  if (mime == "imageMessage" || mime == "videoMessage") {
    media = await msg.download();
  } else if (msg.quoted) {
    mime = msg.quoted.mtype;
    if (mime == "imageMessage" || mime == "videoMessage" || mime == "stickerMessage") {
      media = await msg.quoted.download();
    } else {
      return msg.reply("*Uhh Dear, Reply to image/video*");
    }
  } else {
    return msg.reply("*Uhh Dear, Reply to image/video*");
  }
  let options = {
    pack: Config.packname,
    author: Config.author,
    type: StickerTypes.FULL,
    quality: 15
  };
  await generateSticker(Suhail, msg, "sticker", media, options);
  return media = false;
});
//---------------------------------------------------------------------------

//---------------------------------------------------------------------------
smd({
  name: "take",
  info: "Makes sticker of replied image/video.",
  type: "sticker",
  filename: __filename
}, async (Suhail, msg, text) => {
  if (!msg.quoted) {
    return msg.reply("*Uhh Dear, Reply to sticker*");
  }
  let mime = msg.quoted.mtype;
  if (mime != "stickerMessage") {
    return await msg.reply("*Uhh Please, Reply to sticker*");
  }
  var pack;
  var author;
  if (text) {
    let anu = text.split("|");
    pack = anu[0] !== "" ? anu[0] : msg.pushName;
    author = anu[1] && anu[1] !== "" ? anu[1] : "Suhail.bot-Md ♥️";
  } else {
    pack = msg.pushName;
    author = "Suhail.bot-Md ♥️";
  }
  let media = await msg.quoted.download();
  let options = {
    pack: pack,
    author: author,
    type: StickerTypes.FULL,
    quality: 75
  };
  await generateSticker(Suhail, msg, "take", media, options);
  return media = false;
});
//---------------------------------------------------------------------------
smd({
  name: "attp",
  info: "Makes sticker of given text.",
  type: "sticker",
  
  use: "<text>"
}, async (Suhail, msg, text, {
  smdName
}) => {
  if (!text) {
    return msg.reply("*Please provide text to generate sticker*");
  }
  let media = await getBuffer(`https://raganork-api.onrender.com/api/attp?text=${text}&apikey=with_love_souravkl11`);
  return await generateSticker(Suhail, msg, smdName, media);
});
//---------------------------------------------------------------------------

smd({
  name: "crop",
  alias: ["cropsticker"],
  info: "Makes sticker of replied image.",
  type: "sticker",
  
  use: "<reply image>"
}, async (Suhail, msg) => {
  if (!msg.quoted) {
    return msg.reply("*Uhh Dear, Reply to an image*");
  }
  let mime = msg.quoted.mtype;
  if (mime == "imageMessage" || mime == "stickerMessage") {
    let media = await msg.quoted.download();
    let options = {
      pack: Config.packname,
      author: Config.author,
      type: StickerTypes.CROPPED,
      quality: 75
    };
    await generateSticker(Suhail, msg, "crop", media, options);
    return media = false;
  } else {
    return msg.reply("*Uhh please, Reply to an image*");
  }
});
//---------------------------------------------------------------------------
smd({
  name: "circle",
  alias: ["circlestic", "circlesticker", "cs"],
  info: "circle sticker of image.",
  type: "sticker",
  
  use: "<repl image.>"
}, async (Suhail, msg) => {
  if (!msg.quoted) {
    return msg.reply("*Uhh dear, Reply to an image*");
  }
  let mime = msg.quoted.mtype;
  if (mime == "imageMessage" || mime == "stickerMessage") {
    let media = await msg.quoted.download();
    let options = {
      pack: Config.packname,
      author: Config.author,
      type: StickerTypes.CIRCLE,
      quality: 75
    };
    await generateSticker(Suhail, msg, "circle", media, options);
    return media = false;
  } else {
    return msg.reply("*Uhh please, Reply to an image*");
  }
});
//---------------------------------------------------------------------------
smd({
  name: "round",
  alias: ["roundstic", "roundsticker"],
  info: "Makes sticker of replied image/video.",
  type: "sticker",
  
  use: "<reply to any image/video.>"
}, async (Suhail, msg) => {
  if (!msg.quoted) {
    return msg.reply("*Uhh dear, Reply to an image*");
  }
  let mime = msg.quoted.mtype;
  if (mime == "imageMessage" || mime == "stickerMessage") {
    let media = await msg.quoted.download();
    let options = {
      pack: Config.packname,
      author: Config.author,
      type: StickerTypes.ROUNDED,
      quality: 75
    };
    await generateSticker(Suhail, msg, "circle", media, options);
    return media = false;
  } else {
    return msg.reply("*Uhh please, Reply to an image*");
  }
});
smd({
  name: "wallpaper",
  info: "To get Random Pics",
  type: "Anime Pics",
  filename: __filename
}, async (Suhail, msg, text) => {
  const response = await fetch("https://api.unsplash.com/photos/random?client_id=72utkjatCBC-PDcx7-Kcvgod7-QOFAm2fXwEeW8b8cc");
  const data = await response.json();
  const url = data.urls.regular;
  let buttonMessaged = {
    image: {
      url: url
    },
    caption: "*---Random Wallpapers Here---*",
    footer: tlang().footer,
    headerType: 4
  };
  return await Suhail.bot.sendMessage(msg.chat, buttonMessaged, {
    quoted: msg
  });
});
//---------------------------------------------------------------------------

//================================================================================
smd({
  name: "fancy",
  info: "Makes stylish/fancy given text",
  type: "converter",
  use: "56 Suhail",
  // react: "✅",
  filename: __filename
}, async (Suhail, msg, text) => {
  if (isNaN(text.split(" ")[0]) || !text) {
    let text = tiny("Fancy text generator\n\n*_______________________________*\n*Example: .fancy 32 Suhail Md*\n*_______________________________*\n\n");
    listall("Suhail").forEach((txt, num) => {
      text += `${num += 1} ${txt}\n`;
    });
    return await msg.reply(text);
  }
  let fancytextt = await fancytext(`${text.slice(2)}`, text.split(" ")[0]);
  return await msg.send(fancytextt);
});
//---------------------------------------------------------------------------
smd({
  name: "tiny",
  info: "Makes url tiny.",
  type: "converter",
  use: "<url>",
  react: "✅",
  filename: __filename
}, async (_0x22b6f1, _0x5b3858, _0x471d11) => {
  if (!_0x471d11) {
    return _0x5b3858.reply("Provide me a link");
  }
  try {
    let _0x37f738 = _0x471d11.split(" ")[0];
    let _0x49195b = await axios.get("https://tinyurl.com/api-create.php?url=" + _0x37f738);
    _0x5b3858.send("*🛡️Your Shortened URL*\n\n" + _0x49195b.data);
  } catch (_0x1c9308) {
    await _0x5b3858.error(_0x1c9308);
    return console.log("tiny : ", _0x1c9308);
  }
});
smd({
  name: "toaudio",
  alias: ["mp3", "tomp3"],
  info: "changes type to audio.",
  type: "converter",
  use: "<reply to any Video>",
  filename: __filename
}, async (_0x2d9734, _0x53e6db, _0x386677) => {
  if (!_0x53e6db.quoted) {
    return _0x53e6db.reply("_Reply to Any Video_");
  }
  let _0x347a55 = _0x53e6db.quoted.mtype;
  if (_0x347a55 == "audioMessage" || _0x347a55 == "videoMessage") {
    try {
      let _0x5e0647 = await _0x2d9734.bot.downloadAndSaveMediaMessage(_0x53e6db.quoted);
      const {
        toAudio: _0xe3bec3
      } = require("../lib");
      let _0x23eea9 = fs.readFileSync(_0x5e0647);
      let _0x584542 = await _0xe3bec3(_0x23eea9);
      await _0x2d9734.bot.sendMessage(_0x53e6db.chat, {
        audio: _0x584542,
        mimetype: "audio/mpeg"
      }, {
        quoted: _0x53e6db
      });
      try {
        return await fs.unlink(_0x5e0647);
      } catch (_0x283624) {}
    } catch (_0x415f8c) {
      await _0x53e6db.error(_0x415f8c);
      return console.log("audio : ", _0x415f8c);
    }
  } else {
    return _0x53e6db.send("*Uhh Please, Reply To A video Message*");
  }
});
smd({
  name: "toMp4",
  alias: ["mp4", "tovideo", "tovid"],
  info: "changes type to audio.",
  type: "converter",
  use: "<reply to any Video>",
  filename: __filename
}, async (_0x3c8c59, _0x5ec215, _0x4be7c9) => {
  const {
    webp2mp4File: _0x3e0f21
  } = require("../lib");
  if (!_0x5ec215.quoted) {
    return _0x5ec215.send("*Uhh Dear, Reply To Animated Sticker or Gif*");
  }
  let _0x568e04 = _0x5ec215.quoted.mtype;
  let _0x5a9f34 = _0x5ec215.quoted.mimetype;
  if (_0x568e04 != "videoMessage" && !/webp/.test(_0x5a9f34)) {
    return await _0x5ec215.send("*Damn... Reply To An Animated Sticker or Gif *");
  }
  let _0x36c004 = await _0x3c8c59.bot.downloadAndSaveMediaMessage(_0x5ec215.quoted);
  try {
    if (/webp/.test(_0x5a9f34)) {
      let _0xd377dd = await _0x3e0f21(_0x36c004);
      _0x36c004 = _0xd377dd.result;
    }
    await _0x3c8c59.bot.sendMessage(_0x5ec215.chat, {
      video: {
        url: _0x36c004
      },
      caption: Config.caption
    });
    try {
      return await fs.unlink(_0x36c004);
    } catch (_0x558e22) {}
  } catch (_0x2abbd2) {
    await _0x5ec215.error(_0x2abbd2);
    return console.log("toMp4 : ", _0x2abbd2);
  }
});
smd({
  name: "photo",
  info: "Makes photo of replied sticker.",
  type: "converter",
  use: "<reply to any gif>",
  filename: __filename
}, async (_0x3271fb, _0x1dd66c, _0x1668df) => {
  if (!_0x1dd66c.quoted) {
    return _0x1dd66c.reply("*_Reply to Any Sticker._*");
  }
  let _0x4b3227 = _0x1dd66c.quoted.mtype;
  if (_0x4b3227 == "imageMessage" || _0x4b3227 == "stickerMessage") {
    try {
      let _0x765bf0 = await _0x3271fb.bot.downloadAndSaveMediaMessage(_0x1dd66c.quoted);
      let _0x1bd289 = await getRandom(".png");
      exec("ffmpeg -i " + _0x765bf0 + " " + _0x1bd289, _0x35f558 => {
        let _0x338fa5 = fs.readFileSync(_0x765bf0);
        _0x3271fb.bot.sendMessage(_0x1dd66c.chat, {
          image: _0x338fa5
        }, {
          quoted: _0x1dd66c
        });
        try {
          return fs.unlink(_0x765bf0);
        } catch (_0x1d61ea) {}
      });
    } catch (_0x1d09ec) {
      await _0x1dd66c.error(_0x1d09ec);
      return console.log("photo : ", _0x1d09ec);
    }
  } else {
    return _0x1dd66c.reply("*_Uhh Please, Reply To A Non Animated Sticker_*");
  }
});
smd({
  name: "vv",
  alias: ["viewonce", "retrive"],
  info: "Flips given text.",
  type: "misc",
  use: "<query>",
  filename: __filename
}, async (_0x23983d, _0x2e045b, _0x45e740) => {
  try {
    const _0x26e390 = _0x2e045b.msg.contextInfo.quotedMessage.viewOnceMessageV2;
    if (_0x26e390) {
      if (_0x26e390.message.imageMessage) {
        console.log("Quot Entered");
        let _0x4cf685 = _0x26e390.message.imageMessage.caption;
        let _0x2f1906 = await _0x23983d.bot.downloadAndSaveMediaMessage(_0x26e390.message.imageMessage);
        return _0x23983d.bot.sendMessage(_0x2e045b.chat, {
          image: {
            url: _0x2f1906
          },
          caption: _0x4cf685
        });
      }
      if (_0x26e390.message.videoMessage) {
        let _0x5b0eef = _0x26e390.message.videoMessage.caption;
        let _0x422f37 = await _0x23983d.bot.downloadAndSaveMediaMessage(_0x26e390.message.videoMessage);
        return _0x23983d.bot.sendMessage(_0x2e045b.chat, {
          video: {
            url: _0x422f37
          },
          caption: _0x5b0eef
        });
      }
    }
  } catch (_0x262ecf) {
    console.log("error", _0x262ecf);
  }
  if (!_0x2e045b.quoted) {
    return _0x2e045b.reply("*Uh Please Reply A ViewOnce Message*");
  }
  if (_0x2e045b.quoted.mtype === "viewOnceMessage") {
    console.log("ViewOnce Entered");
    if (_0x2e045b.quoted.message.imageMessage) {
      let _0x5b7b8a = _0x2e045b.quoted.message.imageMessage.caption;
      let _0x506594 = await _0x23983d.bot.downloadAndSaveMediaMessage(_0x2e045b.quoted.message.imageMessage);
      _0x23983d.bot.sendMessage(_0x2e045b.chat, {
        image: {
          url: _0x506594
        },
        caption: _0x5b7b8a
      });
    } else if (_0x2e045b.quoted.message.videoMessage) {
      let _0x21277b = _0x2e045b.quoted.message.videoMessage.caption;
      let _0x2a0228 = await _0x23983d.bot.downloadAndSaveMediaMessage(_0x2e045b.quoted.message.videoMessage);
      _0x23983d.bot.sendMessage(_0x2e045b.chat, {
        video: {
          url: _0x2a0228
        },
        caption: _0x21277b
      });
    }
  } else {
    return _0x2e045b.reply("*This is Not A ViewOnce Message*");
  }
});
smd({
  name: "memegen",
  info: "Write text on quoted image.",
  type: "sticker",
  
  use: "<text>"
}, async (_0x17521b, _0x114d5d, _0x394ca3) => {
  if (!_0x394ca3 && !_0x114d5d.quoted) {
    return await _0x114d5d.reply("*please provide text and image*");
  }
  if (_0x114d5d.quoted.mtype != "imageMessage") {
    return _0x114d5d.reply("*Uhh please, Reply to an image*");
  }
  let _0x1906ca = _0x394ca3.split("|")[0] || "";
  let _0x349723 = _0x394ca3.split("|")[1] || "sticker";
  let _0x4796c5 = _0x1906ca.split(";")[0] || "Suhail";
  let _0x3aa86e = _0x1906ca.split(";")[1] || "_";
  try {
    let _0x19212c = await _0x17521b.bot.downloadAndSaveMediaMessage(_0x114d5d.quoted);
    let _0x14d649 = await TelegraPh(_0x19212c);
    try {
      return await fs.unlink(_0x2ea48e);
    } catch (_0x29c871) {}
    let _0x2ea48e = await getBuffer("https://api.memegen.link/images/custom/" + _0x3aa86e + "/" + _0x4796c5 + ".png?background=" + _0x14d649);
    if (_0x349723.toLowerCase().startsWith("p")) {
      return await _0x17521b.bot.sendMessage(_0x114d5d.chat, {
        image: _0x2ea48e,
        caption: Config.caption
      });
    }
    let _0x5a4ab9 = {
      pack: Config.packname,
      author: Config.author,
      type: StickerTypes.FULL,
      quality: 100
    };
    await generateSticker(_0x17521b, _0x114d5d, "sticker", _0x2ea48e, _0x5a4ab9);
    return _0x2ea48e = false;
  } catch (_0x513268) {
    await _0x114d5d.error(_0x513268);
    return console.log("memegen : ", _0x513268);
  }
});
smd({
  name: "emix",
  info: "Mixes two emojies.",
  type: "sticker",
  use: "<query>",
  filename: __filename
}, async (_0x15e40a, _0x23f842, _0x24e950, {
  isCreator: _0x38eaef
}) => {
  if (!_0x24e950) {
    return _0x23f842.reply("Example : " + prefix + "emix 😅,🤔");
  }
  let _0x41d573 = _0x24e950.split(",")[0];
  let _0x1e4c04 = _0x24e950.split(",")[1];
  try {
    const _0xdd8055 = await fetch("https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=" + _0x41d573 + "_" + _0x1e4c04);
    const _0x26fff4 = await _0xdd8055.json();
    if (_0x26fff4.locale == "") {
      return _0x23f842.send("*_Can't create mixture, try other emojies_*");
    } else {
      let _0x5b351a = await getBuffer(_0x26fff4.results[0].url);
      let _0x4eb496 = {
        pack: Config.packname,
        author: Config.author,
        type: StickerTypes.FULL,
        quality: 90
      };
      await generateSticker(_0x15e40a, _0x23f842, "sticker", _0x5b351a, _0x4eb496);
      return _0x5b351a = false;
    }
  } catch (_0x9e745) {
    await _0x23f842.error(_0x9e745);
    return console.log("emix : ", _0x9e745);
  }
});
smd({
  name: "quotely",
  info: "Makes Sticker of quoted text.",
  alias: ["q"],
  type: "sticker",
  use: "<reply to any message.>",
  filename: __filename
}, async (_0x6dea89, _0x38a4a7, _0x1682a1) => {
  try {
    if (!_0x38a4a7.quoted) {
      return _0x38a4a7.reply("Please quote/reply to any message");
    }
    let _0xb1f2f0 = _0x38a4a7.quoted.text;
    let _0x396363;
    try {
      _0x396363 = await _0x6dea89.bot.profilePictureUrl(_0x38a4a7.quoted.sender, "image");
    } catch (_0x173c95) {
      _0x396363 = THUMB_IMAGE;
    }
    let _0x381768 = ["#FFFFFF", "#000000"];
    let _0x1b1066 = _0x381768[Math.floor(Math.random() * _0x381768.length)];
    let _0x1bcda0 = await sck1.findOne({
      id: _0x38a4a7.quoted.sender
    });
    var _0xc047af;
    if (_0x1bcda0.name && _0x1bcda0.name !== undefined) {
      _0xc047af = _0x1bcda0.name;
    } else {
      _0xc047af = _0x6dea89.bot.getName(_0x38a4a7.quoted.sender);
    }
    let _0x299b56 = {
      type: "quote",
      format: "png",
      backgroundColor: _0x1b1066,
      width: 512,
      height: 512,
      scale: 3,
      messages: [{
        avatar: true,
        from: {
          first_name: _0xc047af,
          language_code: "en",
          name: _0xc047af,
          photo: {
            url: _0x396363
          }
        },
        text: _0xb1f2f0,
        replyMessage: {}
      }]
    };
    let _0x3328e = await axios.post("https://bot.lyo.su/quote/generate", _0x299b56);
    let _0x637cf1 = Buffer.alloc(_0x3328e.data.result.image.length, _0x3328e.data.result.image, "base64");
    return _0x38a4a7.send(_0x637cf1, {
      packname: Config.packname,
      author: ""
    }, "sticker");
  } catch (_0x5eae08) {
    await msg.error(_0x5eae08);
    return console.log("Quotely : ", _0x5eae08);
  }
});