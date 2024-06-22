import{_ as a,c as s,o as i,a7 as t}from"./chunks/framework.C-49Vm5p.js";const e="/assets/nuxtus-cli.DADF8yDA.png",n="/assets/nuxtus-cli-create.Db2L7jKe.png",b=JSON.parse('{"title":"CLI","description":"","frontmatter":{},"headers":[],"relativePath":"cli.md","filePath":"cli.md","lastUpdated":1708301326000}'),l={name:"cli.md"},o=t(`<h1 id="cli" tabindex="-1">CLI <a class="header-anchor" href="#cli" aria-label="Permalink to &quot;CLI&quot;">​</a></h1><p>The Nuxtus CLI is a command line interface for Nuxt that allows you to manually run some of the commands otherwise run automatically.</p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><p>If you installed the <a href="/#installation">Nuxtus Boilerplate</a> then Nuxtus CLI is already installed, you can skip to the next section.</p><p>To manually install the Nuxtus CLI run the following <em>in the root of your Nuxt project</em>:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> i</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> --save-dev</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> @nuxtus/cli</span></span></code></pre></div><h2 id="configuration" tabindex="-1">Configuration <a class="header-anchor" href="#configuration" aria-label="Permalink to &quot;Configuration&quot;">​</a></h2><p>In order for Nuxtus CLI to communicate with Directus you need to provide connection credentials. Again, this is done automatically for you if you are using the boilerplate but if not please continue with the instructions below.</p><p>Create a <code>.env</code> file in the root of your <strong>Nuxt project</strong> and add the following lines:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># URL of your Directus instance</span></span>
<span class="line"><span>DIRECTUS_URL=http://localhost:8055</span></span>
<span class="line"><span></span></span>
<span class="line"><span># Directus login credentials</span></span>
<span class="line"><span>NUXTUS_DIRECTUS_ADMIN_EMAIL=admin@example.com</span></span>
<span class="line"><span>NUXTUS_DIRECTUS_ADMIN_PASSWORD=password</span></span></code></pre></div><h2 id="usage" tabindex="-1">Usage <a class="header-anchor" href="#usage" aria-label="Permalink to &quot;Usage&quot;">​</a></h2><p>The CLI command comes with in built help commands that can be used to get more information about the commands. From your terminal simply:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nuxtus</span></span></code></pre></div><blockquote><p>If you get a permission denied or command not found message make sure you are in the <code>/client</code> folder and/or use the full path <code>./node_modules/.bin/nuxtus</code></p></blockquote><p>You should see something similar to:</p><p><img src="`+e+'" alt="Nuxtus-CLI Screenshot"></p><blockquote><p>Make sure Directus is running before you use the Nuxtus CLI.</p></blockquote><p>For more details on a particular command:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nuxtus</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -h</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"> # For help with the create command</span></span></code></pre></div><h2 id="changing-to-static-token-authentication" tabindex="-1">Changing to static token authentication <a class="header-anchor" href="#changing-to-static-token-authentication" aria-label="Permalink to &quot;Changing to static token authentication&quot;">​</a></h2><p>To change to <a href="https://docs.directus.io/reference/authentication.html" target="_blank" rel="noreferrer">static token authentication</a> you can run the following command from the /client folder:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nuxtus</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> token</span></span></code></pre></div><p>This will generate a unique token, save it to the current user in Directus and update your <code>.env</code> file to use this token instead of a user name and password.</p><h2 id="creating-pages" tabindex="-1">Creating pages <a class="header-anchor" href="#creating-pages" aria-label="Permalink to &quot;Creating pages&quot;">​</a></h2><p>The Nuxtus CLI will read all the Collections in your Directus instance and can create Nuxt pages for each.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nuxtus</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> create</span></span></code></pre></div><p>You will be presented with a list of all the Directus Collections that have no corresponding Nuxt pages (with the Directus system collections removed). Simply select the Collections you want pages for (using the arrow keys and spacebar) and press enter to create the pages.</p><p><img src="'+n+`" alt="Nuxtus CLI create interface"></p><blockquote><p>For more details on the pages created see <a href="./using-nuxtus.html#using-directus-data">using Nuxtus</a></p></blockquote><h2 id="updating-types" tabindex="-1">Updating Types <a class="header-anchor" href="#updating-types" aria-label="Permalink to &quot;Updating Types&quot;">​</a></h2><p>Nuxtus CLI can also provide Typescript with type information for the collection objects. Simply run the following command to update the type information:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nuxtus</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> types</span></span></code></pre></div><p>Nuxtus CLI will create an <code>/interfaces</code> folder in your Nuxt project that contains a <code>nuxtus.ts</code> file containing an interface to use for typing.</p><p>To make use of the interface file in your Nuxt pages and components:</p><div class="language-typescript vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">script setup lang</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ts&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> { components } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;../../interfaces/nuxtus&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CollectionName</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> components</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;schemas&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">][</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ItemsCollectionName&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;/</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">script</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><blockquote><p>Replace CollectionName with the name of your collection.</p></blockquote><h2 id="cli-packaage-development" tabindex="-1">CLI packaage development <a class="header-anchor" href="#cli-packaage-development" aria-label="Permalink to &quot;CLI packaage development&quot;">​</a></h2><p>To watch for changes during development:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> start</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> &lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">comman</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre></div><p>For more details on <a href="https://github.com/nuxtus/cli" target="_blank" rel="noreferrer">Nuxtus CLI</a> click <a href="https://github.com/nuxtus/cli" target="_blank" rel="noreferrer">here</a>.</p><h3 id="package" tabindex="-1">Package <a class="header-anchor" href="#package" aria-label="Permalink to &quot;Package&quot;">​</a></h3><p>To build the JS:</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span></code></pre></div><h3 id="testing" tabindex="-1">Testing <a class="header-anchor" href="#testing" aria-label="Permalink to &quot;Testing&quot;">​</a></h3><p>Using <a href="https://vitest.dev/" target="_blank" rel="noreferrer">Vitest</a>.</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">$</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre></div>`,46),p=[o];function h(r,c,d,u,k,g){return i(),s("div",null,p)}const y=a(l,[["render",h]]);export{b as __pageData,y as default};
