<script>
  import { _ } from 'svelte-i18n';
  const t = _;
  const repoUrl = "https://github.com/VersaLog/VersaLog.go";

  const goIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor" class="w-12 h-12 text-sky-400">
      <path d="M61.3 117.9H11.4c-3.6 0-6.7-2.8-6.7-6.3 0-3.4 3.1-6.3 6.7-6.3h49.9c3.6 0 6.7 2.8 6.7 6.3-.1 3.5-3.1 6.3-6.7 6.3zM2.7 134.2h66.8c3.6 0 6.7 2.8 6.7 6.3 0 3.4-3.1 6.3-6.7 6.3H2.7c-3.6 0-6.7-2.8-6.7-6.3 0-3.5 3.1-6.3 6.7-6.3zM33.8 150.5h49.9c3.6 0 6.7 2.8 6.7 6.3 0 3.4-3.1 6.3-6.7 6.3H33.8c-3.6 0-6.7-2.8-6.7-6.3.1-3.5 3.1-6.3 6.7-6.3zM128.9 159.2c-14.8 0-27.4-4.6-37.7-13.7-9.8-8.6-15.8-19.9-17.7-33.1-2-13.8 1-26.2 8.9-37 9.5-12.7 23.4-19.7 41-21 15.2-1.1 29.5 2.3 41.4 9.6 2.7 1.6 3.3 5.4 1.3 8.1l-8.3 10.8c-1.6 2.1-4.5 2.6-6.7 1.1-7.8-4.9-16.3-7.4-25.4-7.4-10.4 0-19 3.2-25.5 9.6-5.9 5.7-8.8 13.5-8.1 22.7.7 9.8 4.9 17.6 12.6 23.5 7.5 5.7 16.5 8.5 27.1 8.5 10.6 0 19.4-2.8 26.1-8.4 6.5-5.3 10.2-12.8 10.8-22.2h-33.2c-3.6 0-6.7-2.8-6.7-6.3 0-3.4 3.1-6.3 6.7-6.3h47.7c3.7 0 6.7 2.8 6.7 6.3 0 19.4-6 34.5-17.8 45.1-11.5 10.4-27.2 15.9-45.7 15.9zM212.2 159.2c-14.8 0-27.4-4.6-37.7-13.7-9.8-8.6-15.8-19.9-17.7-33.1-2-13.8 1-26.2 8.9-37 9.5-12.7 23.4-19.7 41-21 15.2-1.1 29.5 2.3 41.4 9.6 2.7 1.6 3.3 5.4 1.3 8.1l-8.3 10.8c-1.6 2.1-4.5 2.6-6.7 1.1-7.8-4.9-16.3-7.4-25.4-7.4-10.4 0-19 3.2-25.5 9.6-5.9 5.7-8.8 13.5-8.1 22.7.7 9.8 4.9 17.6 12.6 23.5 7.5 5.7 16.5 8.5 27.1 8.5 10.6 0 19.4-2.8 26.1-8.4 6.5-5.3 10.2-12.8 10.8-22.2h-33.2c-3.6 0-6.7-2.8-6.7-6.3 0-3.4 3.1-6.3 6.7-6.3h47.7c3.7 0 6.7 2.8 6.7 6.3 0 19.4-6 34.5-17.8 45.1-11.4 10.4-27.1 15.9-45.6 15.9z"/>
    </svg>
  `;

  const goCode = `
package main

import "github.com/VersaLog/VersaLog"

func main() {
    logger := versalog.NewVersaLog(
        "detailed",
        false, // showFile
        false, // showTag
        "VersaLog",
        false,
        false,
        false,
        []string{},
        false,
        false,
    )

    logger.Info("info")
    logger.Error("error")
    logger.Warn("warn")
    logger.Debug("debug")
    logger.Critical("critical")
}
  `;
</script>

<div class="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6 py-12">
  <div class="flex items-center space-x-3 mb-4">
    <div class="w-12 h-12 text-sky-400" innerHTML={goIcon}></div>
    <h1 class="text-4xl font-bold">{$t('doc.go.title')}</h1>
  </div>

  <p class="text-gray-400 max-w-3xl text-center mb-8">
    {$t('doc.go.description')}
  </p>

  <div class="bg-gray-900 p-6 rounded-xl shadow-lg w-full max-w-3xl mb-8">
    <h2 class="text-2xl font-semibold mb-2">🧩 {$t('doc.example')}</h2>
    <pre class="bg-gray-800 text-green-300 p-4 rounded-lg overflow-x-auto text-sm">
      {@html goCode.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
    </pre>
  </div>

  <a href={repoUrl} target="_blank" class="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition">
    🔗 {$t('doc.view_on_github')}
  </a>
</div>
