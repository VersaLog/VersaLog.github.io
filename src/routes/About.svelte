<script>
  import CodeBackground from "../lib/CodeBackground.svelte";
  import HeroSection from "../lib/HeroSection.svelte";

  const developers = [
    { name: "kaedeek", role: "Owner & Developer", avatar: "/assets/avatars/free.png" },
    { name: "yomi4486", role: "Contributors", avatar: "/assets/avatars/free.png" },
    { name: "kaminuma", role: "Contributors", avatar: "/assets/avatars/free.png" }
  ];
</script>

<div class="relative min-h-screen flex flex-col items-center justify-center text-center text-white bg-black overflow-hidden">
  <CodeBackground />

  <div class="z-10 px-4">
    <HeroSection />
    <p class="text-gray-400 mt-4 max-w-3xl mx-auto text-lg md:text-xl">
      VersaLogはオープンソースを愛する開発者によって作られています。
    </p>
  </div>

  <div class="z-10 mt-16 w-full max-w-5xl px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
    {#each developers as dev}
      <div class="bg-gray-800 rounded-xl p-6 flex flex-col items-center hover:scale-105 transition-transform">
        <img src={dev.avatar} alt={dev.name} class="w-24 h-24 rounded-full mb-4"/>
        <h2 class="text-xl font-semibold mb-1">{dev.name}</h2>
        <p class="text-gray-300 text-center">{dev.role}</p>
      </div>
    {/each}
  </div>
</div>
