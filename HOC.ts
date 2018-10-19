import Vue, { VueConstructor, VNodeData, VNode } from "vue";

interface HOCBase extends Vue {
  $_HOC_context: VNodeData;
  $_HOC_slots: VNode[];
}

/**
 *
 * @param generator
 */
export const createHOC = (
  generator: (
    HOCBase: VueConstructor<HOCBase>,
    target: VueConstructor
  ) => VueConstructor
) => (target: VueConstructor) =>
  generator(
    Vue.extend({
      props: {
        ...(typeof target === "function"
          ? (target as any).options.props
          : (target as any).props)
      },
      computed: {
        $_HOC_context(): VNodeData {
          return {
            attrs: this.$attrs,
            props: this.$props,
            on: this.$listeners
          };
        },
        $_HOC_slots(): VNode[] {
          return Object.keys(this.$slots).reduce(
            (arr, key) => arr.concat(this.$slots[key] as VNode),
            [] as VNode[]
          );
        }
      },
      render(h) {
        return h(target, this.$_HOC_context, this.$_HOC_slots);
      }
    }),
    target
  );
