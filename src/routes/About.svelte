<script>
  import { _, locale } from "../lib/i18n.js";
  import CodeBackground from "../lib/CodeBackground.svelte";
  import HeroSection from "../lib/HeroSection.svelte";

  const t = _;

  const developers = [
    {
      name: "kaedeek",
      roleKey: "about.roles.owner",
      avatar: "https://github.com/kaedeek.png",
      url: "https://github.com/kaedeek",
    },
    {
      name: "yomi4486",
      roleKey: "about.roles.member",
      avatar: "https://github.com/yomi4486.png",
      url: "https://github.com/yomi4486",
    },
    {
      name: "kaminuma",
      roleKey: "about.roles.member",
      avatar: "https://github.com/kaminuma.png",
      url: "https://github.com/kaminuma",
    },
    {
      name: "xlebovoz",
      roleKey: "about.roles.contributor",
      avatar: "https://github.com/xlebovoz.png",
      url: "https://github.com/xlebovoz",
    }
  ];

  function changeLanguage(lang) {
    locale.set(lang);
  }
</script>

<div class="relative min-h-screen flex flex-col items-center justify-center text-center text-white bg-black overflow-hidden">
  <CodeBackground />

  <div class="z-10 px-6">
    <HeroSection />

    <h2 class="text-4xl md:text-5xl font-extrabold mt-12 mb-6 neon-text">
      {$t('about.heading')}
    </h2>

    <p class="text-gray-400 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
      {$t('about.text')}
    </p>
  </div>

  <!-- 開発者一覧 -->
  <div class="z-10 mt-16 w-full max-w-6xl px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
    {#each developers as dev}
      <a
        href={dev.url}
        target="_blank"
        rel="noopener noreferrer"
        class="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-6 flex flex-col items-center hover:scale-105 hover:border-cyan-400 hover:shadow-[0_0_20px_#00ffff60] transition-all duration-300 group"
      >
        <img
          src={dev.avatar}
          alt={dev.name}
          class="w-24 h-24 rounded-full mb-4 border-2 border-cyan-400 shadow-[0_0_10px_#00ffff80] group-hover:shadow-[0_0_20px_#00ffff]"
        />
        <h2
          class="text-xl font-semibold mb-1 text-cyan-300 group-hover:text-cyan-400 transition-colors"
        >
          {dev.name}
        </h2>
        <p class="text-gray-300 text-center">{$t(dev.roleKey)}</p>
      </a>
    {/each}
  </div>

</div>

<style>
  .neon-text {
    text-shadow:
      0 0 5px #00ffff,
      0 0 10px #00ffff,
      0 0 20px #00ffff,
      0 0 40px #00ffff;
  }

  a:hover {
    text-decoration: none;
  }
</style>
