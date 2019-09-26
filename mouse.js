function mouse(name){
	this.name = name;
	this.dead = false;
}
mouse.prototype.die = function() {
	// body...
	this.dead = true;
};

module.export = mouse;