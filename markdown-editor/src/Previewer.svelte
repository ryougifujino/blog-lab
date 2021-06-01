<script lang="ts">
import marked from 'marked'
import DOMPurify from 'dompurify'

export let source: string = ''

$: compiledSecureHTML = DOMPurify.sanitize(marked(source))
</script>

<article class="previewer">
  {@html compiledSecureHTML}
</article>

<style>
.previewer {
  flex: 1;
  height: 100%;
  overflow: auto;
  word-break: break-word;
}
</style>
