module.exports.templateTags = [{
    name: 'randomCardNo',
    displayName: 'Random Bank Card',
    description: 'Generate a random bank card',
    args: [
    ],
    async run () {
		randomCardNo = "622325";
        
		for (var j = 0; j < 13; j++) {
			randomCardNo = randomCardNo + Math.floor(Math.random() * 10);
		}
        return randomCardNo;
    }
}];
