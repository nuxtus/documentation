# Using Nuxtus

Once Nuxtus is successfully [installed](/#installation) you just need to start your Directus and Nuxt development servers.

If you are using the Nuxtus boilerplate then we have included a start script for you. From the root of your project simply run:

```bash
npm start
```

This will start both Directus and Nuxt and output will appear in the same console.

If you added Nuxtus to an existing project, you will need to continue using your current process for starting Directus and Nuxt.

## Permissions

Before you start generating pages it is important to understand and make a decision on the permissions to access your Directus data. Nuxtus will automatically retrieve Directus data via:

1. No authentication: This requires that you change the "read" permissions for each collection you want a Nuxt page for to be added to the ["public" role in Directus](https://docs.directus.io/user-guide/user-management/permissions.html). This requires no configuration in Nuxtus, but will require you to manually add each new collection to the "Public" role as they are created.
2. Static token authentication: If you don't want your data to be publicly accessible via an API you can provide Nuxtus with a [static token](https://docs.directus.io/user-guide/user-management/user-directory.html#edit-user-details) associated with a user that then has a role with the permissions to "read" collections you want to make available in Nuxt. This token is used by the Nuxt server either during render or build time depending on your project settings.
   
> Note: A Directus admin account is also required, this is used for type generation during development only and is not required in production.


### Setting up permissions

Once you have chosen a technique above, finalise your configuration as follows:

### Public API

No further set up is required. Just remember to assign each collection "read" permissions in the Public role as you create them otherwise Nuxtus will not be able to access the collection's contents.

#### Static tokens

If using a user token create/select a Directus user and create a static token in <a href="http://localhost:8055/admin/users/" target="_blank" rel="noreferrer">their user profile</a>. Scroll down till you see "token" and click add. Do not forget to save the user with the new token.

Copy the created token into `/client/.env` file and change the auth setting to true:

```bash
NUXTUS_DIRECTUS_AUTH=true
NUXTUS_DIRECTUS_STATIC_TOKEN="TOKEN HERE"
```

Then assign "read" permissions in this user's role as you create collections otherwise Nuxtus will not be able to access the collection's contents.

## Creating Nuxt pages

By default Nuxtus will automatically create Nuxt pages for you when you create a Directus `collection` thanks to the [Nuxtus Directus plugin](https://github.com/nuxtus/hook) and the [Nuxtus Nuxt Module](https://github.com/nuxtus/nuxt-module).

1. Ensure that both Directus and Nuxt are running.
2. [Login to Directus](http://0.0.0.0:8055/admin/login) using the email/password you supplied during creation.
3. Create a Directus `collection` [as normal](https://docs.directus.io/configuration/data-model/#creating-a-collection).
4. Nuxt pages will be created in `client/pages` and available at the Nuxtus URL `http://localhost:3000/<collectionName>`. 

> You can manually create pages from existing collections using the [Nuxtus CLI](/cli)

## Using Directus data

Nuxtus will create a folder in your Nuxt `/pages/` folder with the name of your collection and `.vue` files inside.

Normal collections will generated with 2 files (a listing or index page and a display or details page), while singletons will contain one (a page displaying the singleton).

Regardless of the collection type, pages created by Nuxtus fetch Directus data in the Nuxt `setup` lifecycle hook using [nuxt-directus](https://nuxt-directus.netlify.app/) for Directus API interaction.

> If you have the Directus API permissions set to public you can set `authDirectus` to false in `nuxt.config.ts`

In this example we have created a `posts` collection in Directus:

```typescript{6-11}
<script setup lang="ts">
  import type { Query } from "@directus/sdk"
  import type { components } from "../../interfaces/nuxtus"
  type TestNuxtus = components["schemas"]["ItemsTestNuxtus"]
  const { $directus, $readItems, $checkError } = useNuxtApp()

  const query: Query<components, TestNuxtus> = {
    // Add your filters and query customisations here
  }

  const { data, error } = useAsyncData<TestNuxtus[] | null>('test_nuxtus', () => {
    return $directus.request($readItems('test_nuxtus', query))
  })
</script>
```

> Because OpenAPI schemas may have invalid TypeScript characters as names, the square brackets are a safe way to access every property.

Once created you can edit the generated `.vue` files to customise the data retrieved using [nuxt-directus](https://nuxt-directus.netlify.app/) such as [filters](https://nuxt-directus.netlify.app/usage/useDirectusItems). 

[Tailwind CSS](https://tailwindcss.com) is pre-installed so you can start styling pages straight out of the box.

## Deleting collections

Nuxtus will automatically remove any Nuxt pages it has created if you delete a corresponding collection in Directus.

You can also manually delete pages simply by deleting the folder in `/client/pages/` corresponding to the collection you wish to delete.