// (() =>{
    const cssFiles = [
        'css/all.css',
        // 'lib/plugins/ngDialog/ngDialog.min.css',
        // 'lib/plugins/ngDialog/ngDialog-theme-plain.min.css'
    ];
    const jsFiles = [
        'lib/angular.min.js',
        'node_modules/angular-ui-router/release/angular-ui-router.min.js',
        // 'lib/plugins/ngDialog/ngDialog.min.js',
        'https://cdn.staticfile.org/axios/0.18.0/axios.min.js',
        'js/lazyload.js',
        'js/router.js',
        'js/service.js',
        'js/main.js',
        'js/directive.js',
        'js/app.js'
    ];

    function cssLoader(cssFiles) {
        const headElement = document.getElementsByTagName('head')[0];

        function appendCssLink(path) {
            var csslink = document.createElement('link');
            csslink.rel = 'stylesheet';
            csslink.type = 'text/css';
            csslink.href = path;
            headElement.appendChild(csslink);
        }
        cssFiles.map((cssFile)=>{
            appendCssLink(cssFile);
        });

    }
    function jsLoader(jsFiles) {
        var headElement = document.getElementsByTagName('head')[0];

        function appendScript(path) {
            var jsscript = document.createElement('script');
            jsscript.type = 'text/javascript';
            jsscript.async = false;
            jsscript.src = path;
            headElement.appendChild(jsscript);
        }
        jsFiles.map((jsFile)=>{
            appendScript(jsFile);
        });
    }
    cssLoader(cssFiles);
    jsLoader(jsFiles);
// })();