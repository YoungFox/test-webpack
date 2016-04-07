var config = require("./config.js");
config.a = 'other';

module.exports = function (){
	document.write('other');
};
