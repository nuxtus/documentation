export default {
	title: 'Nuxtus',
	description: 'Nuxtus is a suite of utilities and boilerplate for working with Directus and Nuxt and includes Tailwind CSS, TypeScript, and Vite.',
	lastUpdated: true,
	themeConfig: {
		logo: '/logo.svg',
		nav: [
			{ text: 'Website', link: 'https://www.nuxtus.com' },
		],
		sidebar: [
			{
				text: 'Getting Started',
				items: [
					{ text: 'Overview', link: '/' },
					{ text: 'Using Nuxtus', link: '/using-nuxtus' },
				]
			},
			{
				text: 'Components',
				items: [
					{ text: 'CLI', link: '/cli' },
					{ text: 'Directus extension', link: '/directus-extension' },
					{ text: 'Nuxt module', link: '/nuxt-module' },
					{ text: 'Localtunnel', link: '/localtunnel' },
				]
			},
			{
				text: 'Directus Cloud',
				items: [
					{ text: 'How to', link: '/directus-cloud' },
				]
			},
			{
				text: 'Deployment',
				items: [
					{ text: 'Preparation', link: '/deployment' },
				]
			},
			{
				text: 'Upgrade',
				items: [
					{ text: 'How to', link: '/upgrade' },
				]
			},
			
		],
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/nuxtus/nuxtus' },
			{ icon: 'twitter', link: 'https://twitter.com/nuxtusjs' }
		],
		footer: {
			message: 'Released under the MIT License.',
			copyright: 'Copyright © 2022-present Craig Harman'
		},
		editLink: {
			pattern: 'https://github.com/nuxtus/documentation/edit/main/docs/:path',
			text: 'Edit this page on GitHub'
		}
	}
}