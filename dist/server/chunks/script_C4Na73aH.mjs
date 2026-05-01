globalThis.process ??= {};
globalThis.process.env ??= {};
import { o as createRenderInstruction } from "./worker-entry_BghW32ok.mjs";
async function renderScript(result, id) {
  const inlined = result.inlinedScripts.get(id);
  let content = "";
  if (inlined != null) {
    if (inlined) {
      content = `<script type="module">${inlined}<\/script>`;
    }
  } else {
    const resolved = await result.resolve(id);
    content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
  }
  return createRenderInstruction({ type: "script", id, content });
}
export {
  renderScript as r
};
