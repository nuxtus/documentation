import{_ as e,c as l,o as n,a as t}from"./app.c8e21cfb.js";const g=JSON.parse('{"title":"Nuxt Localtunnel","description":"","frontmatter":{},"headers":[{"level":2,"title":"Installation","slug":"installation","link":"#installation","children":[]},{"level":2,"title":"Config","slug":"config","link":"#config","children":[]},{"level":2,"title":"Development","slug":"development","link":"#development","children":[]}],"relativePath":"localtunnel.md","lastUpdated":1668840724000}'),o={name:"localtunnel.md"},a=t(`<h1 id="nuxt-localtunnel" tabindex="-1">Nuxt Localtunnel <a class="header-anchor" href="#nuxt-localtunnel" aria-hidden="true">#</a></h1><p>A Nuxt module for automatically running <a href="https://github.com/localtunnel/localtunnel" target="_blank" rel="noreferrer">localtunnnel</a> to externally expose your development instance of Nuxt to the outside world.</p><p><strong>Allows full configuration of all localtunnel configuration options including https</strong></p><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-hidden="true">#</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">npm install @nuxtus/nuxt-localtunnel</span></span>
<span class="line"></span></code></pre></div><p>Edit your nuxt.config.ts and add the @nuxtus/nuxt-localtunnel module:</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#FFCB6B;">modules</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@nuxtus/nuxt-localtunnel</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#FFCB6B;">localtunnel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{}</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;">// Localtunnel config options go here (see below)</span></span>
<span class="line"></span></code></pre></div><p>Then start Nuxt as normal <code>npm run dev</code>, you will be given an extra (external URL to reach your development site).</p><h2 id="config" tabindex="-1">Config <a class="header-anchor" href="#config" aria-hidden="true">#</a></h2><p>All localtunnel configuration options are accepted via the <code>localtunnel</code> property of the <code>nuxt.config.ts</code> file:</p><ul><li><code>port</code> (number) The local port number to expose through localtunnel.</li><li><code>subdomain</code> (string) Request a specific subdomain on the proxy server. <strong>Note</strong> You may not actually receive this name depending on availability.</li><li><code>host</code> (string) URL for the upstream proxy server. Defaults to <code>https://localtunnel.me</code>.</li><li><code>local_host</code> (string) Proxy to this hostname instead of <code>localhost</code>. This will also cause the <code>Host</code> header to be re-written to this value in proxied requests.</li><li><code>local_https</code> (boolean) Enable tunneling to local HTTPS server.</li><li><code>local_cert</code> (string) Path to certificate PEM file for local HTTPS server.</li><li><code>local_key</code> (string) Path to certificate key file for local HTTPS server.</li><li><code>local_ca</code> (string) Path to certificate authority file for self-signed certificates.</li><li><code>allow_invalid_cert</code> (boolean) Disable certificate checks for your local HTTPS server (ignore cert/key/ca options).</li></ul><p>Refer to <a href="https://nodejs.org/api/tls.html#tls_tls_createsecurecontext_options" target="_blank" rel="noreferrer">tls.createSecureContext</a> for details on the certificate options.</p><h2 id="development" tabindex="-1">Development <a class="header-anchor" href="#development" aria-hidden="true">#</a></h2><ul><li>Run <code>npm run dev:prepare</code> to generate type stubs.</li><li>Use <code>npm run dev</code> to start playground in development mode.</li></ul>`,14),s=[a];function c(i,r,p,d,u,h){return n(),l("div",null,s)}const y=e(o,[["render",c]]);export{g as __pageData,y as default};
