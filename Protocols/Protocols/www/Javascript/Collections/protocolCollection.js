var ProtocolCollection = Backbone.Collection.extend({
	model: Protocol,
	localStorage: new Backbone.LocalStorage("ProtocolCollection"),
});