<script>
  const dev = {
    name: "kaede",
    role: "Lead Developer of VersaLog",
    bio: "Full-stack developer passionate about open-source, system design, and AI-driven tools.",
    links: {
      github: "https://github.com/kaedeek",
      twitter: "https://x.com/kaede",
      mail: "mailto:example@example.com"
    }
  };
</script>

<div class="max-w-3xl mx-auto px-6 text-center">
  <h2 class="text-4xl font-bold mb-10 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
    About Developer
  </h2>

  <div class="flex flex-col items-center space-y-4">
    <img src="/assets/kaede.png" alt="Developer" class="w-28 h-28 rounded-full ring-4 ring-blue-500/40" />
    <h3 class="text-2xl font-semibold">{dev.name}</h3>
    <p class="text-gray-400">{dev.role}</p>
    <p class="text-gray-500 max-w-md">{dev.bio}</p>

    <div class="flex space-x-6 mt-4 text-xl">
      <a href={dev.links.github} target="_blank" class="hover:text-blue-400">GitHub</a>
      <a href={dev.links.twitter} target="_blank" class="hover:text-blue-400">X</a>
      <a href={dev.links.mail} class="hover:text-blue-400">Email</a>
    </div>
  </div>
</div>
