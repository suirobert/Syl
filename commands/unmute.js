require('dotenv').config()
module.exports = {
    name: 'unmute',
    description: "Quitar silencio usuario",
    execute(message, args){
        const usuario = "<@" + message.author.id + ">"
        if(message.member.roles.cache.has(process.env.ADMIN) || message.member.roles.cache.has(orocess.env.OWNER)){
            const target = message.mentions.users.first()
            if(target){
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Silenciado')

                let memberTarget = message.guild.members.cache.get(target.id)
                memberTarget.roles.remove(muteRole.id)
                message.channel.send(`${target} puede volver a interactuar.`)

            }else{
                message.channel.send("No puedes quitar el silencio a ese usuario.")
            }
        } else {
            message.channel.send(`${usuario} No tienes permisos para usar este comando.`)
        }
    }
}