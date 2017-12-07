sap.ui.define([
	"sap/ui/base/Object"
], function (UI5Object) {
	"use strict";
	return UI5Object.extend("workshop.wt.controller.HelloDialog", {

		constructor: function(oView) {
			this._oView = oView;	
		},
		open: function() {
			var oView = this._oView;
			var oDialog = oView.byId("helloDialog");
			
			// create dialog lazily
			if (!oDialog) {
				console.log("HelloDialog.js: oDialog is not initialized");
				var oFragmentController = {
					onCloseHelloDialog : function () {
						oDialog.close();
					}
				};
				// create dialog via fragment factory
				oDialog = sap.ui.xmlfragment(oView.getId(), "workshop.wt.view.HelloDialog", oFragmentController);
				// connect dialog to the root view of this component (models, lifecycle)
				oView.addDependent(oDialog);
			}
			oDialog.open();
		}
	});

});