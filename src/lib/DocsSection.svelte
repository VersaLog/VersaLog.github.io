<script>
  const docs = [
    { title: "Getting Started", desc: "Set up VersaLog quickly in your project.", link: "#" },
    { title: "API Reference", desc: "Explore detailed API usage and options.", link: "#" },
    { title: "Examples", desc: "Real-world examples to help you integrate fast.", link: "#" },
  ];
</script>

<div class="max-w-6xl mx-auto px-6 text-center">
  <h2 class="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
    Documentation
  </h2>

  <div class="grid md:grid-cols-3 gap-8">
    {#each docs as doc}
      <a href={doc.link} class="group block bg-gray-900/40 hover:bg-gray-800/70 rounded-2xl p-6 transition-all shadow-md hover:shadow-blue-500/20">
        <h3 class="text-xl font-semibold mb-2 text-blue-400 group-hover:text-blue-300">{doc.title}</h3>
        <p class="text-gray-400">{doc.desc}</p>
      </a>
    {/each}
  </div>
</div>
