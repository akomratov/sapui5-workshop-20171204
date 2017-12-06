sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
    ], function(UIComponent, JSONModel, ResourceModel) {
        "use strict";
        
        return UIComponent.extend("workshop.wt.Component", {
        	
        	metadata: {
        		manifest: "json"
        	},
        	///////////////////////////////////////////
        	// Changed to use manifest.json
        	// metadata: {
        	// 	rootView: "workshop.wt.view.App"
        	// },
        	
        	init: function() {
        		// call parent init function
        		UIComponent.prototype.init.apply(this, arguments);
        		
        		var oData = {
					recipient: {
						name: "Agent Smith"
					}
				};
				var oModel = new JSONModel(oData);
				
				// set JSON model globally
				this.setModel(oModel);
				
				//////////////////////////////////////////////////////////
				// Resource model now is instantiated in manifest.json
				// // Resource Model
				// var i18nModel = new ResourceModel({
				// 	bundleName: "workshop.wt.i18n.i18n"
				// });
				// // set Resource Model globally
				// this.setModel(i18nModel, "i18n");

        	}
        });
});