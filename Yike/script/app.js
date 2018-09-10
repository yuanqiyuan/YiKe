var Yike=angular.module("Yike",["ngRoute","controllerModule"]);
//路由的配置
Yike.config(["$routeProvider",function ($routeProvider) {
    $routeProvider.when("/today",{
        templateUrl:"./views/today.html",
        controller:"todayCtrl"
    }).when("/older",{
        templateUrl:"./views/older.html",
        controller:"olderCtrl"
    }).when("/author",{
        templateUrl:"./views/author.html",
        controller:"authorCtrl"
    }).when("/category",{
        templateUrl:"./views/category.html",
        controller:"categoryCtrl"
    }).when("/favourite",{
        templateUrl:"./views/favourite.html",
        controller:"favouriteCtrl"
    }).when("/settings",{
        templateUrl:"./views/settings.html",
        controller:"settingsCtrl"
    }).otherwise({
        redirectTo:"/today"
    })
}])
Yike.run(["$rootScope",function ($rootScope) {
    $rootScope.collapsed=false;
    //hash值
    var hash=location.hash;
    if(hash==""){
        $rootScope.index=0;
    }else{
        switch (hash){
            case "#/today" : $rootScope.index=0;break;
            case "#/older" : $rootScope.index=1;break;
            case "#/author" :$rootScope.index=2;break;
            case "#/category" :$rootScope.index=3;break;
            case "#/favourite" :$rootScope.index=4;break;
            case "#/settings" :$rootScope.index=5;break;
        }
    }
    $rootScope.toggle=function (index) {
        $rootScope.index=index;
        $rootScope.collapsed=!$rootScope.collapsed;
        var dds=document.querySelectorAll(".navs dd");
        if($rootScope.collapsed){
            for(var i=0;i<dds.length;i++){
                dds[i].style.transform="translate(0)";
                dds[i].style.transitionDelay="0.2s";
                dds[i].style.transitionDuration=(i+1)*0.3+"s";
            }
        }else {
            for(var i=0;i<dds.length;i++){
                dds[i].style.transform="translate(-100%)";
                dds[i].style.transitionDelay="0.2s";
                dds[i].style.transitionDuration=(dds.length-i)*0.3+"s";
            }
        }
    }
}])