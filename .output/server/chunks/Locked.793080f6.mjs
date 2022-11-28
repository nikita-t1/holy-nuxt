import { u as useSupabaseUser, a as useSupabaseClient, b as useAsyncData } from './server.mjs';
import { defineComponent, withAsyncContext, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import 'ohmyfetch';
import 'ufo';
import 'hookable';
import 'unctx';
import 'vue-router';
import 'destr';
import 'h3';
import 'defu';
import '@vue/shared';
import 'events';
import 'unenv/runtime/npm/debug';
import 'util';
import 'crypto';
import 'url';
import 'bufferutil';
import 'buffer';
import 'utf-8-validate';
import 'http';
import 'https';
import 'typedarray-to-buffer';
import 'yaeti';
import 'cookie-es';
import 'ohash';
import './node-server.mjs';
import 'node-fetch-native/polyfill';
import 'radix3';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'unstorage';
import 'fs';
import 'pathe';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Locked",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    useSupabaseUser();
    const client = useSupabaseClient();
    [__temp, __restore] = withAsyncContext(async () => useAsyncData("pray", async () => {
      const { data } = await client.from("pray").select();
      return data;
    })), __temp = await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-screen-xl mx-auto text-center" }, _attrs))}><p class="font-bold text-xl p-6">Unlocked</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Locked.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=Locked.793080f6.mjs.map
