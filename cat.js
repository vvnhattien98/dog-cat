function cat() {
	this.stomach = [];
}

cat.prototype.eat = function(mouse) {
	// body...
	this.stomach.push(mouse);

};

module.export = cat;