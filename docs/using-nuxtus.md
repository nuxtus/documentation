# Using Nuxtus

Once Nuxtus is successfully [installed](/#installation) you just need to start your Directus and Nuxt development servers.

If you are using the Nuxtus boilerplate then we have included a start script for you. From the root of your project simply run:

```bash
npm start
```

This will start both Directus and Nuxt and output will appear in the same console.

If you added Nuxtus to an existing project, you will need to continue using your current process for starting Directus and Nuxt.

## Creating Nuxt pages

By default Nuxtus will automatically create Nuxt pages for you when you create a Directus `collection` thanks to the [Nuxtus Directus plugin](https://github.com/nuxtus/hook) and the [Nuxtus Nuxt Module](https://github.com/nuxtus/nuxt-module).

1. Ensure that both Directus and Nuxt are running.
2. [Login to Directus](http://0.0.0.0:8055/admin/login) using the email/password you supplied during creation.
3. Create a Directus `collection` [as normal](https://docs.directus.io/configuration/data-model/#creating-a-collection).
4. Nuxt pages will be created in `client/pages` and available at the Nuxtus URL `http://localhost:3000/<collectionName>`. 

> You can manually create pages from existing collections using the [Nuxtus CLI](CLI/)

## Using Directus data

Nuxtus will create a folder in your Nuxt `/pages/` folder with the name of your collection and `.vue` files inside.

Normal collections will generated with 2 files (a listing or index page and a display or details page), while singletons will contain one (a page displaying the singleton).

Regardless of the collection type, pages created by Nuxtus fetch Directus data in the Nuxt `setup` lifecycle hook using [nuxt-directus](https://nuxt-directus.netlify.app/) for Directus API interaction.

> If you have the Directus API permissions set to public you can set `authDirectus` to false in `nuxt.config.ts`

In this example we have created a `posts` collection in Directus:

```typescript{6-11}
<script setup lang="ts">
  import { components } from "../../interfaces/nuxtus";
  type posts = components["schemas"]["Itemsposts"];
  const { getItems } = useDirectusItems();
  const filters = {/* Put your filters here */};
  const items: posts[] = await getItems<any>({
    collection: "posts",
    params: {
      filter: filters,
    }
  });
</script>
```

> Because OpenAPI schemas may have invalid TypeScript characters as names, the square brackets are a safe way to access every property.

Once created you can edit the generated `.vue` files to customise the data retrieved using [nuxt-directus](https://nuxt-directus.netlify.app/) such as [filters](https://nuxt-directus.netlify.app/usage/useDirectusItems). 

[Tailwind CSS](https://tailwindcss.com) is pre-installed so you can start styling pages straight out of the box.

## Deleting collections

Nuxtus will automatically remove any Nuxt pages it has created if you delete a corresponding collection in Directus.

You can also manually delete pages simply by deleting the folder in `/client/pages/` corresponding to the collection you wish to delete.