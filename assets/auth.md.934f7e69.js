import{_ as a,c as e,o as s,a as t}from"./app.ac7b2865.js";const C=JSON.parse('{"title":"Authentication","description":"","frontmatter":{},"headers":[],"relativePath":"auth.md","lastUpdated":1708434371000}'),n={name:"auth.md"},o=t(`<h1 id="authentication" tabindex="-1">Authentication <a class="header-anchor" href="#authentication" aria-hidden="true">#</a></h1><p>By default Nuxtus creates a Directus admin user and uses these credentials to authenticate with Directus.</p><p>These details are stored in <code>/client/.env</code> as:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">NUXTUS_DIRECTUS_ADMIN_EMAIL=admin@example.com</span></span>
<span class="line"><span style="color:#A6ACCD;">NUXTUS_DIRECTUS_ADMIN_PASSWORD=password</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>You may want to use a <a href="https://docs.directus.io/reference/authentication.html" target="_blank" rel="noreferrer">static token</a> instead. Fortunately Nuxtus makes this easy with the <a href="./cli.html">Nuxtus CLI</a>. Make sure your Nuxtus instance is running and then, from your <code>/client</code> folder run:</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">nuxtus token</span></span>
<span class="line"></span></code></pre></div><p>This will generate a static token in Directus and replace your email/password credentials in the .env file with the token:</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">NUXTUS_DIRECTUS_STATIC_TOKEN=&lt;RANDOM_TOKEN&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div>`,8),c=[o];function i(l,p,r,d,u,h){return s(),e("div",null,c)}const A=a(n,[["render",i]]);export{C as __pageData,A as default};