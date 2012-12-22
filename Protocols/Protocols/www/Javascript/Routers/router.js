var Router = Backbone.Router.extend({
	routes: {
		"" : "toHome",
		"stats" : "toStats",
	},

	toStats: function() {
		$("#navigator").html("<a href = '#'> home </a>");
	},

	toHome: function() {
		$("#navigator").html("<a href = '#stats'> stats </a>");
	},
});