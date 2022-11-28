import { defineEventHandler } from 'h3';

const hello = defineEventHandler(() => {
  "Hello World!";
  console.log("server?\xB6");
});

export { hello as default };
//# sourceMappingURL=hello.mjs.map
