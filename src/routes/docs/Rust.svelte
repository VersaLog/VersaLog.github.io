<script>
  import { _ } from 'svelte-i18n';
  const t = _;
  const repoUrl = "https://github.com/VersaLog/VersaLog.rs";

  const rustCode = `
use versalog::VersaLog;

fn main() {
    let logger = VersaLog::new("detailed", false, false);
    logger.info("ok");
    logger.error("err");
    logger.warn("war");
    logger.debug("deb");
    logger.critical("cri");
}
  `;
</script>

<div class="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
  <h1 class="text-4xl font-bold mb-4">🦀 {$t('doc.rust.title')}</h1>
  <p class="text-gray-400 max-w-3xl text-center mb-8">
    {$t('doc.rust.description')}
  </p>

  <div class="bg-gray-900 p-6 rounded-xl shadow-lg w-full max-w-3xl mb-8">
    <h2 class="text-2xl font-semibold mb-2">🧩 {$t('doc.example')}</h2>
    <pre class="bg-gray-800 text-green-300 p-4 rounded-lg overflow-x-auto text-sm">
      {@html rustCode.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
    </pre>
  </div>

  <a href={repoUrl} target="_blank" class="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
    🔗 {$t('doc.view_on_github')}
  </a>
</div>
