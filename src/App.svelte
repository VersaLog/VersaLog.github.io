<script>
  import Router from 'svelte-spa-router';
  import Home from './routes/Home.svelte';
  import Docs from './routes/Docs.svelte';
  import About from './routes/About.svelte';

  const routes = {
    '/': Home,
    '/docs': Docs,
    '/about': About,
  };
</script>

<nav>
  <a href="#/" class="card">Home</a>
  <a href="#/docs" class="card">Docs</a>
  <a href="#/about" class="card">About</a>
</nav>

<main>
  <Router {routes} />
</main>

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
  }

  /* カード風メニュー */
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
</style>
