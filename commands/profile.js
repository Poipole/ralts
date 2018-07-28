module.exports = {
	name: 'profile',
	description: 'Get the profile of the tagged user(s), or your own profile.',
	aliases: ['profile', 'userinfo'],
	execute(message) {
		if (!message.mentions.users.size) {
			return message.channel.send(`Username: **${message.author.tag}**\nID: **${message.author.id}**\nAccount Created: **${message.author.createdAt}**\n`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s profile: **${user.tag}**\nID: **${user.id}**\nAccount Created: **${user.createdAt}**\n`;
		});

		message.channel.send(avatarList);
	},
};