sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	], function(Controller, MessageToast) {
		"use strict";
		return Controller.extend("workshop.wt.controller.App", {
			onShowHello: function() {
				//alert("Hello Button was pressed");
				
				// Read the message from resource bundle
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sName = this.getView().getModel().getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMessage", sName);
				
				MessageToast.show("Hello Button was pressed. " + sMsg, { 
					duration: 500, 
					animationDuration: 2000,
					animationTimingFunction: "ease-in-out" });
			},
			onInit: function() {
			}
		});
});

////////////////////////////////////////////////////////////////////
// BEFORE Component.js

// sap.ui.define([
// 	"sap/ui/core/mvc/Controller",
// 	"sap/m/MessageToast",
// 	"sap/ui/model/json/JSONModel",
// 	"sap/ui/model/resource/ResourceModel"
// 	], function(Controller, MessageToast, JSONModel, ResourceModel) {
// 		"use strict";
// 		return Controller.extend("workshop.wt.controller.App", {
// 			onShowHello: function() {
// 				//alert("Hello Button was pressed");
				
// 				// Read the message from resource bundle
// 				var oBundle = this.getView().getModel("i18n").getResourceBundle();
// 				var sName = this.getView().getModel().getProperty("/recipient/name");
// 				var sMsg = oBundle.getText("helloMessage", sName);
				
// 				MessageToast.show("Hello Button was pressed. " + sMsg, { 
// 					duration: 500, 
// 					animationDuration: 2000,
// 					animationTimingFunction: "ease-in-out" });
// 			},
// 			onInit: function() {
// 				var oData = {
// 					recipient: {
// 						name: "Agent Smith"
// 					}
// 				};
// 				var oModel = new JSONModel(oData);
				
// 				this.getView().setModel(oModel);
				
// 				//////////////////////////////////////////////
// 				// Resource Model
// 				var i18nModel = new ResourceModel({
// 					bundleName: "workshop.wt.i18n.i18n"
// 				});
// 				this.getView().setModel(i18nModel, "i18n");
// 			}
// 		});
// });


