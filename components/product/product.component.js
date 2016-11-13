(function() {
	'use strict';

	var product = {
		templateUrl: "./components/product/product.component.html",
		controller: productCtrl
	};

	angular
		.module("segundamano")
		.component("productSegundamano", product);

	productCtrl.$inject = ["apiProducts"];
	function productCtrl(apiProducts) {
		var p = this;
		p.products = apiProducts.query();
	}
})();