var config = require("./config.js");
config.a = 3;

module.exports = function (){
	config.b = '0000';
	document.write(222);
};
