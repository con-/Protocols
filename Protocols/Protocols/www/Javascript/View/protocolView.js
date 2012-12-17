var ProtocolView = Backbone.View.extend({
	protocol: null,

	events: {
		"click" : "clear",
	},

	render: function() {
		var protocol = this.protocol;
		var dateString = protocol.dateString();
		this.$el.html("Date: " + dateString + "<br>Value: " + protocol.get("value"));

		this.protocol.on('destroy', this.remove, this);
	},

	clear: function () {
		if (confirm("remove?")) {
			this.protocol.destroy();
		}
	}
});