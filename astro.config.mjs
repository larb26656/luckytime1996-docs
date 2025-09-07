// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';
import starlightThemeRapide from 'starlight-theme-rapide';

// https://astro.build/config
export default defineConfig({
  site: "https://docs.luckytime1996.dev",
  integrations: [
      starlight({
          title: 'Docs',
          logo: {
            src: '/public/favicon.png',
          },
          social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/larb26656' }],
          sidebar: [
              {
                  label: 'Cheetsheet',
                  autogenerate: { directory: 'cheatsheet' },
              },
          ],
          customCss: [
            './src/styles/global.css',
          ],
          plugins: [starlightThemeRapide()],
      }),
	],

  vite: {
    plugins: [tailwindcss()],
  },
});