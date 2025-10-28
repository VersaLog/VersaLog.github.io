<script>
  import { _, locale } from "../lib/i18n.js";
  import CodeBackground from "../lib/CodeBackground.svelte";
  import HeroSection from "../lib/HeroSection.svelte";

  const t = _;

  const developers = [
    { name: "kaedeek", roleKey: "about.roles.owner", avatar: "/assets/avatars/free.png" },
    { name: "yomi4486", roleKey: "about.roles.contributor", avatar: "/assets/avatars/free.png" },
    { name: "kaminuma", roleKey: "about.roles.contributor", avatar: "/assets/avatars/free.png" }
  ];

  function changeLanguage(lang) {
    locale.set(lang);
  }
</script>

<div class="relative min-h-screen flex flex-col items-center justify-center text-center text-white bg-black overflow-hidden">
  <CodeBackground />

  <div class="z-10 px-4">
    <HeroSection />
    <h2 class="text-3xl font-bold mt-10 mb-4">{$t('about.heading')}</h2>
    <p class="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl">
      {$t('about.text')}
    </p>
  </div>

  <div class="z-10 mt-16 w-full max-w-5xl px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each developers as dev}
      <div class="bg-gray-800 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform">
        <img src={dev.avatar} alt={dev.name} class="w-24 h-24 rounded-full mb-4"/>
        <h2 class="text-xl font-semibold mb-1">{dev.name}</h2>
        <p class="text-gray-300 text-center">{$t(dev.roleKey)}</p>
      </div>
    {/each}
  </div>
</div>
