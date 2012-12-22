var Protocol = Backbone.Model.extend({
	// JS: defaults are shit?
	// defaults: {
	// 	date: 0,
	// 	value: 0,
	// },

	initialize: function() {
		
	},

	dateString: function() {
		return new DateMaker(this.get("date")).string();
	}
});