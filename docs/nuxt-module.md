# Nuxt Module

The Nuxtus Nuxt Module automates Directus/Nuxt interoperability. It works hand-in-hand with the [Nuxtus Directus Extension](directus-extension.md) by producing server endpoints (available while in development only) that Directus call as a webhook.

> The Nuxt module is installed automatically if you are using the Nuxtus boilerplate. If you need to install manually continue reading below.

## Installation

Install the Nuxtus Nuxt module package:

```bash	
npm install --save-dev @nuxtus/nuxt-module
```

In your nuxt.config.ts file add the modules:

```typescript
{
  modules: [
    '@nuxtus/nuxt-module',
  ],
}
```

If you haven't already, install the [Nuxtus hook for Directus](directus-extension.md) to configure the Directus hooks that will automatically call the endpoints created by this module.

## Configuration

In order for Nuxtus CLI to communicate with Directus you need to provide connection credentials. Create a `.env` file in the root of your **Nuxt project** and add the following lines:

```
# URL of your Directus instance
DIRECTUS_URL=http://localhost:8055
# Directus login credentials
NUXTUS_DIRECTUS_ADMIN_EMAIL=admin@example.com
NUXTUS_DIRECTUS_ADMIN_PASSWORD=password
NUXTUS_DIRECTUS_AUTH=false
```

The nuxt module can be configured using the `nuxtus` property within `nuxt.config.ts`:

```typescript
{
  modules: [
    '@nuxtus/nuxt-module',
  ],
  nuxtus: {
    // nuxtus options here
	authDirectus: true
  },
  directus: {}
}
```

### Config options


| Option         | Description                                                                                                                      | Default value |
| -------------- | -------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| `authDirectus` | By default Nuxtus will try and authenticate to Directus. If your API is public you can set this to false to skip the login step. | true          |

## Usage

When Nuxt is running the plugin will:

1. Automatically log in to Directus
2. Provide you with 2 server endpoints **during development**
   1. POST /api/directus/collection - For automatically creating pages as they are created in Directus
   2. POST /api/directus/field - For updating type information for collections as fields change in Directus

## Development

- Run `npm run dev:prepare` to generate type stubs.
- Use `npm run dev` to start playground in development mode.


