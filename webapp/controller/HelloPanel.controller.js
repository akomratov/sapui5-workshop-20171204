sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/m/Dialog",
	"sap/m/FormattedText",
	"sap/m/Button"
	], function(Controller, MessageToast, Dialog, FormattedText, Button) {
		"use strict";
		return Controller.extend("workshop.wt.controller.HelloPanel", {
			
			oDialog: null,
			
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
			},
			onShowDialog: function() {
				if(!this.oDialog) {
					this.oDialog = new Dialog({
						title: "{i18n>dialogTitle}",
						content: new FormattedText({
							htmlText: "{i18n>dialogText}"
						}),
						beginButton: new Button({
							text: '{i18n>beginClose}',
							press: function () {
								this.oDialog.close();
							}.bind(this)
						})
					});
					this.oDialog.addContent(new FormattedText({
							htmlText: "{i18n>dialogText}"
						}));
					this.oDialog.setEndButton(new Button({
							text: '{i18n>endClose}',
							press: function () {
								this.oDialog.close();
							}.bind(this)
						}));
					this.oDialog.addStyleClass("sapUiSmallMargin");
					this.oDialog.addStyleClass("sapThemeHighlight-asColor");
	
					//to get access to the global model
					this.getView().addDependent(this.oDialog);
				}
	
				this.oDialog.open();
			}
		});
});