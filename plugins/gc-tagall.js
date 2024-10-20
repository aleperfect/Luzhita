let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*_𝐌𝐞𝐧𝐬𝐚𝐣𝐞_:* ${pesan}`
  let teks =`♡༺::🐼::𝙍𝙚𝙥𝙤𝙧𝙩𝙚𝙣𝙘𝙚 𝙋𝙖𝙣𝙙𝙞𝙩𝙖𝙨 𝘿𝙤𝙧𝙢𝙞𝙡𝙤𝙣𝙚𝙨::🐼:: ༻♡\n\n🐼 ${oi}\n\n⚽ *𝐄𝐭𝐢𝐪𝐮𝐞𝐭𝐚:*\n`
  for (let mem of participants) {
  teks += `♡ @${mem.id.split('@')[0]}\n`}
  teks += `༻★🐼𝐋𝐮𝐳𝐢𝐭𝐚 𝐁𝐨𝐭🔥`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler
