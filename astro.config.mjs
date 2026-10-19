import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	site: "https://felukka.org",
	base: "/",
	integrations: [react()],
	vite: {
		plugins: [tailwindcss("./src/styles/global.css")],
	},
});
