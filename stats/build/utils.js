"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDate = void 0;
var parseDate = function (date) {
    //19/06/1999
    var arr = date.split('/');
    return new Date(parseInt(arr[2]), parseInt(arr[1]), parseInt(arr[0]));
};
exports.parseDate = parseDate;
