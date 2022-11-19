# Overview

Nuxtus is an open-source boilerplate and suite of utilities to make working with [Directus](https://directus.io) and [Nuxt](https://nuxtjs.org) easy.

The end result can be a static website or dynamically pull data from Directus depending on your preference.

## Features

- [Directus](https://directus.io)
- [Nuxt](https://nuxtjs.org)
  - [Tailwind CSS](https://tailwindcss.nuxtjs.org/)
  - [Google Fonts](https://github.com/nuxt-community/google-fonts-module)
  - [Nuxtus CLI](https://github.com/nuxtus/cli)
  - [Nuxt-Directus](https://nuxt-directus.netlify.app/)
  - Automatically generated Typescript types

## Installation

If starting a new project it is recommended you use the Nuxtus boilerplate as this will set up everything for you. Existing projects can add Nuxtus to their project by following the [instructions below](#existing-project).

### New project

> If using any database other than SQLite, you will need to have this running and configured before installing Nuxtus.

```bash
npx create-nuxtus app-name
```
Replace app-name with the name of your project.

> Nuxtus requires Node 16 (the minimum requirement for Directus).

Your project will contain 2 folders server (Directus) and client (Nuxt).

### Directus

> If Nuxt is not using `http://localhost:3000` update NUXT_SERVER in the `server/.env` file.

You can access the Directus admin via <a href="http://localhost:8055" target="_blank" rel="noreferrer">http://localhost:8055</a>.

### Nuxt

> If Directus is not using `http://localhost:8055` update DIRECTUS_SERVER in the `client/.env` file.

Your Nuxt page should automatically open in your default browser, alternatively visit `http://localhost:3000`.

For more details on using Nuxtus see [the using Nuxtus section](using-nuxtus.md) of these docs.

### Existing project

1. [Install Directus Extention](directus-extension.md)
2. [Install Nuxt Module](nuxt-module.md)

## Acknowledgements

Nuxtus wouldn't be possible without the following amazing technologies:

* [Directus](https://directus.io)
* [Nuxt](https://nuxt.js.org)
* [Typescript](https://tailwindcss.com)
* [Nuxt-Directus](https://nuxt-directus.netlify.app/)
* [OpenApi Typescript](https://www.npmjs.com/package/openapi-typescript)
