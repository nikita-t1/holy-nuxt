import { useSSRContext, defineComponent, ref, watchEffect, mergeProps } from 'vue';
import { _ as _export_sfc, u as useSupabaseUser, a as useSupabaseClient, n as navigateTo } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr } from 'vue/server-renderer';
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
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    const email = ref("");
    const password = ref("");
    const showWaitForMailInfo = ref(false);
    const user = useSupabaseUser();
    useSupabaseClient();
    watchEffect(() => {
      if (user.value) {
        navigateTo("/locked");
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      if (!showWaitForMailInfo.value) {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8" }, _attrs))} data-v-7decf254><div class="w-full max-w-md space-y-8" data-v-7decf254><h2 data-v-7decf254>Authentication</h2><form class="space-y-6" data-v-7decf254><input name="remember" type="hidden" value="true" data-v-7decf254><div class="space-y-4" data-v-7decf254><div class="text-start" data-v-7decf254><label id="email-label" class="block text-sm font-medium mb-2 dark:text-white" data-v-7decf254>Email</label><input id="email"${ssrRenderAttr("value", email.value)} placeholder="you@site.com" required type="email" data-v-7decf254></div><div class="text-start" data-v-7decf254><label id="password-label" class="block text-sm font-medium mb-2 dark:text-white" data-v-7decf254>Password</label><input id="password"${ssrRenderAttr("value", password.value)} placeholder="Password" required type="password" data-v-7decf254></div></div><div class="flex flex-row" data-v-7decf254><button type="submit" id="btn-login" class="mx-3" data-v-7decf254> Login </button><button type="submit" id="btn-register" class="mx-3" data-v-7decf254> Register </button></div></form></div></div>`);
      } else {
        _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8" }, _attrs))} data-v-7decf254><div class="w-full max-w-md space-y-8" data-v-7decf254><h2 data-v-7decf254>An E-Mail was send to your address to confirm your Sign Up</h2><button type="submit" id="btn-resend-mail" data-v-7decf254> Resend Email </button></div></div>`);
      }
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-7decf254"]]);

export { Login as default };
//# sourceMappingURL=Login.3c51459b.mjs.map
