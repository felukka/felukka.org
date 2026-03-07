// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'http://Felukka.org',
	base: '/DOCs',
	integrations: [
		starlight({
			title: 'Felukkaa',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Felukka' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
