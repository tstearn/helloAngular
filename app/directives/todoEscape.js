angular.module('helloAngularApp').
    directive('todoEscape',
       function () {
           return {
               restrict:   "A",
               link: function (scope, element, attrs, ctrl) {
                   var ESCAPE_KEY = 27;
                   element.bind('keydown', function (event) {
                       if (event.keyCode === ESCAPE_KEY) {
                           scope.$apply(attrs.todoEscape);
                       }
                   });
               }
           };
       }
    );
