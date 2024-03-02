# Installation

If starting a new project it is recommended you use the Nuxtus boilerplate as this will set up everything for you. Existing projects can add Nuxtus to their project by following the [instructions below](#existing-project).

## New project

> If using any database other than SQLite, you will need to have this running and configured before installing Nuxtus.

```bash
npx create-nuxtus app-name
```
Replace app-name with the name of your project.

> Nuxtus requires Node 20.

Your project will contain 2 folders server (Directus) and client (Nuxt).

### Directus

> If Nuxt is not using `http://localhost:3000` update NUXT_SERVER in the `server/.env` file.

You can access the Directus admin via `http://localhost:8055`.

### Nuxt

> If Directus is not using `http://localhost:8055` update DIRECTUS_SERVER in the `client/.env` file.

Your Nuxt page should automatically open in your default browser, alternatively visit `http://localhost:3000`.

For more details on using Nuxtus see [the using Nuxtus section](using-nuxtus.md) of these docs.

## Existing project

1. [Install Directus Extension](directus-extension.md)
2. [Install Nuxt Module](nuxt-module.md)
3. Add the following environment variables to your `.env` file in your Nuxt project:
	```bash
	DIRECTUS_URL="http://localhost:8055"
	NUXTUS_DIRECTUS_ADMIN_EMAIL="admin@example.com"
	NUXTUS_DIRECTUS_ADMIN_PASSWORD="PASSWORD"
	NUXTUS_DIRECTUS_AUTH=true
	NUXTUS_DIRECTUS_STATIC_TOKEN="STATIC TOKEN FROM DIRECTUS"
	```
4. Update your `nuxt.config.ts` with the following:
   ```ts
   runtimeConfig: {
		nuxtus: {
			directus: {
				email: process.env.NUXTUS_DIRECTUS_ADMIN_EMAIL,
				password: process.env.NUXTUS_DIRECTUS_ADMIN_PASSWORD,
				token: process.env.NUXTUS_DIRECTUS_STATIC_TOKEN || null,
			},
		},
		public: {
			nuxtus: {
				authDirectus: process.env.NUXTUS_DIRECTUS_AUTH === "true",
				// If you are not using Nuxt SSR then these credentials will be public, give user read one access
				directus: {
					url: process.env.DIRECTUS_URL || "http://localhost:3000",
				},
			},
		},
	},
   ```