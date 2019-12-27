app.controller('HomeCtrl',HomeCtrl);
function HomeCtrl($scope){
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