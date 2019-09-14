app.service('brandService', function ($http) {
    this.findAll = function () {
        return $http.get('../brand/findAll.do');
    };

    this.findPage = function (page, rows) {
        return $http.get('../brand/findPage.do?page='+page+'&rows='+rows);
    };

    this.save = function (entity, methodName) {
        return $http.post('../brand/'+ methodName +'.do',entity );
    };

    this.findOne = function (id) {
        return $http.get('../brand/findOne.do?id='+id);
    };

    this.dele = function (selectIds) {
        return $http.get('../brand/delete.do?ids='+selectIds);
    };

    this.search = function (page, rows, searchEntity) {
        return $http.post('../brand/search.do?page='+page+"&rows="+rows, searchEntity);
    }
});