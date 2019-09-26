function mouse(name){
	this.name = name;
}
mouse.prototype.die = function() {
	// body...
	this.dead = true;
};

module.export = mouse;