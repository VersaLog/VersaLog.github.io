<script>
  import { createEventDispatcher } from 'svelte';
  import LanguageSelector from './LanguageSelector.svelte';
  const dispatch = createEventDispatcher();

  function go(page) {
    dispatch('navigate', page);
  }
</script>

<nav class="flex items-center justify-center gap-3 flex-wrap">
  <button on:click={() => go('home')} class="nav-btn">ホーム</button>
  <button on:click={() => go('docs')} class="nav-btn">ドキュメント</button>
  <button on:click={() => go('about')} class="nav-btn">アバウト</button>
  <LanguageSelector />
</nav>

<style>
  nav {
    margin-bottom: 2rem;
  }

  .nav-btn {
    background: #111;
    border-radius: 1rem;
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
    transition: all 0.2s;
  }

  .nav-btn:hover {
    background: #222;
    transform: scale(1.05);
  }
</style>
