(function (window) {
    app.factory("calculateService", function () {
        var calculate = {};
        calculate.add = function (a, b) {
            return a + b;
        };
        calculate.subtract = function (a, b) {
            return a - b;
        };
        return calculate;
    });
})(window);