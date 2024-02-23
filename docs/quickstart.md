# Quickstart

This is a quick overview of getting up and running with Nuxtus. For more details read the [using Nuxtus](./using-nuxtus.md) section.

## Running Nuxtus

To start both the Directus (server) and Nuxt (client) simply run this command from the root of your project:

```bash
npm start
```

## Set permissions

### User token
If using a user token create/select a Directus user and create a static token in <a href="http://localhost:8055/admin/users/" target="_blank" rel="noreferrer">their user profile</a>. Scroll down till you see "token" and click add. Do not forget to save the user with the new token.

Copy the created token into `/client/.env` file and change the auth setting to true:

```bash
NUXTUS_DIRECTUS_AUTH=true
NUXTUS_DIRECTUS_STATIC_TOKEN="TOKEN HERE"
```
Each time you create a collection make sure to assign "read" permissions to the role associated with the token (if not using an admin account)

### Public API endpoints

This choice requires no additional set up. Simply assign each collection "read" permissions for each collection as they are created.

## Get started

Create collections in Directus and assign permissions (as above). These collections will automatically have pages created in your Nuxt client app.

They are viewable via `http://localhost:3000/collection_name` and the source code for each page is `/client/pages/collection_name`.