"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
exports.Fragment = vue_1.default.extend({
    functional: true,
    render: function (h, context) {
        return context.children;
    }
});
