<script>
  import { onMount } from "svelte";
  let codeLines = [];

  onMount(() => {
    const sample = [
      "import { createLog } from '@versalog/core';",
      "const app = initVersa();",
      "log.info('VersaLog initialized');",
      "await connect('wss://api.versalog.dev');",
      "metrics.track('build:complete');"
    ];

    codeLines = Array.from({ length: 60 }, () => sample[Math.floor(Math.random() * sample.length)]);
    setInterval(() => {
      codeLines = [...codeLines.slice(1), sample[Math.floor(Math.random() * sample.length)]];
    }, 200);
  });
</script>

<div class="absolute inset-0 bg-black font-mono text-xs text-blue-400 opacity-20 pointer-events-none select-none overflow-hidden">
  <div class="flex flex-col space-y-1 p-4 animate-scroll">
    {#each codeLines as line}
      <div class="whitespace-nowrap">{line}</div>
    {/each}
  </div>
</div>

<style>
  @keyframes scroll {
    from { transform: translateY(0); }
    to { transform: translateY(-50%); }
  }
  .animate-scroll {
    animation: scroll 25s linear infinite;
  }
</style>
