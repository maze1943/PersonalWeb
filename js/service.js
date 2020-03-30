(function (window) {
    app.factory("calculateService", () => {
        var calculate = {};
        calculate.add = function (a, b) {
            return a + b;
        };
        calculate.subtract = function (a, b) {
            return a - b;
        };
        return calculate;
    });

    app.factory("lazyLoadService", () =>{
        return function(jsFiles){
           return new Promise((resolve, reject) =>{
                LazyLoad.js(jsFiles,function(){
                    resolve();
                })
            });
        }
    });
})(window);