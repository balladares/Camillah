app.directive('wobbleOnChange', function($timeout) {
  return function(scope, element, attr) {
    scope.$watch(attr.wobbleOnChange, function(nv,ov) {
      if (nv!=ov) {
        element.addClass('animated wobble');
        $timeout(function() {
          element.removeClass('animated wobble');
        }, 1000); // Could be enhanced to take duration as a parameter
      }
    });
  };
});