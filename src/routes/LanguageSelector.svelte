<script>
  let currentLang = 'ja';
  const languages = [
    { code: 'ja', label: '🇯🇵 日本語' },
    { code: 'en', label: '🇺🇸 English' },
    { code: 'zh', label: '🇨🇳 中文' },
    { code: 'fr', label: '🇫🇷 Français' },
  ];

  function changeLang(e) {
    currentLang = e.target.value;
  }
</script>

<select bind:value={currentLang} on:change={changeLang} class="lang-select">
  {#each languages as lang}
    <option value={lang.code}>{lang.label}</option>
  {/each}
</select>

<style>
  .lang-select {
    background: #111;
    color: white;
    border-radius: 1rem;
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
    border: none;
  }
</style>
