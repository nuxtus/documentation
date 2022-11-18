# Deployment

By default Directus is configured to accept CORS from any origin. Nuxtus suggests modifying this for your production deployment.

If you haven't already, change the default admin email and password to something more secure or switch to [static token authentication](auth.md).

> IMPORTANT: If you choose to use user login credentials to authenticate to Directus,  make sure that account only has READ access to the Directus Collections you want to expose to your Nuxtus instance. As these credentials may be stored in the client code.

Remove the Nuxtus hook extension by deleting the folder `server/extensions/hooks/nuxtus-hook` from your Directus project.

You can remove the Nuxtus module from Nuxt as it will not be used in production.