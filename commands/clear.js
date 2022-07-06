require('dotenv').config()
module.exports = {
    name: 'clear',
    description: 'borra mensajes',
    async execute(message, args){
        const usuario = "<@" + message.author.id + ">"
        if(message.member.roles.cache.has(process.env.ADMIN) || message.member.roles.cache.has(orocess.env.OWNER)){
            if(!args[0]) return message.reply("Ingresa el número de mensajes que deseas borrar.")
            if(isNaN(args[0])) return message.reply("Por favor ingresa un número real")

            if(args[0] > 99) return message.reply("No puedes borrar más de 100 mensajes.")
            if(args[0] < 1) return message.reply("Debes borrar al menos un mensaje.")
            
            await message.channel.messages.fetch({limit: ++args[0]}).then(messages =>{
                message.channel.bulkDelete(messages)
            })
        } else {
            message.channel.send(`${usuario} No tienes permisos para usar este comando.`)
        }
    }
}