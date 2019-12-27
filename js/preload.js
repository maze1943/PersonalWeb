(function () {
    var cssFiles = [
        'css/all.css',
        'lib/plugins/ngDialog/ngDialog.min.css',
        'lib/plugins/ngDialog/ngDialog-theme-plain.min.css'
    ];
    var jsFiles = [
        'lib/angular.min.js',
        'lib/angular-route.js',
        'lib/plugins/ngDialog/ngDialog.min.js',
        'js/lazyload.js',
        'js/config.js',
        'js/service.js',
        'js/main.js',
        'js/directive.js',
        'js/app.js'
    ];

    function cssLoader() {
        var headElement = document.getElementsByTagName('head')[0];

        function appendCssLink(path) {
            var csslink = document.createElement('link');
            csslink.rel = 'stylesheet';
            csslink.type = 'text/css';
            csslink.href = path;
            headElement.appendChild(csslink);
        }
        for (var i = 0; i < cssFiles.length; i++) {
            appendCssLink(cssFiles[i]);
        }

    }

    function jsLoader() {
        var headElement = document.getElementsByTagName('head')[0];

        function appendScript(path) {
            var jsscript = document.createElement('script');
            jsscript.type = 'text/javascript';
            jsscript.async = false;
            jsscript.src = path;
            headElement.appendChild(jsscript);
        }
        for(var i = 0; i < jsFiles.length; i++){
            appendScript(jsFiles[i]);
        }
    }
    cssLoader(cssFiles);
    jsLoader(jsFiles);
})();