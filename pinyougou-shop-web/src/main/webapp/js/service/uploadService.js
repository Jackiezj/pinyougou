app.service('uploadService', function ($http) {
    this.uploadFile = function () {
        // anjularjs对于post和get请求默认的Content-Type header 是application/json。通过设置‘Content-Type’: undefined，
        // 这样浏览器会帮我们把Content-Type 设置为 multipart/form-data.
        // 通过设置 transformRequest: angular.identity ，anjularjs transformRequest function 将序列化我们的formdata object.
        var formdata = new FormData();
        formdata.append('file', file.files[0]);//file 文件上传框的name

        return $http({
            url: '../upload.do',
            method: 'post',
            data: formdata,
            headers: {'Content-Type': undefined},
            transformRequest: angular.identity
        });
    }
});