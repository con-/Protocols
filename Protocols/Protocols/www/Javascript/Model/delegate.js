var Delegate = Backbone.Model.extend({
	appView: null,
	statsView: null,

	initialize: function() {
		var protocols = new ProtocolCollection();
		protocols.fetch();
		this.appView = new AppView(protocols);
		this.statsView = new StatsView(protocols);

		protocols.on("add", this.protocolAdded, this);

		var router = new Router();
		Backbone.history.start();

		router.on("route:toHome", this.renderAppView, this);
		router.on("route:toStats", this.renderStatsView, this);

		this.appView.render();
	},

	protocolAdded: function() {
		this.appView.render();
	},

	renderAppView: function() {
		this.appView.render();
	},

	renderStatsView: function() {
		this.statsView.render();
	}
});