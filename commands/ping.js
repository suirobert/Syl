module.exports = {
    name: "ping",
    description: "comando ping",
    execute(message, args){
        message.channel.send("pong!")
    }
}