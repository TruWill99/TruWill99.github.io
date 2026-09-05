import { defineConfig, fontProviders } from "astro/config";

export default defineConfig({
  site: 'https://TruWill99.github.io',
  outDir: './dist',
  
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "JetBrains Mono", // Matches the Fontsource package name
      cssVariable: "--font-jetbrains", // This creates a CSS variable
    },
  ],
});
