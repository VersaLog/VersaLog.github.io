<script>
  import { _ } from 'svelte-i18n';
  const t = _;

  const icons = {
    python: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor" class="w-12 h-12">
        <path d="M63.9 0C28.6 0 33 20.3 33 20.3v18.6h31.4v5.6H24.9S0 42.5 0 78.3c0 35.8 21.7 34.6 21.7 34.6h12.8V93.5s-.7-14.1 14-14.1h23.9s13.3.2 13.3-12.6V12.6S89.1 0 63.9 0zM48 8.7a5.8 5.8 0 1 1 0 11.6 5.8 5.8 0 0 1 0-11.6zM64.1 128c35.3 0 30.9-20.3 30.9-20.3v-18.6H63.6v-5.6h39.5s24.9 2 24.9-33.8C128 13.9 106.3 15.1 106.3 15.1h-12.8v19.4s.7 14.1-14 14.1H55.6s-13.3-.2-13.3 12.6v54.2S38.9 128 64.1 128zM79.9 119.3a5.8 5.8 0 1 1 0-11.6 5.8 5.8 0 0 1 0 11.6z"/>
      </svg>`,
    javascript: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor" class="w-12 h-12">
        <path d="M1.408 1.408h125.184v125.185H1.408z" fill="#f7df1e"/>
        <path d="M85.255 107.77c2.477 4.045 5.69 7.018 11.38 7.018 4.787 0 7.84-2.393 7.84-5.694 0-3.958-3.137-5.36-8.418-7.654l-2.895-1.243c-8.355-3.557-13.91-8.016-13.91-17.46 0-8.705 6.633-15.33 16.98-15.33 7.374 0 12.676 2.565 16.506 9.285l-9.035 5.81c-1.988-3.557-4.134-4.96-7.47-4.96-3.404 0-5.565 2.16-5.565 4.96 0 3.472 2.16 4.875 7.155 7.017l2.894 1.243c9.826 4.214 15.38 8.528 15.38 18.24 0 10.47-8.23 16.217-19.27 16.217-10.8 0-17.782-5.145-21.18-11.867zm-43.25 1.028c2.31 4.086 4.414 7.545 9.35 7.545 4.786 0 7.812-1.867 7.812-9.13V56.877h10.8v50.72c0 11.16-6.543 16.217-16.094 16.217-8.63 0-13.623-4.479-16.18-9.9z"/>
      </svg>`,
    rust: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor" class="w-12 h-12">
        <path d="M64 10L8 64l56 54 56-54L64 10zm0 12.3l44.6 41.7L64 105.7 19.4 64 64 22.3zM58 38v8h12v-8H58zm-8 12v8h28v-8H50zm-8 12v8h44v-8H42zm-8 12v8h60v-8H34z"/>
      </svg>`,
    go: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor" class="w-12 h-12">
        <path d="M64 12C33.1 12 8 37.1 8 68s25.1 56 56 56 56-25.1 56-56S94.9 12 64 12zm0 10c25.4 0 46 20.6 46 46s-20.6 46-46 46S18 93.4 18 68s20.6-46 46-46zM54 48a6 6 0 110 12 6 6 0 010-12zm20 0a6 6 0 110 12 6 6 0 010-12zm-10 30c6.6 0 12-3.6 12-8H52c0 4.4 5.4 8 12 8z"/>
      </svg>`,
    ruby: `
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="currentColor" class="w-12 h-12">
        <path d="M64 4L8 44l56 80 56-80L64 4zm0 16l36 24-36 56-36-56 36-24z"/>
      </svg>`
  };

  const languages = [
    { name: "Python", path: "#/docs/python", icon: icons.python, color: "from-green-400 to-blue-500" },
    { name: "JavaScript", path: "#/docs/javascript", icon: icons.javascript, color: "from-yellow-400 to-orange-500" },
    { name: "Rust", path: "#/docs/rust", icon: icons.rust, color: "from-orange-500 to-red-600" },
    { name: "Go", path: "#/docs/go", icon: icons.go, color: "from-sky-400 to-blue-600" },
    { name: "Ruby", path: "#/docs/ruby", icon: icons.ruby, color: "from-pink-400 to-red-500" },
  ];
</script>

<div class="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4 py-12">
  <h1 class="text-5xl font-extrabold mb-6 neon-text">📘 {$t('docs')}</h1>
  <p class="text-gray-400 mb-12 text-center max-w-2xl text-lg md:text-xl">
    VersaLog supports multiple programming languages.<br />
    Choose your preferred language to view its documentation.
  </p>

  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-5xl">
    {#each languages as lang}
      <a
        href={lang.path}
        class="p-8 rounded-2xl bg-gradient-to-br {lang.color} text-white shadow-lg transform hover:scale-105 hover:shadow-[0_0_20px_#00ffff90] transition duration-300 ease-in-out text-center border border-transparent hover:border-cyan-400"
      >
        <div class="flex justify-center mb-3 opacity-90 hover:opacity-100 transition">
          {@html lang.icon}
        </div>
        <h2 class="text-2xl font-semibold mt-2 drop-shadow-md">{lang.name}</h2>
      </a>
    {/each}
  </div>
</div>

<style>
  .neon-text {
    text-shadow:
      0 0 6px #00ffff,
      0 0 10px #00ffff,
      0 0 20px #00ffff,
      0 0 40px #00ffff;
  }
</style>
