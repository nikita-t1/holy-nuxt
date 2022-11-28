import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';

const _sfc_main = {
  __name: "About",
  __ssrInlineRender: true,
  setup(__props) {
    console.log("hi");
    const fetchLibrairy = async () => {
      const { pray } = await $fetch("/api/test");
      console.log(pray);
    };
    fetchLibrairy();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-screen-xl mx-auto text-center" }, _attrs))}><p class="font-bold text-xl p-6">About</p><p class="max-w-screen-lg mx-auto"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. </p><br><p class="font-bold text-xl">Best Of Verses</p><br><figure class="max-w-screen-lg mx-auto"><blockquote><p> Die \xE4ltere Schwester ging zur j\xFCngeren und sagte:<br> \xBBH\xF6r zu, ich habe diese Nacht mit unserem Vater geschlafen. Das Beste ist, wir machen ihn heute wieder betrunken und du schl\xE4fst auch mit ihm, damit es sicher ist, dass unsere Familie erhalten bleibt.\xAB </p></blockquote><figcaption>\u2014 1. Mose, <cite>19:34 HFA</cite></figcaption></figure><br><figure class="max-w-screen-lg mx-auto"><blockquote><p> Hat er aber die Wahrheit gesagt und hat man keinen Beweis erbringen k\xF6nnen, dass die Frau noch Jungfrau war dann soll man sie vor die T\xFCr ihres Elternhauses f\xFChren, und die M\xE4nner der Stadt sollen sie dort steinigen. Sie muss sterben, weil sie sich im Haus ihrer Eltern wie eine Hure verhalten hat. Das ist eine Schande f\xFCr ganz Israel. Ihr m\xFCsst alles B\xF6se aus eurem Volk beseitigen! </p></blockquote><figcaption>\u2014 5. Mose, <cite>22:20-21 HFA</cite></figcaption></figure><br><figure class="max-w-screen-lg mx-auto"><blockquote><p> Niemand darf mit der Frau seines Vaters schlafen. Sonst entehrt er seinen Vater. </p></blockquote><figcaption>\u2014 5. Mose, <cite>23:1 HFA</cite></figcaption></figure><br><figure class="max-w-screen-lg mx-auto"><blockquote><p> Wenn zwei M\xE4nner sich schlagen und die Frau des Unterlegenen kommt ihrem Mann zu Hilfe und greift dem anderen an die Geschlechtsteile soll man ihr ohne Mitleid die Hand abhauen. </p></blockquote><figcaption>\u2014 5. Mose, <cite>25:11-12 HFA</cite></figcaption></figure><br><figure class="max-w-screen-lg mx-auto"><blockquote><p> Wieder packte sie die Gier nach ihren fr\xFCheren Liebhabern, deren Glied so gro\xDF war wie das eines Esels und die so br\xFCnstig waren wie ein Hengst. </p></blockquote><figcaption>\u2014 Hesekiel, <cite>23:20 HFA</cite></figcaption></figure><br></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/About.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=About.77b17261.mjs.map
