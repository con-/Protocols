var ProtocolView = Backbone.View.extend({
	protocol: null,

	events: {
		"click" : "clear",
	},

	render: function() {
		console.log("test");
		var protocol = this.protocol;
		console.log(protocol.get("date"));
		var dateString = protocol.dateString();
		console.log("test");
		this.$el.html("Date: " + dateString + "<br>Value: " + protocol.get("value"));
		console.log("test");
		this.protocol.on('destroy', this.remove, this);
		console.log("test");
	},

	clear: function () {
		if (confirm("remove?")) {
			this.protocol.destroy();
		}
	}
});