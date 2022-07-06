require('dotenv').config()
module.exports = {
    name: 'ban',
    description: "Dar ban",
    execute(message, args){
        const usuario = "<@" + message.author.id + ">"
        if(message.member.roles.cache.has(process.env.ADMIN) || message.member.roles.cache.has(orocess.env.OWNER)){
            const member = message.mentions.users.first()
            if(member){
                const memberTarget = messages.guild.members.cache.get(member.id)
                memberTarget.ban()
                message.channel.send(`Has baneado del servidor a ${member.id}`)
            }else{
                message.channel.send("No puedes banear a ese usuario.")
            }
        } else {
            message.channel.send(`${usuario} No tienes permisos para usar este comando.`)
        }
    }
}