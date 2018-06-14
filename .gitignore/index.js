const Discord = require('discord.js');
const bot = new Discord.Client();


bot.on('ready', function() {
    console.log("I'm Ready !");
});


});


bot.on('guildMemberAdd', member => {
    member.guild.channels.find("name", "logs").send(` ${member} a reçu le grade [Nouveaux]`)
    var role = member.guild.roles.find('name', '[Nouveaux]');
    member.addRole(role)
    
});



bot.login(process.env.TOKEN)
