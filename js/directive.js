app.directive("timeClock", function ($timeout, dateFilter) {
    return function (scope, element, attrs) {
        var format,
            thistimeout;
        scope.$watch(attrs.timeClock, function (value) {
            format = value;
            updateFormat(value);
        });

        function updateFormat() {
            element.text(dateFilter(new Date(), format));
        }

        function updateTime() {
            thistimeout = $timeout(function () {
                updateFormat();
                updateTime();
            }, 1000);

        }
        element.bind("$destroy", function () {
            $timeout.cancel(thistimeout);
        });
        updateTime();
    };
});
app.directive('viewController', function () {
    return {
        restrict: 'EA',
        terminal: true,
        scope: {
            viewname: '='
        },
        link: function (scope, element, attr) {
            if (attr.ngSrc) {
                // var s = document.createElement('script');
                // s.src = attr.ngSrc;
                // document.body.appendChild(s);
                LazyLoad.js(attr.ngSrc, function () {
                    alert(attr.ngSrc + ' has been loaded');
                });
            }
        }
    };
});
app.directive('loadFile', function(){
    return {
        restrict :'EA',
        
    }
})