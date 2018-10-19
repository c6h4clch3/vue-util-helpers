"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var vue_1 = require("vue");
/**
 *
 * @param generator
 */
exports.createHOC = function (generator) { return function (target) {
    return generator(vue_1.default.extend({
        props: __assign({}, (typeof target === "function"
            ? target.options.props
            : target.props)),
        computed: {
            $_HOC_context: function () {
                return {
                    attrs: this.$attrs,
                    props: this.$props,
                    on: this.$listeners
                };
            },
            $_HOC_slots: function () {
                var _this = this;
                return Object.keys(this.$slots).reduce(function (arr, key) { return arr.concat(_this.$slots[key]); }, []);
            }
        },
        render: function (h) {
            return h(target, this.$_HOC_context, this.$_HOC_slots);
        }
    }), target);
}; };
