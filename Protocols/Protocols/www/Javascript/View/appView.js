var AppView = Backbone.View.extend({
	el: "#content",
	protocols: null,
	
	events: {
		"click button" : "createProtocol"
	},

	initialize: function(protocols) {
		this.protocols = protocols;
	},

	render: function() {
		this.$el.html("<input id = 'value'></input> <button>create</button>");
		this.protocols.each(this.addProtocolView, this);
	},

	addProtocolView: function(protocol) {
		this.$el.append("<div id = '" + protocol.get("date") + "'></div>");
		var id = "#" + protocol.get("date");
		var protocolView = new ProtocolView({el: id});
		protocolView.protocol = protocol;
		protocolView.render();
	},

	createProtocol: function(event) {
		var value = $("#value").val();
		this.protocols.create({value: value, date: new Date().getTime()});
	}
});