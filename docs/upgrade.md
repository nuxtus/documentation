# Upgrade

Once deployed you can upgrade to the latest version of Nuxtus by individually updating the associated components. You can find your current version of Nuxtus by looking in the `.version` file in the root of your project.

> Always remember to manually update the version number when you do manual updates so you know which version you are on.

## Nuxt update

Edit `client/package.json` and change `nuxt` version under `devDependencies` to the latest version then run `npm install`.

## Directus update

Edit `server/package.json` and change `directus` version under `dependencies` to the latest version then run:

```bash
npm install
npm run cli bootstrap
```

> Some updates require configuration changes which will differ depending on the version of Nuxtus you are using. The steps for these changes are listed below. If you are upgrading multiple versions start with the immediate next version and continue through all steps until you are up to date.

## 1.3.0 > 1.3.1

1. [Update Nuxt](#nuxt-update) to `3.0.0-rc.8`
2. [Update Directus](#directus-update) to `9.15.1` (optional)
3. In package.json upgrade `nuxt-directus` to `^2.3.0` and `npm install`
4. Edit `client/nuxt.config.ts` and add:

```typescript
build: {
	transpile: ['@heroicons/vue']
}
```

## 1.4.0 > 1.5.0

1. [Update Directus](#directus-update) to `9.16.1`

## 1.5.0 > 1.5.1

1. Update @nuxtus/cli to 1.3.0 in `client/package.json` and `npm install`
2. Update @nuxtus/nuxt-module to 1.0.4 in `client/package.json` and `npm install`
3. Update @nuxtus/directus-extension-nuxtus-hook to 1.2.1 in `server/package.json` and `npm install`. Place `/server/node_moduoles/@nuxtus/directus-extension-nuxtus-hook/dist/index.js` in Directus project `/server/extensions/hooks/nuxtus-hook/`

## 1.5.1 > 1.5.2

1. Update @nuxtus/cli to 1.4.0 in `client/package.json` and `npm install`

## 1.5.2 > 1.6.0

1. Update @nuxtus/nuxt-module to 1.0.5 in `client/package.json`
2. Update "nuxt-directus" to "^3.0.3" in `client/package.json`
3. Update Nuxt to 3.0.0-rc.9 in `client/package.json`
4. `npm install`

## 1.6.0 > 1.7.0

1. Update @nuxtus/nuxt-module to 1.2.0 in `client/package.json` and `npm install`
2. [Download the latest @nuxtus/hook](directus-extension.md) and replace your current version in `/server/extensions/hooks/directus-extension-nuxtus-hook/`

## 1.7.0 > 1.8.0

1. Update @nuxtus/nuxt-module to "1.2.1" in `client/package.json`
2. Update @nuxtus/cli to "1.5.0" in `client/package.json`
3. `npm install` in `client/`
4. [Download the latest @nuxtus/hook](directus-extension.md) and replace your current version in `/server/extensions/hooks/directus-extension-nuxtus-hook/`
5. Clear all nuxt caches `npx nuxi-edge@latest cleanup`

## 1.8.0 > 1.8.1

1. Update @nuxtjs/google-fonts to "2.0.0" in `client/package.json`
2. In `nuxt.config.ts` remove google-fonts module, so it just looks like this:

```ts
buildModules: [
		"@nuxtjs/tailwindcss",
	],
```
3. Update Nuxt to 3rc13 in `client/package.json`
4. Update "nuxt-directus" to "^3.2.1" in `client/package.json`

## 1.8.0 > 2.0.0

Nuxt 3.0.0 has been released and Nuxtus has been updated to use it. This is a major update and will require some changes to your project.

1. Update Nuxt to 3.0.0 in `client/package.json`
2. Update "nuxt-directus" to "^3.2.2" in `client/package.json`
3. Update @nuxtus/nuxt-module to "2.0.0" in `client/package.json` 
4. Update your `client/nuxt.config.ts` like this:
// TOOD: Fix this to use the + - feature of vitepress

```ts
publicRuntimeConfig: { [!code  --]
	directusEmail: '', [!code  --]
	directusPassword: '', [!code  --]
} [!code  --]
runtimeConfig: { [!code  ++]
	public { [!code  ++]
		nuxtus: { [!code  ++]
			directus: { [!code  ++]
				email: '', [!code  ++]
				password: '' [!code  ++]
			} [!code  ++]
		} [!code  ++]
	} [!code  ++]
} [!code  ++]
```
5. Change the .env variables as follows: (use your Directus credentials)
```
NUXT_PUBLIC_DIRECTUS_EMAIL="{{ email }}" [!code  --]
NUXT_PUBLIC_DIRECTUS_PASSWORD="{{ password }}" [!code  --]
NUXTUS_DIRECTUS_ADMIN_EMAIL=your@email.com [!code  ++]
NUXTUS_DIRECTUS_ADMIN_PASSWORD=<password> [!code  ++]
```

## 2.0.0 > 2.0.1

1. Update @nuxtus/cli to "2.0.0" in `client/package.json`
2. Update @nuxtus/nuxt-module to "2.2.0" in `client/package.json` 

## 2.0.1 > ???

1. If still running Directus 9, [update to Directus 10](https://learndirectus.com/how-to-upgrade-to-v10/)