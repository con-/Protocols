var StatsView = Backbone.View.extend({
	el: "#content",
	protocols: null,
	lastProtocol: null,

	initialize: function(protocols) {
		this.protocols = protocols;
	},

	render: function() {
		this.$el.html("<div> timeDiff value valueDiff </div>");
		this.protocols.each(this.addProtocolView, this);
	},

	addProtocolView: function(protocol) {
		var lastProtocol = this.lastProtocol;
		if (lastProtocol != null) {
			var timeDiff = parseInt(protocol.get("date")) - parseInt(lastProtocol.get("date"));
			timeDiff = new DateMaker(timeDiff).diffString();
			var valueDiff = parseFloat(protocol.get("value")) - parseFloat(lastProtocol.get("value"));
			this.$el.append("<div>" + timeDiff + " " + protocol.get("value") + " (" + valueDiff + ")</div>");
		}
		else {
			this.$el.append("<div>" + protocol.dateString() + " " + protocol.get("value") + "</div>");
		}
		this.lastProtocol = protocol;
	},
});