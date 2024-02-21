import{_ as e,c as t,o as a,a as i}from"./app.ac7b2865.js";const f=JSON.parse('{"title":"Installation","description":"","frontmatter":{},"headers":[{"level":2,"title":"New project","slug":"new-project","link":"#new-project","children":[{"level":3,"title":"Directus","slug":"directus","link":"#directus","children":[]},{"level":3,"title":"Nuxt","slug":"nuxt","link":"#nuxt","children":[]}]},{"level":2,"title":"Existing project","slug":"existing-project","link":"#existing-project","children":[]}],"relativePath":"installation.md","lastUpdated":1708301326000}'),n={name:"installation.md"},o=i(`<h1 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h1><p>If starting a new project it is recommended you use the Nuxtus boilerplate as this will set up everything for you. Existing projects can add Nuxtus to their project by following the <a href="#existing-project">instructions below</a>.</p><h2 id="new-project" tabindex="-1">New project <a class="header-anchor" href="#new-project" aria-hidden="true">#</a></h2><blockquote><p>If using any database other than SQLite, you will need to have this running and configured before installing Nuxtus.</p></blockquote><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npx create-nuxtus app-name</span></span>
<span class="line"></span></code></pre></div><p>Replace app-name with the name of your project.</p><blockquote><p>Nuxtus requires Node 20.</p></blockquote><p>Your project will contain 2 folders server (Directus) and client (Nuxt).</p><h3 id="directus" tabindex="-1">Directus <a class="header-anchor" href="#directus" aria-hidden="true">#</a></h3><blockquote><p>If Nuxt is not using <code>http://localhost:3000</code> update NUXT_SERVER in the <code>server/.env</code> file.</p></blockquote><p>You can access the Directus admin via <code>http://localhost:8055</code>.</p><h3 id="nuxt" tabindex="-1">Nuxt <a class="header-anchor" href="#nuxt" aria-hidden="true">#</a></h3><blockquote><p>If Directus is not using <code>http://localhost:8055</code> update DIRECTUS_SERVER in the <code>client/.env</code> file.</p></blockquote><p>Your Nuxt page should automatically open in your default browser, alternatively visit <code>http://localhost:3000</code>.</p><p>For more details on using Nuxtus see <a href="./using-nuxtus.html">the using Nuxtus section</a> of these docs.</p><h2 id="existing-project" tabindex="-1">Existing project <a class="header-anchor" href="#existing-project" aria-hidden="true">#</a></h2><ol><li><a href="./directus-extension.html">Install Directus Extension</a></li><li><a href="./nuxt-module.html">Install Nuxt Module</a></li></ol>`,17),s=[o];function l(r,c,u,d,p,h){return a(),t("div",null,s)}const g=e(n,[["render",l]]);export{f as __pageData,g as default};
