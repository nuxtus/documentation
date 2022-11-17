# Deployment

By default Directus is configured to accept CORS from any origin. Nuxtus suggests modifying this for your production deployment.

If you haven't already, change the default admin email and password to something more secure or switch to [static token authentication](auth.md).

Remove the Nuxtus hook extension by deleting the folder `server/extensions/hooks/nuxtus-hook` from your Directus project.

You can remove the Nuxtus module from Nuxt as it will not be used in production.