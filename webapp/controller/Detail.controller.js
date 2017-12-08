sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
	], function(Controller, History) {
		
		"use strict";
		
		return Controller.extend("workshop.wt.controller.Detail", {
			onInit: function() {
				var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
				oRouter.getRoute("rDetail").attachPatternMatched(this._onObjectMatched, this);
			},
			_onObjectMatched: function(oEvent) {
				var sInvoicePath = oEvent.getParameter("arguments").invoicePath;
				this.getView().bindElement({
					path : "/" + sInvoicePath,
					model: "invoice" // there is no need in this line if it is a DEFAULT model
				});
				this.getView().byId("OrderDetails").bindElement({
					path : "/Orders(10248)",
					model: "invoice" // there is no need in this line if it is a DEFAULT model
				});
			},
			onPressBack: function() {
				var oHistory = History.getInstance();
				var sPreviousHash = oHistory.getPreviousHash();

				if(sPreviousHash) {
					window.history.go(-1);
				} else {
					var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
					oRouter.navTo("rOverview", {}, true);
				}
			},
			onRatingChange: function(oEvent) {
				jQuery.sap.log.info("onRatingChange()", "", "workshop.wt");
			}
		});
});