<script>
  import { locale } from "../lib/i18n.js";

  let open = false;

  const changeLanguage = (lang) => {
    locale.set(lang);
    open = false;
  };
</script>

<div class="relative inline-block text-left">
  <button
    class="flex items-center justify-center w-10 h-10 rounded-full hover:scale-110 transition-transform"
    on:click={() => (open = !open)}
  >
    {#if $locale === 'en'}
      <img src="https://flagcdn.com/w20/gb.png" alt="English" class="w-6 h-6 rounded-full" />
    {:else}
      <img src="https://flagcdn.com/w20/jp.png" alt="日本語" class="w-6 h-6 rounded-full" />
    {/if}
  </button>

  {#if open}
    <div
      class="absolute right-0 mt-2 w-32 bg-gray-900 border border-gray-700 rounded-xl shadow-lg py-2 z-50"
    >
      <button
        on:click={() => changeLanguage('en')}
        class="flex items-center px-4 py-2 w-full text-left hover:bg-gray-800"
      >
        <img src="https://flagcdn.com/w20/gb.png" alt="English" class="w-5 h-5 mr-2" />
        English
      </button>
      <button
        on:click={() => changeLanguage('ja')}
        class="flex items-center px-4 py-2 w-full text-left hover:bg-gray-800"
      >
        <img src="https://flagcdn.com/w20/jp.png" alt="日本語" class="w-5 h-5 mr-2" />
        日本語
      </button>
    </div>
  {/if}
</div>
