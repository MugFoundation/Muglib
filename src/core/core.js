/*
Copyright 2014 MugFoudation
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
http://www.apache.org/licenses/LICENSE-2.0
*/
(function ( window, undefined ) {
    var Mug = function (element, index) {
        index = typeof index !== 'undefined' ? index : 0;
        if (window === this) {
            return new Mug(element, index);
        }
        this.node = document.querySelectorAll(element, index);
        return this;
    };
    Mug.fn = Mug.prototype;
    window.Mug = Mug;
    window.$ = Mug;
})(window);