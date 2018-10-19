import Vue, { VueConstructor, VNodeData, VNode } from "vue";
interface HOCBase extends Vue {
    $_HOC_context: VNodeData;
    $_HOC_slots: VNode[];
}
/**
 *
 * @param generator
 */
export declare const createHOC: (generator: (HOCBase: VueConstructor<HOCBase>, target: VueConstructor<Vue>) => VueConstructor<Vue>) => (target: VueConstructor<Vue>) => VueConstructor<Vue>;
export {};
