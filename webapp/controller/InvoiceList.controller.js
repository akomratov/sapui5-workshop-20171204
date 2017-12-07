sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"workshop/wt/model/formatter"
	], function(Controller, JSONModel, discountFormatter) {
	
	"use strict";
	
	return Controller.extend("workshop.wt.controller.InvoiceList", {
		
		formatter: discountFormatter,
		
		onInit: function() {
			var oViewModel = new JSONModel({
				currency: "RUB"
			});
			this.getView().setModel(oViewModel, "view");
		}
	});
});