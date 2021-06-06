<script lang="ts">
import { onMount } from 'svelte'
import ace from 'ace-builds'
import 'ace-builds/src-noconflict/ext-searchbox';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/theme-dawn';

onMount(() => {
  const editor = ace.edit(editorElement, {
    showLineNumbers: false,
    mode: "ace/mode/markdown",
    theme: 'ace/theme/dawn',
    newLineMode: 'unix',
    fontFamily: 'Menlo, "Ubuntu Mono", Consolas, "Courier New", "Microsoft Yahei", ' +
      '"Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif',
    wrap: true,
    showGutter: true,
    showPrintMargin: false,
    foldStyle: 'manual',
    useSoftTabs: true,
    scrollPastEnd: true
  })

  editor.container.style.fontSize = '15px'
  editor.container.style.lineHeight = "1.25"
  editor.renderer.updateFontSize()

  // noinspection TypeScriptValidateTypes
  editor.session.on('change', () => onInput(editor.session.getValue()))
})

let editorElement: Element
export let onInput: (value: string) => void
</script>

<div class="editor" bind:this={editorElement}></div>

<style>
.editor {
  flex: 1;
  height: 100%;
  resize: none;
  outline: none;
  box-sizing: border-box;
  border: none;
  border-right: 1px solid gray;
}
</style>
