<script lang="ts">

export let onInput: (value: string) => void

const handleInput = e => onInput(e.target.value)
</script>

<textarea class="editor" on:input={handleInput}>
</textarea>

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
