app.controller("indexController",indexController);
function indexController($scope,calculateService,ngDialog){
    $scope.val1 = 1234;
    $scope.val2 = 4321;

    $scope.format = 'M/d/yy h:mm:ss a';
    $scope.calFunc = function(){
        $scope.addresult = calculateService.add($scope.val1,$scope.val2);
        $scope.subtractresult = calculateService.subtract($scope.val1,$scope.val2);
    };

    $scope.dialog = function(){
        var ngDialog1 = ngDialog.open({ 
            id: 'fromAService', 
            template: 'firstDialogId'
        });
        // ngDialog.open({ 
        //     template: 'lib/template/popupTmp.html', 
        //     className: 'ngdialog-theme-default',
        //     width: '40%'
        // });
    };
}