/**
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                ＷＨＡＴＳＡＰＰ ＢＯＴ－ＭＤ ＢＥＴＡ                                   //
//                                                                                                      // 
//                                         Ｖ：１．０．１                                                // 
//                                                                                                      // 
//            ███████╗██╗   ██╗██╗  ██╗ █████╗ ██╗██╗         ███╗   ███╗██████╗                        //
//            ██╔════╝██║   ██║██║  ██║██╔══██╗██║██║         ████╗ ████║██╔══██╗                       //
//            ███████╗██║   ██║███████║███████║██║██║         ██╔████╔██║██║  ██║                       //
//            ╚════██║██║   ██║██╔══██║██╔══██║██║██║         ██║╚██╔╝██║██║  ██║                       //
//            ███████║╚██████╔╝██║  ██║██║  ██║██║███████╗    ██║ ╚═╝ ██║██████╔╝                       //
//            ╚══════╝ ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝╚═╝╚══════╝    ╚═╝     ╚═╝╚═════╝                        //
//                                                                                                      //
//                                                                                                      //
//                                                                                                      //
//══════════════════════════════════════════════════════════════════════════════════════════════════════//

CURRENTLY RUNNING ON BETA VERSION!!
*
   * @project_name : Suhail-Md
   * @author : Suhail Tech Info
   * @youtube : https://www.youtube.com/c/@SuhailTechInfo0
   * @description : Suhail-Md ,A Multi-functional whatsapp user bot.
   * @version 1.0.8
*
   * Licensed under the  GPL-3.0 License;
* 
   * Created By Suhail Tech Info.
   * © 2023 Suhail-Md.
* 
   * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
   * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
   * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
   * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
   * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
   * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
   * SOFTWARE.

 **/


const { smd,sendAnimeReaction,} = require('../lib')
//-----------------------------------------------------------------------
smd({name: "poke", type: "reaction", use: '<quote|reply|tag>',   info: "send Anime poke reaction." },async(Suhail, msg ,text, {cmdName}) => { await sendAnimeReaction(msg,'poke', 'poked to' , 'poked to everyone.' ) })
//-----------------------------------------------------------------------
smd({name: "hug",  type: "reaction", use: '<quote|reply|tag>',   info: "send Anime hug reaction."  },async(Suhail, msg ,text, {cmdName}) => { await sendAnimeReaction(msg,cmdName, 'hug to' , 'hug with everyone.' ) })
//-----------------------------------------------------------------------
smd({name: "hold", type: "reaction", use: '<quote|reply|tag>',   info: "send Anime hand hold reaction."},async(Suhail, msg) => { await sendAnimeReaction(msg,'handhold', 'hold hand of' , 'holded hand of everyone' ) })
//-----------------------------------------------------------------------
smd({name: "hifi", type: "reaction", use: '<quote|reply|tag>',   info: "send Anime hifi reaction."  },async(Suhail, msg) => { await sendAnimeReaction(msg,'highfive', 'highfive with' , 'highfive with everyone.' ) })
    //---------------------------------------------------------------------------
smd({name: "bite", type: "reaction", use: '<quote|reply|tag>',   info: "send Anime bite reaction."  },async(Suhail, msg ,text, {cmdName}) => { await sendAnimeReaction(msg,cmdName, 'bitten to' , 'bitten to everyone.' ) })
    //---------------------------------------------------------------------------
smd({name: "blush",type: "reaction", use: '<quote|reply|tag>',   info: "send Anime blush reaction." },async(Suhail, msg ,text,  {cmdName}) => {await sendAnimeReaction(msg,cmdName, 'blushed to' , 'blushed to everyone.' )})
    //---------------------------------------------------------------------------
smd({name: "punch",type: "reaction", use: '<quote|reply|tag>',   info: "send Anime punch reaction." },async(Suhail, msg ) => {  await sendAnimeReaction(msg,'kick', 'punched to' , 'punched everyone.' ) })
    //---------------------------------------------------------------------------
smd({name: "pat",  type: "reaction", use: '<quote|reply|tag>',   info: "send Anime pated reaction." },async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'patted with' , 'patted with everyone.' ) })
    //---------------------------------------------------------------------------
smd({name: "kiss", type: "reaction", use: '<quote|reply|tag>',   info: "send Anime kiss reaction."  },async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'kissed with' , 'kissed with everyone.' ) })
    //---------------------------------------------------------------------------
smd({name: "kill", type: "reaction", use: '<quote|reply|tag>',   info: "send Anime kill reaction."  },async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'kill ' , 'kill everyone over here' ) })
    //---------------------------------------------------------------------------
smd({name: "happy", type: "reaction", use: '<quote|reply|tag>',   info: "send Anime happy reaction."},async(Suhail, msg) => {  await sendAnimeReaction(msg,'dance', 'feel happy with' , 'feel happy with everyone') })
    //---------------------------------------------------------------------------
smd({name: "dance", type: "reaction", use: '<quote|reply|tag>',   info: "send Anime dance reaction."},async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'dance with' , 'dance with everyone over here' ) })
    //---------------------------------------------------------------------------
smd({name: "yeet", type: "reaction", use: '<quote|reply|tag>',   info: "send Anime yeet reaction."  },async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'yeeted to' , 'yeeted with everyone' ) })
    //---------------------------------------------------------------------------
smd({name: "wink", type: "reaction", use: '<quote|reply|tag>',   info: "send Anime wink reaction."  },async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'winked with' , 'winked with everyone' ) })
    //---------------------------------------------------------------------------
smd({name: "slap", type: "reaction", use: '<quote|reply|tag>',   info: "send Anime slap reaction."  },async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'slap to' , 'slap to everyone' ) })
    //---------------------------------------------------------------------------
smd({name: "bonk", type: "reaction", use: '<quote|reply|tag>',   info: "send Anime bonk reaction."  },async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'bonked to' , 'bonked to everyone' ) })
    //---------------------------------------------------------------------------
smd({name: "bully", type: "reaction", use: '<quote|reply|tag>',   info: "send Anime bully reaction."},async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'bullied to' , 'bullied to everyone' ) })
    //---------------------------------------------------------------------------
smd({name: "cringe",type: "reaction", use: '<quote|reply|tag>',   info: "send Anime cringe reaction."},async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'cringed to' , 'cringed to everyone' ) })
    //---------------------------------------------------------------------------
smd({name: "cuddle",type: "reaction", use: '<quote|reply|tag>',   info: "send Anime cuddle reaction."},async(Suhail, msg ,text , {cmdName}) => {  await sendAnimeReaction(msg,cmdName, 'cuddled with' , 'cuddled with everyone' ) })
