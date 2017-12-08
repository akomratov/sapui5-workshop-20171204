sap.ui.define([
	"sap/ui/core/Control",
	"sap/m/RatingIndicator",
	"sap/m/Label",
	"sap/m/Button"
	], function(Control, RatingIndicator, Label, Button) {
	
		"use strict";
		return Control.extend("workshop.wt.control.ProductRating", {
			metadata: {
				properties: {
					value: {type: "float", defaultValue: 0}
				},
				aggregations: {
					_rating: { 
						type: "sap.m.RatingIndicator", 
						multiple: false, 
						visibility: "hidden"
					},
					_label: { 
						type: "sap.m.Label", 
						multiple: false, 
						visibility: "hidden"
					},
					_button: { 
						type: "sap.m.Button", 
						multiple: false, 
						visibility: "hidden"
					}
				},
				events: {
					change: {
						parameters: {
							value: {type: "int"}
						}
					}
				}
			},
			init: function() {
				this.setAggregation("_rating", new RatingIndicator({
					value: this.getValue(), // getter method generated automatically
					iconSize: "2rem",
					visualMode: "Half",
					liveChange: this._onRate.bind(this)
				}));
				this.setAggregation("_label", new Label({
					text: 'Please rate this product'
				}));
				this.setAggregation("_button", new Button({
					text: '',
					press: this._onSubmit.bind(this)
				}));
			},
			renderer: function(oRM, oControl) {
				oRM.write("<div");
				oRM.writeControlData(oControl);
				oRM.write(">");
				oRM.renderControl(oControl.getAggregation("_rating"));
				oRM.renderControl(oControl.getAggregation("_label"));
				oRM.renderControl(oControl.getAggregation("_button"));
				oRM.write("</div>");
			},
			_onRate: function() {
				
			},
			_onSubmit: function() {
				this.fireEvent("change", {
					value: this.getValue()
				});
			}
		});
});