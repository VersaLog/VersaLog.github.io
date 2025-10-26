import Home from "./routes/Home.svelte";
import Docs from "./routes/Docs.svelte";
import About from "./routes/About.svelte";

export const routes = {
  "/": Home,
  "/docs": Docs,
  "/about": About
};
