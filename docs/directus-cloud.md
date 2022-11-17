# Directus Cloud

Nuxtus can be used with a local copy of `Directus` or the cloud hosted version of [Directus Cloud](https://directus.cloud/). To get started you need to have an existing `Directus Cloud` account [correctly configured](#configuring-directus) and then select the "Directus Cloud" option when [creating a new Nuxtus project](README.md#new-project).

## Configuring Directus

Currently you can't add third-party extensions to a `Directus Cloud` project so you will need to do this manually.

1. Login to your [Directus Cloud](https://directus.cloud/) account.
2. Create a new project (or select an existing one). - If creating a new project your credentials will be emailed to you. You will need these to configure Nuxtus.
3. If creating a new `Nuxtus` project from scratch now run `npx create-nuxtus app-name` and complete `Nuxtus` installation. Alternatively, follow the instructions below for [manually switching to Nuxtus Cloud](#manually-switching-to-nuxtus-cloud)
4. (optional, but recommended) Edit `./client/nuxtus.config.ts` and add `localtunnel: { subdomain: 'anOriginalName' }` so you always get the same localtunnel subdomain. Otherwise, you will need to update the Nuxtus URL in your Flows each time you restart the local Nuxt server.
5. Login to your Directus project
6. Click on Settings > Flows and `Create Flow`
7. Fill in the flow details, anything will do here but name it something like `Nuxtus - Create Collection` so you can easily identify it later.
8. Click the right arrow to continue and then select `Event Hook`
9. For `type` select `Action (non-blocking)`
10. Then select `items.create` from the `Scope` dropdown
11. Select `Directus Collections` from the Collections list
12. Then click the tick to save the flow.
13. On the flow diagram screen click the + icon at the end of the arrow coming out of the `Event Hook` box we just created.
14. Enter Name: `Nuxtus create` then select `Webhook / Request URL`
15. Change the `method` to `POST` and paste the external Nuxt URL (from step 3 above or step 4 from [manually switching to Nuxtus Cloud](#manually-switching-to-nuxtus-cloud)) into the `URL` field and add `/api/directus/collection` to the end. For example: `https://some-random-string.loca.lt/api/directus/collection`
16. Add a header with a header of `Bypass-Tunnel-Reminder` and a value of `true` (the value can actually be anything)
17. In the `Request Body` textarea enter 
::: v-pre
`{{ $trigger.payload }}`
:::
then click the tick top right.

18. Click the tick again to save the entire flow.

Now we have a flow that will tell Nuxt every time you create a new collection in Directus. Next we need to make another flow to let Nuxt know when fields are created, added or deleted to update the Typescript types.

1. Click on Settings > Flows and `Create Flow`
2. Name this Flow `Nuxtus - Update Types` (the rest of the fields can be anything). Click right arrow.
3. Select `Event Hook` and `Action (Non-blocking)`
4. For scope select `items.create` and `items.update` and `items.delete`
5. For "Collections" choose `Directus Fields` then click the tick at the top right
6. Click plus and then select `Webhook / Request URL`
7. Change the `method` to `POST` and paste the external Nuxt URL (from step 3 above or step 4 from [manually switching to Nuxtus Cloud](#manually-switching-to-nuxtus-cloud)) into the `URL` field and add `/api/directus/field` to the end. For example: `https://some-random-string.loca.lt/api/directus/field`
8. Add a header with a header of `Bypass-Tunnel-Reminder` and a value of `true` (the value can actually be anything)
9. In the `Request Body` textarea enter 
::: v-pre
`{{ $trigger.payload }}`
::: 
then click the tick top right.
10. Click the tick again to save the entire flow.

That's it! You can now create Collections in Directus Cloud and have fully typed pages appear in your local Nuxt environment!

## Manually switching to Nuxtus Cloud

If you already have a Nuxtus project and want to switch to using Directus Cloud you can do this manually.

1. Edit `/client/.env` and update the `DIRECTUS_URL` to your `Directus Cloud` project URL and the email/password to yours.
> Encase the password in double quotes ("'s) to avoid special characters not being sent
2. [Install the `@nuxtus/nuxt-localtunnel`](localtunnel.md#installation)
3. Start Nuxt in development mode `npm run dev`. Make note of the external URL provided.
4. Continue with the [Configuring Directus](#configuring-directus) steps above.