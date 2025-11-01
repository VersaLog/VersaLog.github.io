<script>
  import { _ } from 'svelte-i18n';
  const t = _;
  const repoUrl = "https://github.com/VersaLog/VersaLog.rs";

  const rustCode = `
use versalog::VersaLog;

fn main() {
    let logger = VersaLog::new(
        "detailed",
        false,
        false,
        "VersaLog",
        false,
        false,
        false,
        vec![],
        false,
        false,
    );

    logger.info("info");
    logger.error("error");
    logger.warn("warn");
    logger.debug("debug");
    logger.critical("critical");
}
  `;
</script>

<div class="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
  <h1 class="text-4xl font-bold mb-4 flex items-center gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-orange-500" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L1.5 9l1.5 13h18l1.5-13L12 2zM11 17H9v-4h2v4zm4 0h-2v-4h2v4z"/>
    </svg>
    {$t('doc.rust.title')}
  </h1>

  <p class="text-gray-400 max-w-3xl text-center mb-8">
    {$t('doc.rust.description')}
  </p>

  <div class="bg-gray-900 p-6 rounded-xl shadow-lg w-full max-w-3xl mb-8">
    <h2 class="text-2xl font-semibold mb-2 flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
      </svg>
      {$t('doc.example')}
    </h2>

    <pre class="bg-gray-800 text-green-300 p-4 rounded-lg overflow-x-auto text-sm">
      {@html rustCode.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
    </pre>
  </div>

  <a href={repoUrl} target="_blank" class="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold flex items-center gap-2 transition">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.85 10.92.57.1.78-.25.78-.56v-2.02c-3.2.7-3.88-1.38-3.88-1.38-.52-1.31-1.28-1.66-1.28-1.66-1.05-.72.08-.7.08-.7 1.17.08 1.78 1.2 1.78 1.2 1.03 1.77 2.71 1.26 3.37.96.1-.75.4-1.26.72-1.55-2.56-.29-5.26-1.28-5.26-5.68 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.12-3.04 0 0 .97-.31 3.18 1.18A11 11 0 0 1 12 6.8a11 11 0 0 1 2.9.39c2.2-1.49 3.17-1.18 3.17-1.18.64 1.58.24 2.75.12 3.04.75.81 1.2 1.84 1.2 3.1 0 4.41-2.71 5.38-5.29 5.66.42.36.8 1.07.8 2.16v3.2c0 .31.21.67.79.56A10.99 10.99 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/>
    </svg>
    {$t('doc.view_on_github')}
  </a>
</div>
