<script>
  import { _ } from 'svelte-i18n';
  const t = _;

  const code = `from versalog import VersaLog

logger = VersaLog("detailed", False, False, "VersaLog", False, False, False, [], False, False)

logger.info("info")
logger.error("error")`;

  let copied = false;

  async function copyCode() {
    await navigator.clipboard.writeText(code);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }
</script>

<div class="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">

  <h1 class="text-4xl font-bold mb-6">🐍 Python</h1>

  <div class="bg-gray-900 rounded-xl w-full max-w-3xl overflow-hidden">
    <div class="flex justify-between px-4 py-2 bg-gray-800">
      <span class="text-gray-400 text-sm">python.example</span>
      <button on:click={copyCode} class="text-xs px-3 py-1 bg-gray-700 rounded">
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>

    <pre class="p-4 text-green-300 whitespace-pre-wrap break-words font-mono">
<code>{code}</code>
    </pre>
  </div>
</div>