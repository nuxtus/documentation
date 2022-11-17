# Directus extension

A Directus webhook extension that handles the automatic creation of Nuxt pages and types when a new collection is created in Directus.

Calls the Nuxtus /api/directus/collection endpoint when a new collection is created.
Calls the Nuxtus /api/directus/field endpoint when fields are created, updated or deleted.

> The Nuxt module is installed automatically if you are using the Nuxtus boilerplate. If you need to install manually continue reading below.

## Installation

You can install the extension directly from the npm package.

From the `/server/` folder:

```bash
npm install @nuxtus/directus-extension-nuxtus-hook
```

If you haven't already, install the [Nuxtus Nuxt Module](nuxt-module.md) to configure the Nuxt endpoints that will be called by this extension.