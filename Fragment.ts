import Vue from "vue";

export const Fragment = Vue.extend({
  functional: true,
  render(h, context) {
    return context.children as any;
  }
});
