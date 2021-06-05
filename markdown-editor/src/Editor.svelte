<script lang="ts">
import { onMount } from 'svelte'
import ace from 'ace-builds'
import 'ace-builds/src-noconflict/ext-searchbox';
import 'ace-builds/src-noconflict/mode-markdown';
import 'ace-builds/src-noconflict/theme-dawn';

onMount(() => {
  const editor = ace.edit(el)
})

let el: Element
export let onInput: (value: string) => void

const handleInput = e => onInput(e.target.value)
</script>

<div class="editor" on:input={handleInput} bind:this={el}></div>

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
