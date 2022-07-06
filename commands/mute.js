require('dotenv').config()
const ms = require ('ms')
module.exports = {
    name: 'mute',
    description: "Silenciar usuario",
    execute(message, args){
        const usuario = "<@" + message.author.id + ">"
        
        if(message.member.roles.cache.has(process.env.ADMIN) || message.member.roles.cache.has(orocess.env.OWNER)){
            const target = message.mentions.users.first()
            if(target){
                let muteRole = message.guild.roles.cache.find(role => role.name === 'Silenciado')

                let memberTarget = message.guild.members.cache.get(target.id)

                if(!args[1]){
                    memberTarget.roles.add(muteRole.id)
                    message.channel.send(`<@${memberTarget.user.id}> fue silenciado.`)
                    return
                }else if(!ms(args[1])){
                    message.channel.send("Escribe el tiempo.")
                    return
                }
                
                memberTarget.roles.add(muteRole.id);
                message.channel.send(`<@${memberTarget.user.id}> fue silenciado por ${ms(ms(args[1]))}.`)

                setTimeout(function(){
                    memberTarget.roles.remove(muteRole.id)
                    return
                }), ms(args[1])

            }else{
                message.channel.send("No puedes silenciar a ese usuario.")
            }
        } else {
            message.channel.send(`${usuario} No tienes permisos para usar este comando.`)
        }
    }
}