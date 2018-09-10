angular.module("controllerModule",[])
    .controller("navCtrl",["$scope",function ($scope) {
    $scope.navInfo=[
        {href:"#/today",icon:"icon-home",text:"今日一刻"},
        {href:"#/older",icon:"icon-file-empty",text:"往期内容"},
        {href:"#/author",icon:"icon-pencil",text:"热门作者"},
        {href:"#/category",icon:"icon-menu",text:"栏目浏览"},
        {href:"#/favourite",icon:"icon-heart",text:"我的喜欢"},
        {href:"#/settings",icon:"icon-cog",text:"设置"}
    ]
}])
    .controller("todayCtrl",["$scope","$http","$filter",function ($scope, $http, $filter) {
        $scope.data=new Date();
    }])