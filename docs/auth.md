# Authentication

By default Nuxtus creates a Directus admin user and uses these credentials to authenticate with Directus. 

These details are stored in `/client/.env` as:

```
NUXTUS_DIRECTUS_ADMIN_EMAIL=admin@example.com
NUXTUS_DIRECTUS_ADMIN_PASSWORD=password
```

You may want to use a [static token](https://docs.directus.io/reference/authentication.html) instead. Fortunately Nuxtus makes this easy with the [Nuxtus CLI](cli.md). Make sure your Nuxtus instance is running and then, from your `/client` folder run:

```bash
nuxtus token
```

This will generate a static token in Directus and replace your email/password credentials in the .env file with the token:

```
NUXTUS_DIRECTUS_STATIC_TOKEN=<RANDOM_TOKEN>
```