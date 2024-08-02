const commands = []

function epX(commandDetails, commandFunction) {
 const cmd = { ...commandDetails, function: commandFunction }
 if (cmd.dontAddCommandList === undefined) {
  cmd.dontAddCommandList = false
 }
 if (!cmd.info) {
  cmd.info = ''
 }
 if (cmd.fromMe === undefined) {
  cmd.fromMe = false
 }
 if (!cmd.type) {
  cmd.type = 'misc'
 }
 if (!cmd.filename) {
  cmd.filename = 'Not Provided'
 }
 commands.push(cmd)
 return cmd
}
const Module = epX
const bot = Module
module.exports = {
 epX,
 Module,
 bot,
 commands,
}
