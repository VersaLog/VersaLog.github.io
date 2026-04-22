<script>
  const code = `import { VersaLog } from "versalog";

const logger = new VersaLog("detailed");

logger.info("info");
logger.error("error");`;

  let copied = false;
  async function copyCode() {
    await navigator.clipboard.writeText(code);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<h1>🟨 JavaScript</h1>

<div class="bg-gray-900 rounded-xl max-w-3xl">
  <button on:click={copyCode}>{copied ? "Copied!" : "Copy"}</button>
  <pre class="whitespace-pre-wrap break-words text-green-300">
<code>{code}</code>
  </pre>
</div>