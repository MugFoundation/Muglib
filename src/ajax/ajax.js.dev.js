/*
Copyright 2014 MugFoudation
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
*/
Mug.fn.ajax = {
    request: function(opts){
        if (typeof opts == 'string') opts = {url:opts};
        opts.url = opts.url || '';
        opts.method = opts.method;
        opts.method = opts.method || 'get';
        opts.data = opts.data || {};
    }
    var api = {
        host = {};
        setHeaders: function(opts){
            if (typeof opts == ) {};
        }
        process: function(opts){
            return this;
        }
        post: function (opts) {
            async = typeof async !== 'undefined' ? async : true;
            var r = new XMLHttpRequest();
            r.onload = function(){
                if (r.readyState == 4 && r.status == 200) {
                    callback(r.responseText);
                }else{
                    callback(r.statusText);
                }
            };
            if(data !== ""){
                r.open("post", url, async);
                r.setRequestHeader("Content-type","application/x-www-form-urlencoded");
                r.send(data);
            }else{
                r.open("post", url, async);
                r.send();
                r.onerror = function (){
                    callback(r.statusText);
                };
            }
        }
    };
};