(function() {
	'use strict';

	angular
		.module("segundamano")
		.factory("apiCategories", apiCategories)
		.factory("apiProducts", apiProducts);

	apiCategories.$inject= ["$resource"];
	function apiCategories($resource) {
		return $resource("server/categories.json");
	}

	apiProducts.$inject= ["$resource"];
	function apiProducts($resource) {
		return $resource("server/myproducts.json");
	}
})();