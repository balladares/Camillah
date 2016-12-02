app.directive('fadeupOnChange', function($timeout) {
  return function(scope, element, attr) {
    scope.$watch(attr.fadeupOnChange, function(nv,ov) {
      if (nv!=ov) {
        element.addClass('animated jello');
        $timeout(function() {
          element.removeClass('animated jello');
        }, 1000); // Could be enhanced to take duration as a parameter
      }
    });
  };
});