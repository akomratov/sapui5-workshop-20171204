sap.ui.define([
	"sap/ui/core/mvc/Controller"
	], function(Controller) {
		"use strict";
		return Controller.extend("workshop.wt.controller.App", {
			onShowHello: function() {
				alert("Hello Button was pressed");
			}
		});
});