sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast"
	], function(Controller, MessageToast) {
		"use strict";
		return Controller.extend("workshop.wt.controller.HelloPanel", {
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