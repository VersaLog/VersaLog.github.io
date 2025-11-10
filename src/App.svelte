<script>
  import Router from 'svelte-spa-router';
  import Home from './routes/Home.svelte';
  import Docs from './routes/Docs.svelte';
  import About from './routes/About.svelte';
  import Python from './routes/docs/Python.svelte';
  import JavaScript from './routes/docs/JavaScript.svelte';
  import Rust from './routes/docs/Rust.svelte';
  import Go from './routes/docs/Go.svelte';
  import Ruby from './routes/docs/Ruby.svelte';
  import { _, locale } from 'svelte-i18n';
  import { setLang, loadI18n } from './lib/i18n.js';

  const t = _;
  const routes = {
    '/': Home,
    '/docs': Docs,
    '/docs/python': Python,
    '/docs/javascript': JavaScript,
    '/docs/rust': Rust,
    '/docs/go': Go,
    '/docs/ruby': Ruby,
    '/about': About,
  };

  const langs = [
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
  ];

  let ready = false;
  let showDropdown = false;
  let currentLang = 'ja';

  loadI18n().then(() => (ready = true));

  function toggleDropdown() {
    showDropdown = !showDropdown;
  }

  function handleChange(lang) {
    currentLang = lang.code;
    setLang(lang.code);
    showDropdown = false;
  }
</script>

{#if ready}
  <nav class="flex flex-wrap justify-center items-center gap-3 md:gap-6 p-4 md:p-6 backdrop-blur-md bg-black/40 border-b border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.15)] fixed top-0 left-0 right-0 z-50">
    
    <a
      href="#/"
      class="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-pink-500 text-2xl font-extrabold drop-shadow-[0_0_12px_rgba(255,255,255,0.6)] hover:scale-110 transition-transform"
    >
      VersaLog
    </a>

    <div class="flex flex-wrap justify-center gap-3 md:gap-6">
      <a href="#/" class="nav-btn">{$t('home')}</a>
      <a href="#/docs" class="nav-btn">{$t('docs')}</a>
      <a href="#/about" class="nav-btn">{$t('about_label')}</a>
    </div>

    <div class="relative ml-auto md:ml-6">
      <button
        class="text-2xl hover:scale-110 transition-transform"
        on:click={toggleDropdown}
      >
        {#each langs as lang}
          {#if lang.code === currentLang}
            {lang.flag}
          {/if}
        {/each}
      </button>

      {#if showDropdown}
        <div
          class="absolute right-0 mt-3 w-40 bg-black/90 border border-white/20 rounded-xl shadow-[0_0_15px_rgba(255,255,255,0.2)] backdrop-blur-md animate-fade-in"
        >
          {#each langs as lang}
            <div
              class="flex items-center gap-2 px-3 py-2 hover:bg-white/10 cursor-pointer transition-colors"
              on:click={() => handleChange(lang)}
            >
              <span class="text-xl">{lang.flag}</span>
              <span class="text-sm text-white">{lang.label}</span>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </nav>

  <main class="pt-28 text-white text-center px-4 pb-16 min-h-screen bg-gradient-to-b from-black via-gray-900 to-black">
    <Router {routes} />
  </main>
{:else}
  <div class="text-white text-2xl text-center mt-20 animate-pulse">Loading...</div>
{/if}

<style>
  .nav-btn {
    @apply px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 transition-all text-white font-semibold shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)] hover:scale-105;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .animate-fade-in {
    animation: fade-in 0.2s ease-out;
  }
</style>