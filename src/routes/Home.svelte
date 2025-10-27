<script>
  import CodeBackground from "../lib/CodeBackground.svelte";
  import HeroSection from "../lib/HeroSection.svelte";

  const footerLinks = [
    { name: "GitHub", url: "https://github.com/VersaLog", icon: "github" },
    { name: "X", url: "https://x.com/VersaLog", icon: "twitter" },
    { name: "Qiita", url: "https://qiita.com/tags/VersaLog", icon: "code" },
    { name: "Support", url: "https://discord.gg/Et2GNZUb", icon: "message-circle" }
  ];

  function getIcon(name) {
    const icons = {
      github: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .5C5.7.5.5 5.7.5 12c0 5.1 3.3 9.3 7.9 10.8.6.1.8-.3.8-.6v-2.1c-3.2.7-3.9-1.5-3.9-1.5-.6-1.5-1.3-1.9-1.3-1.9-1.1-.8.1-.8.1-.8 1.3.1 2 .9 2 .9 1.1 1.9 2.9 1.4 3.6 1.1.1-.8.4-1.4.7-1.8-2.6-.3-5.4-1.3-5.4-6 0-1.3.5-2.3 1.2-3.1-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a10.9 10.9 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1.8.8 1.2 1.8 1.2 3.1 0 4.7-2.8 5.7-5.4 6 .4.3.8 1 .8 2v3c0 .3.2.7.8.6A10.99 10.99 0 0 0 23.5 12C23.5 5.7 18.3.5 12 .5z"/></svg>`,
      twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.46.69a4.3 4.3 0 0 0 1.88-2.38 8.6 8.6 0 0 1-2.72 1.03 4.28 4.28 0 0 0-7.3 3.9A12.14 12.14 0 0 1 3.15 4.7a4.27 4.27 0 0 0 1.33 5.7 4.25 4.25 0 0 1-1.94-.54v.06a4.28 4.28 0 0 0 3.44 4.19c-.47.13-.97.15-1.45.06a4.29 4.29 0 0 0 4 2.98A8.6 8.6 0 0 1 2 19.54 12.14 12.14 0 0 0 8.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18 0-.36-.01-.54A8.36 8.36 0 0 0 22.46 6z"/></svg>`,
      code: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M8.7 17.3 3.4 12l5.3-5.3 1.4 1.4L6.2 12l4.5 4.5-2 1.8zM15.3 17.3l-1.4-1.4L17.8 12l-3.9-3.9 1.4-1.4L20.6 12l-5.3 5.3z"/></svg>`,
      "message-circle": `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 24 24"><path d="M21 11.5a8.38 8.38 0 0 1-1.1 4.2 8.5 8.5 0 0 1-7.4 4.3 8.38 8.38 0 0 1-4.2-1.1L3 20l1.1-5.3a8.5 8.5 0 1 1 16.9-3.2z"/></svg>`
    };
    return icons[name] || "";
  }
</script>

<div class="relative min-h-screen flex flex-col items-center justify-center text-center text-white bg-black overflow-hidden">
  <CodeBackground />
  <HeroSection />

  <footer class="z-10 absolute bottom-4 flex space-x-6 text-gray-400">
    {#each footerLinks as link}
      <a
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        class="hover:text-white transition-colors duration-200"
        title={link.name}
      >
        {@html getIcon(link.icon)}
      </a>
    {/each}
  </footer>
</div>
