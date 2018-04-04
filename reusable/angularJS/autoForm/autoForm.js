app.directive('autoForm', function($rootScope) {
	return {
		templateUrl : 'js/directives/templates/autoForm.html',
		restrict : 'A',
		scope : {
			obj : '=',
			property : '='
		},
	}
});