var DateMaker = Backbone.Model.extend({
	
	initialize: function(time) {
		this.set("time", time);
	},

	string: function() {
		return new Date(this.get("time")).toString("yyyy-MM-dd hh:mm:ss");
	},

	diffString: function() {
		var diff = this.get("time");
		var millis = diff % 1000;
		diff -= millis;
		diff /= 1000;
		var seconds = diff % 60;
		diff -= seconds;
		diff /= 60;
		var minutes = diff % 60;
		diff -= minutes;
		diff /= 60;
		var hours = diff % 24;
		diff -= hours;
		diff /= 24;
		var days = diff; 

		return days + "d " + hours + ":" + minutes + ":" + seconds;
	}
});