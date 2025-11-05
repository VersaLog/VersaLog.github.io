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
  loadI18n().then(() => (ready = true));

  function handleChange(event) {
    setLang(event.target.value);
  }
</script>

{#if ready}
  <nav class="flex flex-wrap justify-center items-center gap-3 md:gap-6 p-4 md:p-6 backdrop-blur-md bg-black/40 border-b border-white/10 shadow-[0_0_20px_rgba(255,255,255,0.05)]">
    
    <a href="#/" class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 text-2xl font-extrabold drop-shadow-[0_0_10px_rgba(255,255,255,0.4)] hover:scale-105 transition-transform">
      VersaLog
    </a>

    <div class="flex flex-wrap justify-center gap-2 md:gap-4">
      <a href="#/" class="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 transition-all text-white font-semibold shadow-lg hover:scale-105">
        {$t('home')}
      </a>
      <a href="#/docs" class="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 transition-all text-white font-semibold shadow-lg hover:scale-105">
        {$t('docs')}
      </a>
      <a href="#/about" class="px-4 py-2 rounded-2xl bg-white/10 hover:bg-white/20 transition-all text-white font-semibold shadow-lg hover:scale-105">
        {$t('about_label')}
      </a>
    </div>

    <div class="ml-auto md:ml-6">
      <select
        on:change={handleChange}
        class="bg-white/10 text-white border border-white/20 rounded-xl px-3 py-2 focus:outline-none hover:bg-white/20 transition-all"
      >
        {#each langs as lang}
          <option value={lang.code} selected={$locale === lang.code}>
            {lang.flag} {lang.label}
          </option>
        {/each}
      </select>
    </div>
  </nav>

  <main class="text-white text-center px-4 py-6 md:py-10">
    <Router {routes} />
  </main>
{:else}
  <div class="text-white text-2xl text-center mt-20 animate-pulse">Loading...</div>
{/if}
