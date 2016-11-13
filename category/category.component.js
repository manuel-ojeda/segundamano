(function() {
	'use strict';

	var category = {
		templateUrl: "./components/category/category.component.html",
		controller: categoryCtrl
	};

	angular
		.module("segundamano")
		.component("categorySegundamano", category);

	categoryCtrl.$inject = ["apiCategories"];
	function categoryCtrl(apiCategories) {
		var c = this;
		c.categories = apiCategories.query();
	}
})();