sap.ui.define([
	], function() {
		"use strict";
		
		return {
			discountText: function(sDiscount) {

				try {
					var iDiscount = parseFloat(sDiscount);
				} catch(error) {
					return "error";
				}
				
				if(iDiscount >= 0.20) {
					return "High discount";
				} else if(iDiscount >= 0.10) {
					return "Medium discount";
				} else if(iDiscount === 0) {
					return "No discount";
				} else {
					return "Low discount";
				}
			},
			
			discountStatus: function(sDiscount) {

				try {
					var iDiscount = parseFloat(sDiscount);
				} catch(err) {
					return "Error";
				}
				
				if(iDiscount >= 0.20) {
					return "Error";
				} else if(iDiscount >= 0.10) {
					return "Warning";
				} else if(iDiscount === 0) {
					return "Success";
				} else {
					return "Success";
				}
				
			},
			
			priceWithDiscount: function(sDiscount, price) {
				try {
					var iDiscount = parseFloat(sDiscount);
				} catch(err) {
					return "Error with Discount, " + sDiscount;
				}
				
				return "Price with discount " + (1 - iDiscount) * price;
			}
		};
});