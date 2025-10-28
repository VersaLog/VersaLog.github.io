<script>
  import Router from 'svelte-spa-router';
  import Home from './routes/Home.svelte';
  import Docs from './routes/Docs.svelte';
  import About from './routes/About.svelte';
  import { _, locale } from 'svelte-i18n';
  import { setLang, loadI18n } from './lib/i18n.js';

  const t = _;
  const routes = {
    '/': Home,
    '/docs': Docs,
    '/about': About,
  };

  const langs = ['en', 'ja'];
  let ready = false;

  loadI18n().then(() => {
    ready = true;
  });

  function handleChange(event) {
    setLang(event.target.value);
  }
</script>

{#if ready}
  <nav>
    <a href="#/" class="card">{$t('home')}</a>
    <a href="#/docs" class="card">{$t('docs')}</a>
    <a href="#/about" class="card">{$t('about_label')}</a>

    <select on:change={handleChange} class="lang-select">
      {#each langs as lang}
        <option value={lang} selected={$locale === lang}>
          {lang === 'ja' ? '日本語' : 'English'}
        </option>
      {/each}
    </select>
  </nav>

  <main>
    <Router {routes} />
  </main>
{:else}
  <div class="loading">Loading translations...</div>
{/if}

<style>
  body {
    margin: 0;
    background: black;
    font-family: sans-serif;
  }

  nav {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    align-items: center;
  }

  .card {
    display: block;
    padding: 1rem 2rem;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    text-decoration: none;
    color: white;
    font-weight: bold;
    box-shadow: 0 4px 10px rgba(0,0,0,0.3);
    transition: transform 0.2s, background 0.2s;
  }

  .card:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-4px);
  }

  main {
    color: white;
    padding: 2rem;
  }

  .lang-select {
    margin-left: auto;
    background: rgba(255, 255, 255, 0.1);
    border: none;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
  }

  .loading {
    color: white;
    font-size: 1.5rem;
    text-align: center;
    padding: 3rem;
  }
</style>
