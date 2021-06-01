<script lang="ts">
import Editor from './Editor.svelte'
import Previewer from './Previewer.svelte'

let editorInput: string = ''
</script>

<main class="container">
  <Editor onInput={value => editorInput = value} />
  <Previewer source={editorInput} />
</main>

<style>
.container {
  display: flex;
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
}

:global body {
  margin: 0;
  padding: 0;
}
</style>
