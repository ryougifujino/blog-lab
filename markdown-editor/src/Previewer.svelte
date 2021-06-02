<script lang="ts">
import marked from 'marked'
import DOMPurify from 'dompurify'
import hljs, { supportedLangNames } from './highlight'

marked.setOptions({
  highlight(code: string, langName: string, callback?: (error: any, code?: string) => void): string | void {
    if (supportedLangNames.has(langName)) {
      return hljs.highlight(code, {language: langName}, true).value
    }
  }
})

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
