import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'

import svelte from '@astrojs/svelte'

// https://astro.build/config
import mdx from '@astrojs/mdx'

// Plugins for MDX
import expressiveCode from 'astro-expressive-code'
import sectionize from 'remark-sectionize'

// astro-icon integration
import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	site: 'https://website-six-drab-67.vercel.app/',
	markdown: {
		remarkPlugins: [sectionize]
	},
	integrations: [icon(), tailwind(), svelte(), expressiveCode(), mdx()],
	trailingSlash: 'never'
})
