app.controller('blogCtrl', blogCtrl);
function blogCtrl($scope, $state){
    let detailPath = "";
    $scope.listInit = ()=>{
        $scope.blogList = [
            {
                title:'001_let及const声明',
                path:'001_let及const声明.md'
            },
            {
                title:'002_变量的解构赋值',
                path:'002_变量的解构赋值.md'
            },
            {
                title:'003_字符串的拓展',
                path:'003_字符串的拓展.md'
            },
            {
                title:'004_函数的拓展',
                path:'004_函数的拓展.md'
            },
            {
                title:'005_数组的拓展',
                path:'005_数组的拓展.md'
            },
            {
                title:'006_对象的拓展',
                path:'006_对象的拓展.md'
            },
            {
                title:'007_Symbol',
                path:'007_Symbol.md'
            },
            {
                title:'009_Proxy',
                path:'009_Proxy.md'
            },
            {
                title:'0010_Promise',
                path:'0010_Promise.md'
            }
        ];
    }
    $scope.goBlogArticle = (path)=>{
        detailPath = path;
        $state.go('main.BlogDetail',{path:path});
    }
}
app.controller('blogDetailCtrl', blogDetailCtrl);
function blogDetailCtrl($scope,$stateParams,lazyLoadService){
    $scope.detailInit = ()=>{
        const blogPath = "/data/markdowns/";
        lazyLoadService(['https://cdn.bootcss.com/showdown/1.9.1/showdown.min.js']).then(()=>{
            return axios.get(blogPath + $stateParams.path);
        }).then((content)=>{
            const converter = new showdown.Converter();
            const html = converter.makeHtml(content.data);
            document.getElementsByClassName("markdown-body")[0].innerHTML = html;
        });
    }
}

app.controller('LessTestCtrl',LessTestCtrl);
function LessTestCtrl($scope){
}

app.controller('aboutThisCtrl',aboutThisCtrl);
function aboutThisCtrl($scope){
    $scope.thisCall = function(){
        function identity(){
            var upperName = this.name.toUpperCase();
            console.log(upperName);
            return upperName;
        }
        function speak(){
            var greeting = "hello,I am " + identity.call(this);
            console.log(greeting);
        }
        var me = {
            name : "louyi"
        }
        var you = {
            name : "xijinping"
        }
        identity.call(me);
        identity.call(you);
        speak.call(me);
        speak.call(you);
    }

    $scope.consoleThis = function(){
        function AA(){
            this.name = "car";
            this.color = "red";
            this.changeColor = function(color){
                this.color = color;
            }
        }
        AA.prototype = {
            name : "beautifulCar",
            wheels : "four"
        }
        var aa = new AA();
        console.log(aa.name);
        console.log(aa.color);
        aa.changeColor("black");
        console.log(aa.color);
        console.log(aa);
        console.log(aa.wheels);
    }

    //this并不指向自身
    $scope.thisNotSelf = function(){
        function foo(num){
            console.log("foo: " + num);
            //记录foo被调用的次数
            this.count++;
        }
        foo.count = 0;
        var i;
        for(i = 0; i < 10; i++){
            if(i > 5){
                foo(i);//若改成foo.call(foo,i)则能正确计数了
            }
        }
        console.log(foo.count);//仍然是0
    }

    //this的隐式绑定丢失
    $scope.loseThis = function(){
        function foo(){
            console.log(this.a);
        }
        var obj = {
            a:"a of obj",
            foo:foo
        }
        var bar = obj.foo;
        window.a = "oops,global";
        bar();//输出oops,global
    }
    //this的隐式绑定丢失
    $scope.loseThis2 = function(){
        function foo(){
            console.log(this.a);
        }
        var obj = {
            a:"a of obj",
            foo:foo
        }
        function FOO(fn){
            fn();
        }
        window.a = "oops,global";
        FOO(obj.foo);//输出oops,global
    }
}

app.controller('debounceCtrl',debounceCtrl);
function debounceCtrl($scope){
    $scope.appData = {}
    const d = $scope.appData;
    let i = 0;
    d.clickSubmit = function(k){
        i++;
        console.log((k?k:"") + i);
    }
    //防抖
    d.debounce = function(fn,delay){
        let timer = null;
        return function(...args){
            clearTimeout(timer);
            timer = setTimeout(function(){
                fn.apply(this,args);
            },delay);
        }
    }
    //前置执行式防抖
    d.preExcuteDebounce = function(fn,delay){
        let timer = null, excuteflag = true;
        return function(...args){
            if(excuteflag){
                excuteflag = false;
                fn.apply(this,args);
            }
            clearTimeout(timer);
            timer = setTimeout(function(){
                excuteflag = true;
            },delay);
        }
    }
    //节流
    d.throttling = function(fn, delay){
        let executeflag = true;
        return function(...args){
            if(!executeflag) return;
            executeflag = false;
            setTimeout(function(){
                executeflag = true;
                fn.apply(this,args);
            },delay);
        }
    }
    d.clickDebounce = d.debounce(d.clickSubmit,500);
    d.preClickDebounce = d.preExcuteDebounce(d.clickSubmit,500);
    d.clickThrottling = d.throttling(d.clickSubmit,500);
}