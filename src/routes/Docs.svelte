<script>
  import { _ } from 'svelte-i18n';
  const t = _;

  const languages = [
    { name: "Python", path: "#/docs/python", icon: "🐍", color: "from-green-400 to-blue-500" },
    { name: "JavaScript", path: "#/docs/javascript", icon: "🟨", color: "from-yellow-400 to-orange-500" },
    { name: "Rust", path: "#/docs/rust", icon: "🦀", color: "from-orange-500 to-red-600" },
    { name: "Go", path: "#/docs/go", icon: "🐹", color: "from-sky-400 to-blue-600" },
    { name: "Ruby", path: "#/docs/ruby", icon: "💎", color: "from-pink-400 to-red-500" },
  ];
</script>

<div class="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12">
  <h1 class="text-4xl font-bold mb-6">📘 {$t('docs')}</h1>
  <p class="text-gray-400 mb-12 text-center max-w-2xl">
    VersaLog supports multiple programming languages.  
    Choose your preferred language to view its documentation.
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-5xl">
    {#each languages as lang}
      <a href={lang.path}
        class="p-8 rounded-2xl bg-gradient-to-br {lang.color} text-white shadow-lg transform hover:scale-105 hover:shadow-2xl transition duration-300 ease-in-out text-center">
        <div class="text-5xl mb-3">{lang.icon}</div>
        <h2 class="text-2xl font-semibold">{lang.name}</h2>
      </a>
    {/each}
  </div>
</div>
