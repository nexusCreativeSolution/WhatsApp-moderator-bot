const {
    tlang,
    getAdmin,
    prefix,
    Config,
    sck,
    sck1,
    smd
  } = require("../lib");
  let {
    dBinary,
    eBinary
  } = require("../lib/binary");
  const axios = require("axios");
  smd({
    name: "welcome",
    alias: ["setwelcome"],
    info: "sets welcome message in specific group.",
    type: "misc",
    filename: __filename
  }, async (Suhail, msg, text, {
    isCreator
  }) => {
    let grp = msg.chat;
    if (!msg.isGroup) {
      return msg.reply(tlang().group);
    }
    const groupAdmins = await getAdmin(Suhail.bot, msg);
    const isAdmins = groupAdmins.includes(msg.sender);
    if (!isAdmins && !isCreator) {
      return msg.reply(tlang().admin);
    }
    let Group = await sck.findOne({
      id: msg.chat
    });
    if (!text) {
      return await msg.reply("*Wellcome Message :* " + Group.welcome);
    }
    await await sck.updateOne({
      id: msg.chat
    }, {
      welcome: text,
      events: "true"
    });
    let metadata = await Suhail.bot.groupMetadata(msg.chat);
    var ppuser;
    let num = msg.sender;
    var welcome_messages = text.replace(/@pp/g, "").replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc).replace(/@count/gi, metadata.participants.length);
    try {
      ppuser = await Suhail.bot.profilePictureUrl(num, "image");
    } catch {
      ppuser = "https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg";
    }
    return await Suhail.bot.sendMessage(msg.chat, {
      image: {
        url: ppuser
      },
      caption: welcome_messages,
      mentions: [num]
    });
  });
  //---------------------------------------------------------------------------
  smd({
    name: "goodbye",
    alias: ["setgoodbye", "setbye"],
    info: "sets goodbye message in specific group.",
    type: "misc",
    filename: __filename
  }, async (Suhail, msg, text, {
    isCreator
  }) => {
    if (!msg.isGroup) {
      return msg.reply(tlang().group);
    }
    const groupAdmins = await getAdmin(Suhail.bot, msg);
    const isAdmins = groupAdmins.includes(msg.sender);
    if (!isAdmins && !isCreator) {
      return msg.reply(tlang().admin);
    }
    let Group = await sck.findOne({
      id: msg.chat
    });
    if (!text) {
      return await msg.reply("*_Goodbye Message Is:_* " + Group.goodbye);
    }
    await sck.updateOne({
      id: msg.chat
    }, {
      goodbye: text,
      events: "true"
    });
    let metadata = await Suhail.bot.groupMetadata(msg.chat);
    var ppuser;
    let num = msg.sender;
    var goodbye_messages = text.replace(/@pp/g, "").replace(/@user/gi, `@${num.split("@")[0]}`).replace(/@gname/gi, metadata.subject).replace(/@desc/gi, metadata.desc).replace(/@count/gi, metadata.participants.length);
    try {
      ppuser = await Suhail.bot.profilePictureUrl(num, "image");
    } catch {
      ppuser = "https://telegra.ph/file/93f1e7e8a1d7c4486df9e.jpg";
    }
    return await Suhail.bot.sendMessage(msg.chat, {
      image: {
        url: ppuser
      },
      caption: goodbye_messages,
      mentions: [num]
    });
  });
  
  //---------------------------------------------------------------------------
  
  //---------------------------------------------------------------------------
  
  /*
  
  smd({
              name: "exec",
              info: "Evaluates quoted code with given language.",
              type: "misc",
              filename: __filename
          },
          async(Suhail.bot, msg, text) => {
   if (!msg.quoted) return msg.reply("*Reply to A Code Of Statements to Execute*")
              try {
                  const code = {
                      script: msg.quoted.text,
                      language: text[1],
                      versionIndex: "0",
                      stdin: text.slice(2).join(" "),
                      clientId: '694805244d4f825fc02a9d6260a54a99',
                      clientSecret: '741b8b6a57446508285bb5893f106df3e20f1226fa3858a1f2aba813799d4734'
                  };
                  request({
                      url: "https://api.jdoodle.com/v1/execute",
                      method: "POST",
                      json: code
                  }, function(_error, _response, body) {  msg.reply("> " + text[1] + "\n\n" + "```" + body.output + "```");  });
              } catch (error) {return await msg.reply("*Error In Your Code :* "+error);  }
          }
      )
      */
  smd({
    name: "getpp",
    info: "Get Profile Pic For Given User",
    type: "user",
    filename: __filename
  }, async (_0x4ed54a, _0x28aada, _0x55e064) => {
    if (!_0x28aada.quoted) {
      return _0x28aada.reply("*Please Reply To A User*");
    }
    let _0x19ff7d;
    try {
      _0x19ff7d = await _0x4ed54a.bot.profilePictureUrl(_0x28aada.quoted.sender, "image");
    } catch (_0x505329) {
      return _0x28aada.reply("```Profile Pic Not Fetched```");
    }
    return await _0x4ed54a.bot.sendMessage(_0x28aada.chat, {
      image: {
        url: _0x19ff7d
      },
      caption: "  *---Profile Pic Is Here---*\n" + Config.caption
    }, {
      quoted: _0x28aada
    });
  });
  smd({
    name: "readmore",
    alias: ["rmore", "readmor"],
    info: "Adds *readmore* in given text.",
    type: "misc",
    filename: __filename
  }, async (_0x435888, _0x4da0e5, _0x172e2d) => {
    if (!_0x172e2d) {
      _0x172e2d = "*Uhh Dear, Give Text, Eg:- _.readmor text1 readmore text2_*";
    } else {
      _0x172e2d += " ";
    }
    if (_0x172e2d.includes("readmore")) {
      await _0x4da0e5.reply(_0x172e2d.replace(/readmore/, String.fromCharCode(8206).repeat(4001)));
    } else {
      await _0x4da0e5.reply(_0x172e2d.replace(" ", String.fromCharCode(8206).repeat(4001)));
    }
  });
  smd({
    name: "whois",
    info: "Get replied person info",
    type: "user",
    use: "<reply to any person>",
    filename: __filename
  }, async (_0x19bc46, _0x2a3cae, _0x84ef26) => {
    if (!_0x2a3cae.quoted) {
      return _0x2a3cae.reply("Please Reply To A Person");
    }
    var _0x1c84a2 = await _0x19bc46.bot.fetchStatus(_0x2a3cae.quoted.sender);
    var _0x34e564 = _0x1c84a2.status;
    var _0x249384 = _0x1c84a2.setAt.toString();
    var _0x4a9a3b = _0x249384.split(" ");
    if (_0x4a9a3b.length > 3) {
      _0x249384 = _0x4a9a3b.slice(0, 5).join(" ");
    }
    var _0xf56ee0 = _0x2a3cae.quoted.sender.split("@")[0];
    let _0x1834f6;
    try {
      _0x1834f6 = await _0x19bc46.bot.profilePictureUrl(_0x2a3cae.quoted.sender, "image");
    } catch (_0x44dd0e) {
      _0x1834f6 = (await _0x19bc46.bot.profilePictureUrl(_0x2a3cae.sender, "image")) || "https://telegra.ph/file/29a8c892a1d18fdb26028.jpg";
    }
    let _0x4b6182 = await sck1.findOne({
      id: _0x2a3cae.quoted.sender
    });
    var _0x1173d5 = _0x4b6182.name;
    return await _0x19bc46.bot.sendMessage(_0x2a3cae.chat, {
      image: {
        url: _0x1834f6
      },
      caption: "\n╔════◇\n║ *『Person's  Information』*\n║ \n║ *🍫Name :* " + _0x1173d5 + "\n║ *👤Num :* " + _0xf56ee0 + "\n║ *🎐Bio    :*  " + _0x34e564 + "\n║ *🌟SetAt :* " + _0x249384 + "\n║    *Keep Calm Dude🥳*    ◇\n╚════════════════╝\n"
    }, {
      quoted: _0x2a3cae
    });
  });
  smd({
    name: "calc",
    info: "Calculate two value.",
    type: "misc",
    filename: __filename
  }, async (_0x1ba9b6, _0x2e64e8, _0x50d1aa) => {
    if (!_0x50d1aa) {
      return await _0x2e64e8.reply("Please enter a mathematical operation.");
    }
    _0x50d1aa = _0x50d1aa.replace(/\s+/g, "");
    if (!/^(\d+([-+%*/]\d+)+)$/.test(_0x50d1aa)) {
      return await _0x2e64e8.reply("Please enter a valid mathematical operation.");
    }
    const _0x5c5207 = _0x146e80 => {
      return new Function("return " + _0x146e80)();
    };
    try {
      const _0x183189 = _0x5c5207(_0x50d1aa);
      if (_0x50d1aa.includes("/") && _0x50d1aa.split("/").some(_0x3e2b24 => _0x3e2b24 === "0")) {
        return await _0x2e64e8.send("*Cannot divide by zero.*");
      }
      if (_0x50d1aa.split(/[-+%*/]/).length <= 2) {
        const [_0x5319ae, _0x4bd454, _0x51a438] = _0x50d1aa.match(/\d+|[-+%*/]/g);
        return _0x2e64e8.send(_0x5319ae + " " + _0x4bd454 + " " + _0x51a438 + " = " + _0x183189);
      } else {
        return await _0x2e64e8.send("Result: " + _0x183189);
      }
    } catch (_0x107620) {
      return await _0x2e64e8.error(_0x107620);
    }
  }); //---------------------------------------------------------------------------
  smd({
    name: "wa",
    info: "Makes wa me of quoted or mentioned user.",
    type: "user",
    filename: __filename
  }, async (Suhail, msg, text) => {
    if (!msg.quoted && !msg.mentionedJid) {
      return await msg.reply(`*Please Reply Or Mention A User*`);
    }
    let users = msg.mentionedJid ? msg.mentionedJid[0].split("@")[0] : msg.quoted ? msg.quoted.sender.split("@")[0] : text.replace("@")[0];
    return await msg.reply(`https://wa.me/${users}`);
  });
  //---------------------------------------------------------------------------
  smd({
    name: "mee",
    info: "Makes wa me for user.",
    type: "user",
    filename: __filename
  }, async (Suhail, msg, text) => {
    let user = msg.sender.split("@")[0];
    return await msg.reply(`https://wa.me/${user}`);
  });
  //---------------------------------------------------------------------------
  smd({
    name: "pick",
    info: "Pics random user from Group",
    type: "group",
    filename: __filename
  }, async (Suhail, msg, match) => {
    if (!match) {
      return msg.reply("*Which type of User you want?*");
    }
    const groupMetadata = msg.isGroup ? await Suhail.bot.groupMetadata(msg.chat).catch(e => {}) : "";
    const participants = msg.isGroup ? await groupMetadata.participants : "";
    let member = participants.map(u => u.id);
    let me = msg.sender;
    let pick = member[Math.floor(Math.random() * member.length)];
    Suhail.bot.sendMessage(msg.chat, {
      text: `The most ${match} around us is *@${pick.split("@")[0]}*`,
      mentions: [pick]
    }, {
      quoted: msg
    });
  });
  //---------------------------------------------------------------------------
  //---------------------------------------------------------------------------
  smd({
    name: "npm",
    info: "download mp4 from url.",
    type: "search",
    use: "<package name>",
    filename: __filename
  }, async (Suhail, msg, text) => {
    if (!text) {
      return msg.reply("Please give me package name.📦");
    }
    axios.get(`https://api.npms.io/v2/search?q=${text}`).then(({
      data
    }) => {
      let txt = data.results.map(({
        package: pkg
      }) => `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`).join("\n\n");
      msg.reply(txt);
    }).catch(e => console.log(e));
  });
  //---------------------------------------------------------------------------
  smd({
    name: "fliptext",
    info: "Flips given text.",
    type: "misc",
    use: "<query>",
    filename: __filename
  }, async (Suhail, msg, text) => {
    if (!text) {
      return msg.reply(`Example : ${prefix}fliptext Back in black`);
    }
    flipe = text.split("").reverse().join("");
    msg.reply(`\`\`\`「  Text Flipper Tool  」\`\`\`\n*IGiven text :*\n${text}\n*Fliped text :*\n${flipe}`);
  });
  //---------------------------------------------------------------------------
  smd({
    name: "downmp4",
    alias: ["mp4down", "mp4fromurl"],
    info: "download mp4 from url.",
    type: "downloader",
    use: "<url>",
    filename: __filename
  }, async (Suhail, msg, text) => {
    if (!text) {
      return msg.reply(`_give me Video Link ?_`);
    }
    Suhail.bot.sendMessage(msg.chat, {
      video: {
        url: text.split(" ")[0]
      },
      caption: "*HERE WE GO*",
      contextInfo: {
        externalAdReply: {
          title: tlang().title,
          body: `${msg.pushName}`,
          mediaType: 2,
          mediaUrl: ``,
          sourceUrl: ``
        }
      }
    }, {
      quoted: msg
    });
  });
  //---------------------------------------------------------------------------
  smd({
    name: "events",
    info: "activates and deactivates events.\nuse buttons to toggle.",
    type: "misc",
    filename: __filename
  }, async (Suhail, msg, text, {
    isCreator
  }) => {
    let checkgroup = await sck.findOne({
      id: msg.chat
    });
    if (!msg.isGroup) {
      return msg.reply(tlang().group);
    }
    const groupAdmins = await getAdmin(Suhail.bot, msg);
    //const botNumber = await Suhail.bot.decodeJid(Suhail.bot.user.id)
    //const isBotAdmins = msg.isGroup ? groupAdmins.includes(botNumber) : false;
    const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
    if (isCreator) {} else if (!isAdmins) {
      return msg.reply(tlang().admin);
    }
    //if (!isBotAdmins) return msg.reply(tlang().botadmin)
  
    if (checkgroup.events == "true") {
      return msg.reply(`*Events* is enabled in this Chat \n For deActive Welcome Msg *type ${prefix}deact events*`);
    } else {
      return msg.reply(`*Events* is Disabled in this Chat \n For Active Welcome Msg *type ${prefix}act events*`);
    }
  });
  
  //---------------------------------------------------------------------------
  
  smd({
    name: "lydea",
    alias: ["chatbot"],
    info: "activates and deactivates chatbot.\nuse buttons to toggle.",
    type: "misc",
    filename: __filename
  }, async (Suhail, msg, text, {
    isCreator
  }) => {
    if (!isCreator) {
      return msg.reply(tlang().owner);
    }
    const {
      chatbot
    } = require("../lib/");
    let chatbott = (await chatbot.findOne({
      id: "chatbot"
    })) || (await new chatbot({
      id: "chatbot",
      worktype: "true"
    }).save());
    switch (text.split(" ")[0]) {
      case "on":
        {
          if (chatbott.worktype == "true") {
            return msg.reply("*Lydea was already enabled.*");
          }
          await chatbot.updateOne({
            id: "chatbot"
          }, {
            worktype: "true"
          });
          return await msg.reply("*Lydea Activated successfully.*");
        }
        break;
      case "off":
        {
          if (chatbott.worktype == "false") {
            return msg.reply("*Lydea was already disabled.*");
          }
          await chatbot.updateOne({
            id: "chatbot"
          }, {
            worktype: "false"
          });
          return await msg.reply("*Lydea deactivated successfully.*");
        }
        break;
      default:
        {
          if (chatbott.worktype == "false") {
            return await msg.reply(`*Lydea Chatbot Status : False* \n*Lydea Chatbot Disabled Yet, _To Enable Type : .lydea on_*`);
          } else {
            return await msg.reply("*Lydea Chatbot Status : True* \n*Lydea Chatbot Enabled Yet, _To Disable Type : .lydea off_*");
          }
          /*
                                 let buttons = [{  buttonId: `${prefix}chatbot on`,   buttonText: {   displayText: "Turn On" },  type: 1, },
                                               {   buttonId: `${prefix}chatbot off`,  buttonText: { displayText: "Turn Off" },   type: 1, }];
                                                
                                 await Suhail.bot.sendButtonText(msg.chat, buttons, `Lydea Status: ${chatbott.worktype} `, Config.botname, msg);
                             */
        }
    }
  });
  //---------------------------------------------------------------------------
  smd({
    name: "ebinary",
    info: "encode binary",
    type: "misc",
    use: "<query>",
    filename: __filename
  }, async (Suhail, msg, text, {
    isCreator
  }) => {
    try {
      if (!text) {
        return msg.reply(`Send text to be encoded.`);
      }
      let textt = text || msg.quoted.text;
      let eb = await eBinary(textt);
      msg.reply(eb);
    } catch (e) {
      console.log(e);
    }
  });
  //---------------------------------------------------------------------------
  smd({
    name: "dbinary",
    info: "decode binary",
    type: "misc",
    use: "<query>",
    filename: __filename
  }, async (Suhail, msg, text, {
    isCreator
  }) => {
    try {
      if (!text) {
        return msg.reply(`Send text to be decoded.`);
      }
      let eb = await dBinary(text);
      msg.reply(eb);
    } catch (e) {
      console.log(e);
    }
  });
  
  //-----------------------------------------------------------------------------------
  
  if (Config.WORKTYPE != "private") {
    smd({
      name: "bot",
      info: "activates and deactivates bot.\nuse buttons to toggle.",
      type: "misc",
      filename: __filename
    }, async (Suhail, msg, text, {
      isCreator
    }) => {
      if (!msg.isGroup) {
        return msg.reply(tlang().group);
      }
      if (!isCreator) {
        return msg.reply(tlang().owner);
      }
      switch (text.split(" ")[0]) {
        case "on":
          {
            let checkgroup = await sck.findOne({
              id: msg.chat
            });
            if (!checkgroup) {
              await new sck({
                id: msg.chat,
                botenable: "true"
              }).save();
              return msg.reply(`Successfully Enabled *${tlang().title}*`);
            } else {
              if (checkgroup.botenable == "true") {
                return msg.reply("*Bot* was already enabled");
              }
              await sck.updateOne({
                id: msg.chat
              }, {
                botenable: "true"
              });
              return msg.reply(`Successfully Enabled *${tlang().title}*`);
            }
          }
          break;
        case "off":
          {
            {
              let checkgroup = await sck.findOne({
                id: msg.chat
              });
              if (!checkgroup) {
                await new sck({
                  id: msg.chat,
                  botenable: "false"
                }).save();
                return msg.reply(`Successfully disabled *${tlang().title}*`);
              } else {
                if (checkgroup.botenable == "false") {
                  return msg.reply("*Bot* was already disabled");
                }
                await sck.updateOne({
                  id: msg.chat
                }, {
                  botenable: "false"
                });
                return msg.reply(`Successfully disabled *${tlang().title}*`);
              }
            }
          }
          break;
        default:
          {
            let checkgroup = await sck.findOne({
              id: msg.chat
            });
            let buttons = [{
              buttonId: `${prefix}bot on`,
              buttonText: {
                displayText: "Turn On"
              },
              type: 1
            }, {
              buttonId: `${prefix}bot off`,
              buttonText: {
                displayText: "Turn Off"
              },
              type: 1
            }];
            await Suhail.bot.sendButtonText(msg.chat, buttons, `Bot Status in Group: ${checkgroup.botenable}`, Suhail.bot.user.name, msg);
          }
      }
    });
  } // if Statements
  //---------------------------------------------------------------------------
  /*
  smd({
              name: "antispam",
              info: "Kick Spamers From Group.\nuse buttons to toggle.",
              type: "group",
              filename: __filename
          },
          async(Suhail.bot, msg, text , {isCreator}) => {
              if (!msg.isGroup) return msg.reply(tlang().group);
            let check = text ? text : '';
              let checkgroup = await sck.findOne({ id: msg.chat }) || await new sck({id : msg.chat , antispam : 'true'  }) .save();
              const groupAdmins = await getAdmin(Suhail.bot, msg)
              const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
              if (!isAdmins && !isCreator) return msg.reply(tlang().admin)     
              if (check.startsWith("on") || check.startsWith("enable") || check.startsWith("act"))
              { 
                  try 
                  {
                   await sck.updateOne({ id: msg.chat }, { antispam: "true" })
                    return await msg.reply("*_Antispam Enabled Successfuly in Group_*")
                  } catch (error) {   return await msg.reply("*_There's an Error, Antispam Not Enable in Group_*")    }
              }
              else if (check.startsWith("off") || check.startsWith("disable") || check.startsWith("deact") ) 
              {
                  try 
                  {
                     await sck.updateOne({ id: msg.chat }, { antispam: "false" })
                     return await msg.reply("*_Antispam Disabled Successfuly in Group_*")
                  } catch (error) {   return await msg.reply("*_There's an Error, Antispam Not Disable in Group_*")    }
              }      
  if (checkgroup.antispam == "true") return msg.reply(`Antispam : kick Users Who Spamming in Group\n\nAntispam is enabled in this Group \n *_For Disabling : ${prefix}antispam off_*`);
  else return msg.reply(`Antispam : kick Users Who Spamming in Groupn\n\nAntispam is Disabled in this Group \n *_For Enablling Antispam : ${prefix}antispam on_*`);
          
  })
  */
  //---------------------------------------------------------------------------
  smd({
    name: "antilink",
    info: "activates and deactivates antilink.\nuse buttons to toggle.",
    type: "group",
    filename: __filename
  }, async (Suhail, msg, text, {
    isCreator
  }) => {
    if (!msg.isGroup) {
      return msg.reply(tlang().group);
    }
    const groupAdmins = await getAdmin(Suhail.bot, msg);
    const isAdmins = msg.isGroup ? groupAdmins.includes(msg.sender) : false;
    if (!isAdmins && !isCreator) {
      return msg.reply(tlang().admin);
    }
    let checkinfo = (await sck.findOne({
      id: msg.chat
    })) || (await new sck({
      id: msg.chat
    }).save());
    let textt = text ? text.toLowerCase().trim() : false;
    let action = textt ? textt.split(" ")[0] : false;
    if (!action) {
      return await msg.send("*_Antilink " + (checkinfo.antilink === "false" ? "Disabled" : "Enabled") + " in this Group!_* \n " + (checkinfo.antilink === "false" ? "" : "*Current Mode:* _" + checkinfo.antilink + "_") + "\n\n*Antilink Modes:*\n  .antilink kick (Delete Links & Kick Senders)\n  .antilink delete (Delete Links Only)\n  .antilink off (Disable Antilink in chat)\n\n\n" + Config.caption);
    } else if (action.startsWith("off") || action.startsWith("deact") || action.startsWith("disable")) {
      await sck.updateOne({
        id: msg.chat
      }, {
        antilink: "false"
      });
      return await msg.send("*_Anti_Link Disabled Succesfully!_*");
    } else if (action.startsWith("kick")) {
      await sck.updateOne({
        id: msg.chat
      }, {
        antilink: "kick"
      });
      return await msg.send("*_Anti_Link Succesfully set to kick link senders!_*");
    } else if (action.startsWith("delete")) {
      await sck.updateOne({
        id: msg.chat
      }, {
        antilink: "delete"
      });
      return await msg.send("*_Anti_Link Succesfully set to delete links from chat!_*");
    } else {
      return await msg.send("*_Uhh Dear, Please Provide Valid Instruction_*\n*Eg: _" + prefix + "antilink kick/delete/off_*");
    }
  });
  //---------------------------------------------------------------------------
