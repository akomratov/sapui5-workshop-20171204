sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"workshop/wt/model/formatter",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
	], function(Controller, JSONModel, discountFormatter, Filter, FilterOperator) {
	
	"use strict";
	
	return Controller.extend("workshop.wt.controller.InvoiceList", {
		
		formatter: discountFormatter,
		
		onInit: function() {
			var oViewModel = new JSONModel({
				currency: "RUB"
			});
			this.getView().setModel(oViewModel, "view");
		},
		
		onFilterInvoices: function(oEvent) {
			
			// Filter array
			var aFilters = [];
			var sQuery = oEvent.getParameter("query");
			if(sQuery.length > 0) {
				
				var oFilter = new Filter({
					filters: [
						new Filter({
							path: 'ProductName',
							operator: FilterOperator.Contains,
							value1: sQuery
						}),
						new Filter({
							path: 'Salesperson',
							operator: FilterOperator.Contains,
							value1: sQuery
						})
					],
					and: false
				});

				///// ALTERNATIVE SYNTAX for Filter				
				// var oFilter = new Filter({
				// 	filters: [
				// 		new Filter('ProductName', FilterOperator.Contains, sQuery),
				// 		new Filter('Salesperson', FilterOperator.Contains, sQuery)
				// 	],
				// 	and: false
				// });
				
				aFilters.push(oFilter);
				
				///// OLD STYLE
				//var oFilter = new Filter("ProductName", FilterOperator.Contains, sQuery);
				//aFilters.push(oFilter);
			}
			// Filter binding to list
			var oList = this.getView().byId("invoiceList");
			var binding = oList.getBinding("items");
			binding.filter(aFilters);
		}
	});
});