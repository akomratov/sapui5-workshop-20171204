sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel"
	], function(Controller, MessageToast, JSONModel) {
		"use strict";
		return Controller.extend("workshop.wt.controller.App", {
			onShowHello: function() {
				//alert("Hello Button was pressed");
				MessageToast.show("Hello Button was pressed", { 
					duration: 500, 
					animationDuration: 2000,
					animationTimingFunction: "ease-in-out" });
			},
			onInit: function() {
				var oData = {
					recipient: {
						name: "Agent Smith"
					}
				};
				var oModel = new JSONModel(oData);
				
				this.getView().setModel(oModel);
			}
		});
});