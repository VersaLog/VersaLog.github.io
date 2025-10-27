<script>
  import { FaGithub, FaXTwitter, FaQiita, FaDiscord } from 'svelte-icons/fa';
</script>

<div class="relative z-10 text-center">
  <h1 class="text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 text-transparent bg-clip-text animate-glow">
    VersaLog
  </h1>
  <p class="mt-4 text-gray-300 text-lg">Next Generation Logging</p>

  <div class="flex justify-center gap-6 mt-8 text-gray-300 opacity-80 hover:opacity-100 transition">
    <a href="https://github.com/VersaLog" target="_blank" rel="noopener" aria-label="GitHub" class="hover:text-white">
      <FaGithub size="28" />
    </a>
    <a href="https://x.com/logversa81950" target="_blank" rel="noopener" aria-label="X" class="hover:text-white">
      <FaXTwitter size="28" />
    </a>
    <a href="https://qiita.com/organizations/versatile" target="_blank" rel="noopener" aria-label="Qiita" class="hover:text-white">
      <FaQiita size="28" />
    </a>
    <a href="https://discord.gg/MaWeRFxa" target="_blank" rel="noopener" aria-label="Support Server" class="hover:text-white">
      <FaDiscord size="28" />
    </a>
  </div>
</div>

<style>
  @keyframes glow {
    0%, 100% { filter: drop-shadow(0 0 4px rgba(147, 51, 234, 0.7)); }
    50% { filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.9)); }
  }

  .animate-glow {
    animation: glow 3s ease-in-out infinite;
  }
</style>
