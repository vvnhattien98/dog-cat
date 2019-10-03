var mouse = require('./mouse');

function cat() {
	this.stomach = [];
}

cat.prototype.eat = function(animal) {
	// body...
	if(animal instanceof mouse){
		this.stomach.push(animal);
	}else{
		throw new Error('Cat can only eat mouse');
	}

	
};

module.export = cat;