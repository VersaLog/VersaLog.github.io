<script>
  import { _ } from "svelte-i18n";
  import CodeBackground from "../lib/CodeBackground.svelte";
  import HeroSection from "../lib/HeroSection.svelte";

  const t = _;
  let showLicense = false;

  const footerLinks = [
    { name: "GitHub", url: "https://github.com/VersaLog", icon: "github" },
    { name: "X", url: "https://x.com/logversa81950", icon: "twitter" },
    { name: "Qiita", url: "https://qiita.com/organizations/versatile", icon: "code" },
    { name: "Support", url: "https://discord.gg/Et2GNZUb", icon: "message-circle" }
  ];

  function getIcon(name) {
    const icons = {
      github: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.3 7.9 10.8.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.6-1.5-1.3-1.9-1.3-1.9-1.1-.8.1-.8.1-.8 1.3.1 2 .9 2 .9 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.8-2.6-.3-5.4-1.3-5.4-6 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a10.9 10.9 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.7-2.8 5.7-5.4 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A10.99 10.99 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/></svg>`,
      twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.6 8.6 0 0 1-2.72 1.03 4.28 4.28 0 0 0-7.3 3.9A12.14 12.14 0 0 1 3.15 4.7a4.27 4.27 0 0 0 1.33 5.7 4.25 4.25 0 0 1-1.94-.54v.06a4.28 4.28 0 0 0 3.44 4.19c-.47.13-.97.15-1.45.06a4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54 12.14 12.14 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.36 8.36 0 0 0 22.46 6z"/></svg>`,
      code: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M8.7 17.3 3.4 12l5.3-5.3 1.4 1.4L6.2 12l4.5 4.5-2 1.8zM15.3 17.3l-1.4-1.4L17.8 12l-3.9-3.9 1.4-1.4L20.6 12l-5.3 5.3z"/></svg>`,
      "message-circle": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-1.1 4.2 8.5 8.5 0 0 1-7.4 4.3 8.38 8.38 0 0 1-4.2-1.1L3 20l1.1-5.3a8.5 8.5 0 1 1 16.9-3.2z"/></svg>`,
      license: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm1 14h-2v-2h2Zm0-4h-2V7h2Z"/></svg>`
    };
    return icons[name] || "";
  }
</script>

<div class="relative min-h-screen flex flex-col items-center justify-center text-center text-white bg-black overflow-hidden">
  <CodeBackground />
  <HeroSection />

  <footer class="z-10 absolute bottom-6 flex flex-col items-center text-gray-400 space-y-4">
    <div class="flex space-x-8">
      {#each footerLinks as link}
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          class="hover:text-neon-blue hover:scale-110 transition-all duration-300"
          title={link.name}
        >
          {@html getIcon(link.icon)}
        </a>
      {/each}
    </div>

    <div
      class="flex items-center space-x-2 text-sm text-gray-500 hover:text-neon-pink transition cursor-pointer"
      on:click={() => (showLicense = true)}
    >
      {@html getIcon("license")}
      <span class="underline underline-offset-2">MIT License © 2025 VersaLog</span>
    </div>
  </footer>

  {#if showLicense}
    <div class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div class="bg-gray-900 p-6 rounded-2xl shadow-[0_0_15px_#0ff] w-[90%] max-w-3xl text-left text-gray-200 overflow-y-auto max-h-[80vh]">
        <h2 class="text-xl font-bold mb-4 text-center text-neon-blue">MIT License</h2>
        <pre class="text-xs whitespace-pre-wrap leading-relaxed">
Copyright (c) 2025 VersaLog
Permission is hereby granted, free of charge, to any person obtaining a copy...
        </pre>
        <h3 class="mt-6 mb-2 font-semibold text-center text-neon-pink">日本語訳（参考）</h3>
        <p class="text-xs leading-relaxed">
本ソフトウェアおよび関連ドキュメントファイル（以下「本ソフトウェア」）のコピーを取得したすべての人に対し...
        </p>
        <div class="mt-6 text-center">
          <button
            class="px-4 py-2 bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg hover:scale-105 transition transform shadow-[0_0_10px_#0ff]"
            on:click={() => (showLicense = false)}
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  {/if}
</div>

<style>
  .hover\:text-neon-blue:hover {
    color: #00ffff;
    text-shadow: 0 0 8px #00ffff;
  }
  .hover\:text-neon-pink:hover {
    color: #ff00ff;
    text-shadow: 0 0 8px #ff00ff;
  }
</style>
